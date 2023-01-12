import { gql, useQuery } from '@apollo/client';
import type { Plan } from 'types/graphql';

interface UsePlans {
  loading: boolean;
  error: boolean;
  plans: Plan[];
}

const QUERY = gql`
  query GetPlans {
    plans {
      id
      name
      maxMonthlyRecordings
      teamMemberLimit
      siteLimit
      dataStorageMonths
      pricing {
        id
        currency
        amount
        interval
      }
    }
  }
`;

export const usePlans = (): UsePlans => {
  const { data, error, loading } = useQuery<{ plans: Plan[] }>(QUERY);

  const plans = data ? data.plans : [];

  return {
    loading,
    error: !!error,
    plans: plans.slice(0, 6),
  };
};
