import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/api/graphql';
import { ToastProvider } from 'components/toast';
import { Page } from 'components/page';
import { User } from 'components/user';
import type { SqueakyApp } from 'types/page';

const { publicRuntimeConfig } = getConfig();

import '../styles/main.scss';

type SqueakyComponent = AppProps & { Component: SqueakyApp<any> }

const App: FC<SqueakyComponent> = ({ Component, pageProps, router }) => {
  const meta = Component.getMetaData(pageProps, router);

  const url = `${publicRuntimeConfig.webHost}${router.asPath}`;
  const image = meta.image || `${publicRuntimeConfig.webHost}/social-bg.png`;

  return (
    <>
      <Head>
        {/* General */}
        <title>{meta.title}</title> 
        <meta name='description' content={meta.description} />
        <meta name='robots' content={meta.index ? 'follow' : 'noindex'} />
        <meta name='google' content='nositelinkssearchbox' />
        <meta name='keywords' content='Web, Analytics, Recordings, Visitors' />
        <meta name='theme-color' content='#FFF5EB' />

        {/* Conditional */}
        {meta.index && <link rel='canonical' href={url} />}
        {meta.author && <meta name='author' content={meta.author} />}

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={image} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:site_name' content='Squeaky.ai' />

        {/* Twitter */}
        <meta property='twitter:site' content='@squeakyai' />
        <meta property='twitter:title' content={meta.title} />
        <meta property='twitter:description' content={meta.description} />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:image' content={image} />

        {/* Icons */}
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Third parties */}
        <meta name='ahrefs-site-verification' content='4ab46532f5ca328773b891e0df42f34475fb429916b57684a416f5a3e57e652e' />
      </Head>

      <ApolloProvider client={client}>
        <ToastProvider>
          <User {...pageProps}>
            <Page {...pageProps}>
              <Component {...pageProps} />
            </Page>
          </User>
        </ToastProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
