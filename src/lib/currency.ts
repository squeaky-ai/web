import { CURRENCIES } from 'data/common/constants';
import type { Currency } from 'types/common';

export enum Interval {
  MONTHLY = 'month',
  YEARLY = 'year',
}

export const getUsefulCurrency = (): Currency => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (['Europe/London', 'Europe/Belfast'].includes(tz)) {
    return CURRENCIES[1];
  }

  if (tz.startsWith('Europe')) {
    return CURRENCIES[0];
  }

  return CURRENCIES[2];
};
