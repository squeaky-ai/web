import { Interval } from 'lib/currency';
import type { Plan, Currency as CurrencySymbol } from 'types/graphql';

export const recordingsPerMonthLimit = (plans: Plan[], plan: number) => {
  const match = plans[plan - 1];

  if (plans.length === plan) {
    return 'Let\'s talk';
  }

  return match.maxMonthlyRecordings.toLocaleString();
};

export const getPriceForCurrentAndInterval = (plans: Plan[], plan: number, interval: Interval, currency: CurrencySymbol) => {
  const match = plans[plan - 1];

  if (plans.length === plan) {
    return 'Ask';
  }

  return match.pricing?.find(
    p => p.currency === currency && p.interval === interval
  )?.amount || 0;
};

export const formatShortRecordingCount = (count: number) => {
  if (!count) return null;

  const format = Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 })
  
  return format.format(count);
};
