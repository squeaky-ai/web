import { Interval } from 'lib/currency';
import type { Plan, Currency, PlanPrice } from 'types/graphql';

export const getPricingForCurrencyAndInterval = (plan: Plan, currency: Currency, interval: Interval) => {
  const pricing = plan?.pricing || [];

  return interval === Interval.MONTHLY
    ? getMonthlyPrice(pricing, currency)
    : getYearlyPrice(pricing, currency);
};

const getMonthlyPrice = (pricing: PlanPrice[], currency: Currency): number => {
  const plan = pricing.find(p => p.currency === currency && p.interval === Interval.MONTHLY);
  return plan?.amount || 0;
};

const getYearlyPrice = (pricing: PlanPrice[], currency: Currency) => {
  const plan = pricing.find(p => p.currency === currency && p.interval === Interval.YEARLY);
  return plan ? Math.floor(plan.amount / 12) : 0;
};
