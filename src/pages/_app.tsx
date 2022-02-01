import React from 'react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/api/graphql';
import { ToastProvider } from 'components/toast';
import { Page } from 'components/page';
import { User } from 'components/user';

import '../styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ToastProvider>
      <User {...pageProps}>
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </User>
    </ToastProvider>
  </ApolloProvider>
);

export default App;
