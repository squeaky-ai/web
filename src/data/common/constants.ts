import { PlansCurrency } from 'types/graphql';
import type { Currency } from 'types/common';

export const MM_SS_REGEX = /\d\d:\d\d/;

export const DD_MM_YYYY_REGEX = /\d\d\/\d\d\/\d\d\d\d/;

export const HEX_REGEX = /#.{6}/;

export const CURRENCIES: Currency[] = [
  {
    name: PlansCurrency.Eur, 
    symbol: '€',
  },
  {
    name: PlansCurrency.Gbp,
    symbol: '£'
  },
  {
    name: PlansCurrency.Usd,
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
