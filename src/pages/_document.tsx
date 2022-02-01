import React from 'react';
import Script from 'next/script';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  private get host() {
    try {
      return this.props.__NEXT_DATA__.runtimeConfig.webHost;
    } catch {
      return 'https://squeaky.ai'
    }
  }

  private get isDev() {
    return this.props.__NEXT_DATA__.runtimeConfig.dev || false;
  }

  public render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='Capture screen recordings and insightful data that help you see exactly how visitors are using your website or app.' />
          <meta name='keywords' content='Web, Analytics, Recordings, Visitors' />
          <meta property='og:title' content='Squeaky.ai | Better Web Analytics' />
          <meta property='og:description' content='Capture screen recordings and insightful data that help you see exactly how visitors are using your website or app.' />
          <meta property='og:url' content={this.host} />
          <meta property='og:image' content={`${this.host}/social-bg.png`} />
          <meta name='twitter:site' content='@squeakyai' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={`${this.host}/social-bg.png`} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:site_name' content='Squeaky.ai' />
          <meta name='theme-color' content='#FFF5EB' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&amp;display=swap' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='manifest' href='/site.webmanifest' />
          <Script 
            dangerouslySetInnerHTML={{ __html: this.isDev ? '' : `
              (function(s,q,e,a,u,k,y){
                s._sqSettings={site_id:'2918cf0f-42aa-499d-a4da-d362bd1011ed'};
                u=q.getElementsByTagName('head')[0];
                k=q.createElement('script');
                k.src=e+s._sqSettings.site_id;
                u.appendChild(k);
              })(window,document,'https://cdn.squeaky.ai/g/0.4.0/script.js?');
            `}}
            onLoad={() => {
              console.log('Squeaky loaded', this.props.__NEXT_DATA__.props.user);
            }}
          />
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
