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

  private get page() {
    return this.props.__NEXT_DATA__.page;
  }

  private get pageProps() {
    return this.props.__NEXT_DATA__.props.pageProps;
  }

  private get url() {
    return `${this.host}${this.page}`;
  }

  private get isIndexable() {
    return !this.page.startsWith('/auth/');
  }

  private get title() {
    if (this.pageProps.blog?.post) {
      return `Squeaky.ai | ${this.pageProps.blog.post.data.title}`;
    }

    return 'Squeaky.ai | The privacy-first customer insights platform';
  }

  private get description() {
    if (this.pageProps.blog?.post) {
      return `Squeaky.ai | ${this.pageProps.blog.post.data.metaDescription}`;
    }

    return 'Understand exactly how customers are using your website or web app, without invading their privacy.';
  }

  public render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          {/* General */}
          <meta name='description' content={this.description} />
          <meta name='robots' content={this.isIndexable ? 'follow' : 'noindex'} />
          <meta name='google' content='nositelinkssearchbox' />
          <meta name='keywords' content='Web, Analytics, Recordings, Visitors' />
          <meta name='theme-color' content='#FFF5EB' />

          {this.isIndexable && <link rel='canonical' href={this.url} />}

          <meta name='ahrefs-site-verification' content='4ab46532f5ca328773b891e0df42f34475fb429916b57684a416f5a3e57e652e' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:title' content={this.title} />
          <meta property='og:description' content={this.description} />
          <meta property='og:url' content={this.url} />
          <meta property='og:image' content={`${this.host}/social-bg.png`} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:site_name' content='Squeaky.ai' />

          {/* Twitter */}
          <meta property='twitter:site' content='@squeakyai' />
          <meta property='twitter:title' content={this.title} />
          <meta property='twitter:description' content={this.description} />
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
