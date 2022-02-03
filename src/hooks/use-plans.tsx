import { sortBy } from 'lodash';
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
      name
      maxMonthlyRecordings
      monthlyPrice {
        GBP
        EUR
        USD
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
    plans: sortBy(plans, p => p.monthlyPrice?.USD),
  };
};
