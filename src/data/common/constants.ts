import { Currency as CurrencySymbol } from 'types/graphql';
import type { Currency } from 'types/common';

export const MM_SS_REGEX = /\d\d:\d\d/;

export const DD_MM_YYYY_REGEX = /\d\d\/\d\d\/\d\d\d\d/;

export const HEX_REGEX = /#.{6}/;

export const CURRENCIES: Currency[] = [
  {
    name: CurrencySymbol.Eur, 
    symbol: '€',
  },
  {
    name: CurrencySymbol.Gbp,
    symbol: '£'
  },
  {
    name: CurrencySymbol.Usd,
    symbol: '$',
  },
];

export enum Plans {
  FREE = 1,
  LIGHT = 2,
  PLUS = 3,
  BUSINESS = 4,
  PREMIUM = 5,
  ENTERPRISE = 6,
};
