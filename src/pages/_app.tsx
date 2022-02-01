import React from 'react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/api/graphql';
import { ToastProvider } from 'components/toast';
import { Page } from 'components/page';

import '../styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const delayedVisitorCheck = () => setTimeout(() => {
    if (window.squeaky && pageProps.user) {
      const { id, firstName, lastName, email, superuser, createdAt } = pageProps.user;

      window.squeaky.identify(id, {
        'First name': firstName,
        'Last name': lastName,
        'Email': email,
        'Superuser': superuser,
        'Created': createdAt,
      });
    }
  }, 1000);

  React.useEffect(() => {
    delayedVisitorCheck();
  }, []);

  return (
    <ApolloProvider client={client}>
      <ToastProvider>
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </ToastProvider>
    </ApolloProvider>
  );
};

export default App;
