import type { Plan, PlansCurrency } from 'types/graphql';

export const recordingsPerMonthLimit = (plans: Plan[], plan: number) => {
  const match = plans[plan - 1];

  if (plans.length === plan) {
    return '250,000+';
  }

  return match.maxMonthlyRecordings.toLocaleString();
};

export const monthlyPrice = (plans: Plan[], plan: number, currency: PlansCurrency) => {
  const match = plans[plan - 1];

  if (plans.length === plan) {
    return 'Ask';
  }

  return match.pricing?.find(p => p.currency === currency)?.amount || 0;
};

export const formatShortRecordingCount = (count: number) => {
  if (!count) return null;

  const format = Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 })
  
  return format.format(count);
};
