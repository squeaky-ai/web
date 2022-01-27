import { range, minBy } from 'lodash';
import type { AbsoluteTime, TimePeriod } from 'types/common';

import {
  getHours,
  getDayOfYear,
  getMonth,
  format,
  subDays,
  subMonths,
  differenceInDays,
  subWeeks,
  getWeek,
} from 'date-fns';

type DateGroup = 'hourly' | 'daily' | 'weekly' | 'monthly';

export interface ChartInput {
  timestamp: string;
}

export interface ChartData<T extends ChartInput> {
  key: string;
  data: T[];
}

export interface DataForPeriod<T extends ChartInput> {
  data: ChartData<T>[];
}

export const getAmPmForHour = (hour: number): string => {
  if (hour == 24) return '12pm';
  if (hour <= 12) return `${hour}am`;
  return `${hour - 12}pm`;
};

const getDateFromTimestamp = (timestamp: string) => new Date(timestamp);

const toSlashyDate = (s: string) => s.split('/').reverse().join('-');

const getDateGroupForRange = (from: Date, to: Date): [DateGroup, number] => {
  const days = differenceInDays(to, from);

  if (days === 1) {
    return ['hourly', null];
  }

  if (days <= 21) {
    return ['daily', days];
  }

  if (days > 21 && days < 90) {
    return ['weekly', Math.ceil(days / 7)];
  }
  
  return ['monthly', days / 30];
};

const getDurationForAbsoluteDate = (period: AbsoluteTime, input: ChartInput[]): [DateGroup, number] => {
  // The after duration need to be from the time
  // specified until todays date
  if (period.fromType === 'After') {
    const from = new Date(toSlashyDate(period.fromDate));
    const to = new Date();

    return getDateGroupForRange(from, to);
  }

  // The before duration needs to be from the time
  // specified until the earliest date we have data
  // for
  if (period.fromType === 'Before') {
    const from = new Date(minBy(input, i => new Date(i.timestamp).valueOf()).timestamp);
    const to = new Date(toSlashyDate(period.fromDate));

    return getDateGroupForRange(from, to);
  }

  // For between the duration needs to be between the 
  // two specified dates
  const from = new Date(toSlashyDate(period.betweenFromDate));
  const to = new Date(toSlashyDate(period.betweenToDate));

  return getDateGroupForRange(from, to);
};

const getDurationForPeriod = (period: TimePeriod, input: ChartInput[]): [DateGroup, number] => {
  switch(period) {
    case 'today':
    case 'yesterday':
      return ['hourly', null];
    case 'past_seven_days':
      return ['daily', 7];
    case 'past_fourteen_days':
      return ['daily', 14];
    case 'past_thirty_days':
      return ['weekly', 4];
    case 'past_six_months':
      return ['monthly', 6];
    case 'past_year':
      return ['monthly', 12];
    default:
      return getDurationForAbsoluteDate(period, input);
  }
};

// Group the results for a graph where the axis 
// should be the hours in a day, .i.e. Today, 
// Yesterday, or single absolute today
const getHourlyResults = <T extends ChartInput>(input: T[]): DataForPeriod<T> => {
  const data = range(0, 24).map(i => {
    const values = input.filter(s => getHours(getDateFromTimestamp(s.timestamp)) === i);

    return {
      key: getAmPmForHour(i),
      data: values,
    };
  });

  return { data };
};

const getDailyResults = <T extends ChartInput>(input: T[], days: number): DataForPeriod<T> => {
  const now = new Date();

  const data = range(0, days).map(i => {
    const date = subDays(now, i);
    const values = input.filter(s => getDayOfYear(getDateFromTimestamp(s.timestamp)) === getDayOfYear(date));

    return {
      key: format(date, 'd/M'),
      data: values,
    };
  });

  return { data: data.reverse() };
};


const getWeeklyResults = <T extends ChartInput>(input: T[], weeks: number): DataForPeriod<T> => {
  const now = new Date();

  const data = range(0, weeks).map(i => {
    const date = subWeeks(now, i);
    const values = input.filter(s => getWeek(getDateFromTimestamp(s.timestamp)) === getWeek(date));

    return {
      key: format(date, 'd/M'),
      data: values,
    };
  });

  return { data: data.reverse() };
};

const getMonthlyResults = <T extends ChartInput>(input: T[], months: number): DataForPeriod<T> => {
  const now = new Date();

  const data = range(0, months).map(i => {
    const date = subMonths(now, i);

    // Get all the values that fall on the certain day
    const values = input.filter(s => getMonth(getDateFromTimestamp(s.timestamp)) === getMonth(date));

    return {
      key: format(date, 'MMM yyyy'),
      data: values,
    };
  });

  return { data: data.reverse() };
};

export const formatLabel = (period: TimePeriod, label: string) => {
  switch(period) {
    case 'today':
    case 'yesterday':
      return label.replace(/(am|pm)$/, '.00$1');
    default:
      return label;
  }
};

export const formatChartData = <T extends ChartInput>(period: TimePeriod, input: T[]): DataForPeriod<T> => {
  const [group, duration] = getDurationForPeriod(period, input);

  if (group === 'hourly') {
    return getHourlyResults(input);
  }

  if (group === 'daily') {
    return getDailyResults(input, duration);
  }

  if (group === 'weekly') {
    return getWeeklyResults(input, duration); 
  }

  return getMonthlyResults(input, duration);
};
