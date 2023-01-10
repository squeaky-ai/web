import { Interval } from 'lib/currency';
import type { Plan, Currency } from 'types/graphql';

export const getPricingForCurrencyAndInterval = (plan: Plan, currency: Currency, interval: Interval) => {
  return (plan.pricing || [])
    .find(p => p.currency === currency && p.interval === interval)?.amount || 0;
};
