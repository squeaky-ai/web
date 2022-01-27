import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { groupBy, range } from 'lodash';
import { percentage } from 'lib/maths';
import { getAmPmForHour } from 'lib/charts';
import { getDayByIndex } from 'lib/dates';
import { getDay, getHours } from 'date-fns';
import { ANALYTICS_COLOURS } from 'data/analytics/constants';

interface Props {
  visitsAt: string[];
}

type DateGroups = Record<string, Record<string, Date[]>>;

export const AnalyticsVisitsAt: FC<Props> = ({ visitsAt }) => {
  const visits = visitsAt.map(v => new Date(v));

  const groupedByDay = groupBy(visits, v => getDay(v));

  const groupedByDayAndHour = Object.entries(groupedByDay).reduce((acc, [day, dates]) => {
    acc[day] = groupBy(dates, d => getHours(d));
    return acc;
  }, {} as DateGroups);

  const getAndHourForIndex = (index: number) => {
    const hour = index % 25;
    const day = Math.ceil((index + 1) / 25) - 1;

    return [hour, day];
  };
    
  const getCountForIndex = (index: number): number => {
    const [hour, day] = getAndHourForIndex(index);
        
    const hours = groupedByDayAndHour[day] || {};

    return hours[hour]?.length || 0;
  };

  const getBackgroundColor = (count: number) => {
    const percent = percentage(maxCount, count);
    const potentials = ANALYTICS_COLOURS.filter(c => percent >= c.percentage);
    return potentials[potentials.length - 1];
  };

  const orderedDayAndHourCounts = range(25 * 8).map(i => getCountForIndex(i));

  const maxCount = Math.max(...Object.values(orderedDayAndHourCounts));

  return (
    <div className='visits-at'>
      {orderedDayAndHourCounts.map((count, index) => {
        const [hour, day] = getAndHourForIndex(index);

        const isYLabel = hour === 0;
        const isXLabel = day === 7;

        if (isYLabel) {
          return (
            <div key={index} className='visit label'>
              {getDayByIndex(day).substring(0, 3)}
            </div>
          );
        }

        if (isXLabel) {
          return (
            <div key={index} className={classnames('visit label', { hidden: hour % 2 === 0 })}>
              {getAmPmForHour(hour)}
            </div>
          );
        }

        return (
          <div 
            key={index} 
            className='visit' 
            style={{ background: getBackgroundColor(count).background }}
            data-label={`${getDayByIndex(day)} ${getAmPmForHour(hour)}-${getAmPmForHour(hour === 24 ? 1 : hour + 1)} ${count} Vistors`}
          />
        );
      })}
    </div>
  );
};
