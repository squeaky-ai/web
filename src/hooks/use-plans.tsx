import { gql, useQuery } from '@apollo/client';
import type { DecoratedPlan } from 'types/graphql';

interface UsePlans {
  loading: boolean;
  error: boolean;
  plans: DecoratedPlan[];
}

const QUERY = gql`
  query GetPlans {
    plans {
      name
      description
      plan {
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
      show
      current
      usage
      includesCapabilitiesFrom
      capabilities
      options
    }
  }
`;

export const usePlans = (): UsePlans => {
  const { data, error, loading } = useQuery<{ plans: DecoratedPlan[] }>(QUERY);

  const plans = data ? data.plans : [];

  return {
    loading,
    error: !!error,
    plans,
  };
};
