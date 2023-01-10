import { Currency } from 'types/graphql';

export enum Interval {
  MONTHLY = 'month',
  YEARLY = 'year',
}

export const getUsefulCurrency = (): Currency => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (['Europe/London', 'Europe/Belfast'].includes(tz)) {
    return Currency.Gbp;
  }

  if (tz.startsWith('Europe')) {
    return Currency.Eur;
  }

  return Currency.Usd;
};

export const getCurrencySymbol = (currency: Currency): string => {
  switch(currency) {
    case Currency.Eur:
      return '€';
    case Currency.Gbp:
      return '£';
    case Currency.Usd:
      return '$';
  }
};
