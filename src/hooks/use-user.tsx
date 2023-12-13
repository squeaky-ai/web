import { useQuery } from '@apollo/client';
import { USER_QUERY } from 'data/users/queries';
import { User } from 'types/graphql';

interface UseUser {
  user?: User;
  loading: boolean;
}

export const useUser = (): UseUser => {
  const { data, loading } = useQuery(USER_QUERY);

  return {
    user: data?.user,
    loading,
  };
};
