import React from 'react';
import type { FC } from 'react';
import type { User as UserType } from 'types/graphql';

interface Props {
  user: UserType;
}

export const User: FC<Props> = ({ children, user }) => {
  const delayedVisitorCheck = () => setTimeout(() => {
    if (window.squeaky && user) {
      const { id, firstName, lastName, email, superuser, createdAt } = user;

      window.squeaky.identify(id, {
        'First name': firstName,
        'Last name': lastName,
        'Email': email,
        'Superuser': superuser ? 'Yes' : 'No',
        'Created': createdAt,
      });
    }
  }, 1000);

  React.useEffect(() => {
    delayedVisitorCheck();
  }, []);

  return (
    <>{children}</>
  )
};
