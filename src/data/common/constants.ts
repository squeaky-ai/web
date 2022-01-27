import type { Currency } from 'types/common';

export const MM_SS_REGEX = /\d\d:\d\d/;

export const DD_MM_YYYY_REGEX = /\d\d\/\d\d\/\d\d\d\d/;

export const HEX_REGEX = /#.{6}/;

export const CURRENCIES: Currency[] = [
  {
    name: 'EUR', 
    symbol: '€',
  },
  {
    name: 'GBP',
    symbol: '£'
  },
  {
    name: 'USD',
    symbol: '$',
  },
];
