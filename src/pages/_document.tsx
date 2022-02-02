import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  private get host() {
    try {
      return this.props.__NEXT_DATA__.runtimeConfig.webHost;
    } catch {
      return 'https://squeaky.ai'
    }
  }

  private get url() {
    return this.props.__NEXT_DATA__.page;
  }

  public render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          {/* General */}
          <meta name='description' content='Understand exactly how customers are using your website or web app, without invading their privacy.' />
          <meta name='robots' content='follow' />
          <meta name='google' content='nositelinkssearchbox' />
          <meta name='keywords' content='Web, Analytics, Recordings, Visitors' />
          <meta name='theme-color' content='#FFF5EB' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Squeaky.ai | The privacy-first customer experience platform' />
          <meta property='og:description' content='Understand exactly how customers are using your website or web app, without invading their privacy.' />
          <meta property='og:url' content={this.url} />
          <meta property='og:image' content={`${this.host}/social-bg.png`} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:site_name' content='Squeaky.ai' />

          {/* Twitter */}
          <meta property='twitter:site' content='@squeakyai' />
          <meta property='twitter:title' content='Squeaky | The privacy-first customer experience platform' />
          <meta property='twitter:description' content='Understand exactly how customers are using your website or web app, without invading their privacy.' />
          <meta property='twitter:url' content={this.url} />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:image' content={`${this.host}/social-bg.png`} />

          {/* Icons */}
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
