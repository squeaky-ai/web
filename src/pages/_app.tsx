import React from 'react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/api/graphql';
import { ToastProvider } from 'components/toast';
import { UserProvider } from 'components/user';
import { Page } from 'components/page';

import '../styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ToastProvider>
      <UserProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </UserProvider>
    </ToastProvider>
  </ApolloProvider>
);

export default App;
