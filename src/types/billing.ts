import { Plan } from 'types/graphql'

export interface PlanData {
  name: string;
  plan: Plan;
  usage: string[];
  description: string;
  includesCapabilitiesFrom: string | null,
  capabilities: string[],
  options: string[],
}
