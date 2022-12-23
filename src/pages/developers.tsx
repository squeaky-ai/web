import React from 'react';
import { NextPage } from 'next';
import { Icon } from 'components/icon';
import { PageTitle } from 'components/page-title';
import { Container } from 'components/container';
import { Code } from 'components/code';
import { Main } from 'components/main';
import { DevelopersTabs } from 'components/developers-tabs';
import { Tabs } from 'components/tabs';
import type { SqueakyPage } from 'types/page';
import type { DeveloperTab } from 'types/developers';

const Developers: SqueakyPage<NextPage> = () => {
  const [tab, setTab] = React.useState<DeveloperTab>('tracking-code');

  return (
    <>
      <PageTitle
        title='Developers'
        subtitle={<>Last Updated: <b>August 24th 2022</b></>}
      />

      <Main>
        <Container className='md-lg centered developers-docs'>
          <DevelopersTabs tab={tab} setTab={setTab} />

          <Container className='developers-contents'>
            {tab === 'tracking-code' && (
              <>
                <h4>Tracking Code</h4>
                <p>We recommend that you install the tracking code within the <code className='code'>{'<'}head{'>'}</code> of your page so that it captures as much of the session as possible. Loading the script just before the <code className='code'>{'<'}body{'/>'}</code> could result in the first second or so of a visitors&apos; session being missed.</p>
                <p>The script is very light and loading is non-blocking, so performance should not be a concern.</p>
                <p>You can find the correct script with your site id on the settings page of your site. Every site site is different, but here are some suggestions for where best to place the script into your app.</p>

                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/layouts/application.html.erb
                          </p>
                          <Code lang='html'>
{`<!DOCTYPE html>
  <html>
  <head>
    <script>
      (function(s,q,u,e,a,k,y){
        s._sqSettings={site_id:'your-site-id'};
        e=q.getElementsByTagName('head')[0];
        a=q.createElement('script');
        a.src=u+s._sqSettings.site_id;
        e.appendChild(a);
      })(window,document,'https://cdn.squeaky.ai/g/1.0.0/script.js?');
    </script>
  </head>

  <body>
    <%= yield %>
  </body>
</html>`}
                          </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            pages/_document.tsx
                          </p>
                          <Code lang='typescript'>
{`import NextDocument, { 
  Html, 
  Head, 
  Main, 
  NextScript, 
  DocumentContext,
} from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: \`
            (function(s,q,u,e,a,k,y){
              s._sqSettings={site_id:'your-site-id'};
              e=q.getElementsByTagName('head')[0];
              a=q.createElement('script');
              a.src=u+s._sqSettings.site_id;
              e.appendChild(a);
            })(window,document,'https://cdn.squeaky.ai/g/1.0.0/script.js?');
          \`}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      );
    }
  }
}

export default Document;`}
                          </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}

            {tab === 'user-privacy' && (
              <>
                <h4>Privacy</h4>
                <p>At Squeaky we care a lot about user privacy. We do not store any Personally Identifiable Information (PII) related to visitors or their recordings, such as their location or IP address. We try our best to make the recordings as free from PII as possible by masking all form data and any non essential meta data.</p>
                <p>PII comes in all shapes and sizes and as a result, some responsibility will fall on the site owner.</p>
                <p>Squeaky offers two css class names that can be used to protect your users&apos; privacy:</p>
                <p><code className='code'>.squeaky-hide</code> will remove everything contained within it, and replace it with an element of the same dimenstions so that it does not effect the rendering of the page. You may want to use this if there is a large section of text, or some PII that is not in text form (such as an image).</p>

                <p>It could look like the following:</p>
                <Code lang='html'>
{`<div class="squeaky-hide">
  <p>Name: Bob</p>
  <p>Email: bob@squeaky.ai</p>
  <img src="/images/profile-image.png">
</div>`}
                </Code>

                <p><code className='code'>.squeaky-mask</code> will replace all text contained with asterisks. This is more suited to small pieces of text, such as a users&apos; name appearing within a section of non identifiable text.</p>

                <p>A common sitation may be:</p>

                <Code lang='html'>
{`<p>Welcome back, <span class="squeaky-mask">Bob</span></p>`}
                </Code>
              </>
            )}

            {tab === 'user-indentification' && (
              <>
                <h4><code className='code'>squeaky.identify();</code></h4>
                <p>Privacy is important, however there are times that you may want to link some attributes to a Squeaky visitor. By default, a visitor is completely anonymous, although the site owner can associate any attributes they want with a visitor.</p>
                <p>This is achieved by using the <code className='code'>squeaky.identify()</code> method that is exposed by the Squeaky script. The identify method accepts any key/values, but keys named <code className='code'>email</code> or <code className='code'>name</code> will have the added benefit of being indexed for search on the visitors page.</p>

                <p>The identify method takes two arguments. The first is your users unique id (likely the id generated by your database), followed by a javascript object containing the key/value pairs you&apos;d like to associate:</p>

                <Code lang='typescript'>
{`squeaky.identify('<your-users-uniqueid>', {
  foo: 'bar',
  bar: 'baz',
  ...
});`}
                </Code>

                <p>Once again, every site is different and the location of this is best left to you. You only need to identify a user once per session, so it can be hoisted up fairly high. Here is a recommendation:</p>

                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/layouts/application.html.erb
                          </p>
                          <Code lang='html'>
{`<body>
  <%= yield %>

  <% if user_signed_in? %>
    <script type="text/javascript">
      window.addEventListener('load', () => {
        squeaky.identify('<%= current_user.id %>', {
          name: '<%= current_user.full_name %>',
          email: '<%= current_user.email %>'
        });
      });
    </script>
  <% end %>
</body>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            pages/_app.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // This assumes you are fetching the logged in user server side
    const { user } = pageProps;

    if (!user) return;

    window.addEventListener('load', () => {
      squeaky.identify(user.id, {
        name: user.fullName,
        email: user.email,
      });
    });
  }, []);

  return <Component {...pageProps} />;
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />

                <p>The Squeaky script initializes and loads asynchronously, and depending on how lightweight your page is, may not be loaded by the time you try to identify the user. It is best to wait for the page to finish entirely before attempting to identify a user.</p>
              </>
            )}

            {tab === 'page-views' && (
              <>
                <h4><code className='code'>squeaky.addPageView();</code></h4>
                <p>Squeaky is designed to work with conventional page routing, and will automatically capture page views for both server rendered pages and single page apps.</p>
                <p>However, if your application uses non-conventional routing, such as a Hash Router, you will need to manually track the page views.</p>
                <p>You can call <code className='code'>squeaky.addPageView();</code> when your page has loaded, or when your single page app has transitioned to a new view. Be cautious to only call this once per page view or you may end up with duplicate counts in your recordings and analytics.</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/layouts/application.html.erb
                          </p>
                          <Code lang='html'>
{`<body>
  <%= yield %>

  <script type="text/javascript">
    window.addEventListener('load', () => {
      squeaky.addPageView();
    });
  </script>
</body>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            pages/_app.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    window.addEventListener('load', () => {
      squeaky.addPageView();
    });
  }, []);

  return <Component {...pageProps} />;
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}

            {tab === 'nps-surveys' && (
              <>
                <h4><code className='code'>squeaky.showNpsSurvey();</code></h4>
                <p>Squeaky has several scheduling options, with one of those being &apos;custom&apos;. If you select the &apos;custom&apos; option you can trigger the NPS survey programatically from within your application.</p>
                <p>If you use any scheduling option besides &apos;custom&apos; then calling this method will have effect.</p>
                <p>One use may be to attach the function call to a button within your application:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/partials/_nps_survey_button.html.erb
                          </p>
                          <Code lang='html'>
{`<button class="nps-survey" onclick="squeaky.showNpsSurvey();">
  Give your feedback
</button>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            components/nps-survey-button.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';

const Button: FC = () => {
  const handleClick = () => {
    squeaky.showNpsSurvey();
  };

  return (
    <button className='nps-survey' onClick={handleClick}>
      Give your feedback
    </button>
  );
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}

            {tab === 'sentiment-surveys' && (
              <>
                <h4><code className='code'>squeaky.showSentimentSurvey();</code></h4>
                <p>Squeaky allows developers to trigger the sentiment survey programatically. Within the sentiment appearance tab in Squeaky, you can select the custom trigger option.</p>
                <p>If the custom trigger option is checked, then the sentiment survey will not show until this function is called.</p>
                <p>One use may be to attach the function call to a button within your application:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/partials/_sentiment_survey_button.html.erb
                          </p>
                          <Code lang='html'>
{`<button class="sentiment-survey" onclick="squeaky.showSentimentSurvey();">
  Give your feedback
</button>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            components/sentiment-survey-button.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';

const Button: FC = () => {
  const handleClick = () => {
    squeaky.showSentimentSurvey();
  };

  return (
    <button className='sentiment-survey' onClick={handleClick}>
      Give your feedback
    </button>
  );
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}
            {tab === 'accept-consent' && (
              <>
                <h4><code className='code'>squeaky.acceptConsent();</code></h4>
                <p>If you wish to request consent from your visitors before Squeaky collects any data, you have two options. The first option is to use the Squeaky widget, and the second is to use the API with your own interface.</p>
                <p>To let visitors consent via your own interface, simply call the function:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/partials/_accept_consent_button.html.erb
                          </p>
                          <Code lang='html'>
{`<button class="consent" onclick="squeaky.acceptConsent();">
  Accept Consent
</button>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            components/accept-consent-button.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';

const Button: FC = () => {
  const handleClick = () => {
    squeaky.acceptConsent();
  };

  return (
    <button className='consent' onClick={handleClick}>
      Accept Consent
    </button>
  );
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}
            {tab === 'reject-consent' && (
              <>
                <h4><code className='code'>squeaky.rejectConsent();</code></h4>
                <p>If you wish to request consent from your visitors before Squeaky collects any data, you have two options. The first option is to use the Squeaky widget, and the second is to use the API with your own interface.</p>
                <p>To let visitors reject consent via your own interface, simply call the function:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            app/views/partials/_reject_consent_button.html.erb
                          </p>
                          <Code lang='html'>
{`<button class="consent" onclick="squeaky.rejectConsent();">
  Reject Consent
</button>`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'react',
                      name: 'React (Next.js)',
                      icon: 'reactjs-line',
                      body: (
                        <>
                          <p className='filename'>
                            <Icon name='file-code-line' />
                            components/reject-consent-button.tsx
                          </p>
                          <Code lang='typescript'>
{`import React, { FC } from 'react';

const Button: FC = () => {
  const handleClick = () => {
    squeaky.rejectConsent();
  };

  return (
    <button className='consent' onClick={handleClick}>
      Reject Consent
    </button>
  );
};`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}
          </Container>
        </Container>
      </Main>
    </>
  );
};

Developers.getMetaData = () => ({
  title: 'Squeaky | Developers',
  description: 'If you\'d like help installing Squeaky, or getting the most out of our privacy features, read our developer documentation and you\'ll hit the ground running.',
  index: true,
});

export default Developers;
