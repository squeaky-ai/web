import React from 'react';
import type { FC } from 'react';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from 'data/users/queries';
import type { User } from 'types/graphql';

interface ContextProps {
  user: User | null;
  loading: boolean;
}

export const UserContext = React.createContext<ContextProps>({ user: null, loading: true });

const { Provider } = UserContext;

export const UserProvider: FC = ({ children }) => {
  const { data, loading } = useQuery<{ user: User }>(USER_QUERY);

  return (
    <Provider value={{ user: data?.user, loading }}>
      {children}
    </Provider>
  );
};
