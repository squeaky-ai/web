import type { Plan } from 'types/graphql';
import type { PlanData } from 'types/billing';

export enum Plans {
  Free = '05bdce28-3ac8-4c40-bd5a-48c039bd3c7f',
  Starter = 'b5be7346-b896-4e4f-9598-e206efca98a6',
  Business = 'b2054935-4fdf-45d0-929b-853cfe8d4a1c',
}

export const buildPlanData = (plans: Plan[]): PlanData[] => {
  if (!plans?.length) return [];

  const getPlanByPlanId = (planId: string) => plans.find(plan => plan.id === planId);

  const freePlan = getPlanByPlanId(Plans.Free);
  const starterPlan = getPlanByPlanId(Plans.Starter);
  const businessPlan = getPlanByPlanId(Plans.Business);

  return [
    {
      name: 'Free',
      plan: freePlan,
      description: 'Simple analytics for small sites and hobbyists.',
      usage: [
        `${freePlan.maxMonthlyRecordings.toLocaleString()} visits per month`,
        `${freePlan.teamMemberLimit} team member`,
        `${freePlan.dataStorageMonths} month data retention`,
      ],
      includesCapabilitiesFrom: null,
      capabilities: [
        'Website dashboard',
        'Visitor profiles',
        'Session recording',
        'Site analytics',
        'Heatmaps (Click)',
      ],
      options: [],
    },
    {
      name: 'Starter',
      plan: starterPlan,
      description: 'Meaningful analytics for growing businesses.',
      usage: [
        `${starterPlan.maxMonthlyRecordings.toLocaleString()} visits per month`,
        `${starterPlan.teamMemberLimit || 'Unlimited'} team member`,
        `${starterPlan.dataStorageMonths} month data retention`,
      ],
      includesCapabilitiesFrom: 'Free',
      capabilities: [
        'Heatmaps (Click and Scroll)',
        'Survey library',
      ],
      options: [],
    },
    {
      name: 'Business',
      plan: businessPlan,
      description: 'Comprehensive analytics for customer-obsessed teams.',
      usage: [
        `${businessPlan.maxMonthlyRecordings.toLocaleString()} visits per month`,
        `${businessPlan.teamMemberLimit || 'Unlimited'} team members`,
        `${businessPlan.dataStorageMonths} month data retention`,
      ],
      includesCapabilitiesFrom: 'Starter',
      capabilities: [
        'Page analytics',
        'Heatmaps (All)',
        'Event tracking',
        'Error tracking',
        'Custom surveys (up to 5)',
        'Segments (up to 25)',
        'Journey mapping',
      ],
      options: [],
    }
  ];
};
