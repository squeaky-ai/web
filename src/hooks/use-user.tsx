import React from 'react';
import { UserContext } from 'components/user';
import type { User } from 'types/graphql';

interface UseUser {
  user: User | null;
  loading: boolean;
}

export const useUser = (): UseUser => {
  return React.useContext(UserContext);
};
