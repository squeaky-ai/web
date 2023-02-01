import React from 'react';
import { NextPage } from 'next';
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
        subtitle={<>Last Updated: <b>February 1st 2023</b></>}
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
                <p>If you would prefer to defer the loading of Squeaky until the entire page has loaded, you can load the script with <code className='code'>defer</code> or <code className='code'>async</code>, however you may miss the begninning of the session.</p>
                <p>You can find the correct script with your site id on the settings page of your site. Every site is different, but here are some suggestions for where best to place the script into your app.</p>

                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
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

            {tab === 'sdk' && (
              <>
                <h4>SDK Intro</h4>
                <p>When Squeaky loads on your site, it will load and bind a script to <code className='code'>window.squeaky</code> and make several SDK methods available for you to use.</p>
                <p>These methods require no additional authentication and will integrate with the ongoing session recording.</p>
                <p>The loading of Squeaky is asynchronous, and you should be careful not to call methods that are not yet available.</p>
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

            {tab === 'add-event' && (
              <>
                <h4><code className='code'>squeaky.addEvent();</code></h4>
                <p>You can collect custom event data with Squeaky by using the <code className='code'>addEvent</code> function. Squeaky will automatically create an Event based on the name that you provide.</p>
                <p>Along with the name, you can pass a key-value object and this data will be displayed in the Event Feed within Squeaky.</p>
                <p>An example may be that you want to record which currency your users have selected from a dropdown:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <Code lang='html'>
{`<select class="currency" onchange="squeaky.addEvent('CurrencyChanged', { currency: event.target.value });">
  <option value="USD">$</option>
  <option value="EUR">€</option>
  <option value="GBP">£</option>
</select>`}
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
                          <Code lang='typescript'>
{`import React, { FC } from 'react';

const CurrencySelect: FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    squeaky.addEvent('CurrencyChanged', {
      currency: event.target.value,
    });
  };

  return (
    <select className='currency' onChange={handleChange}>
      <option value='USD'>$</option>
      <option value='EUR'>€</option>
      <option value='GBP'>£</option>
    </select>
  );
};
`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}

            {tab === 'api' && (
              <>
                <h4>API Intro</h4>
                <p>Squeaky provides a REST API for you to add data that is not part of a users&apos; session.</p>
                <p>This API requires an API key that you can generate from within the site settings and must be passed with requests as a <code className='code'>X-SQUEAKY-API-KEY</code> header.</p>
                <p><b>Please note</b>: The data field should be provided as stringified JSON.</p>
                <p>Currently Squeaky do not provide libraries for you to use, but you can create a simple client using this as reference:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <Code lang='ruby'>
{`require 'httparty'

class SqueakyClient
  include HTTParty

  base_uri 'https://squeaky.ai'

  def add_event(name:, user_id:, data:)
    body = {
      name:,
      user_id:,
      data: data.to_json,
      timestamp: Time.now * 1000
    }.to_json

    self.class.post('/api/events', body:, headers:, timeout:)
  end

  def create_visitor(user_id: data:)
    body = {
      user_id:,
      data: data.to_json
    }.to_json

    self.class.post('/api/visitors', body:, headers:, timeout:)
  end

  private

  def headers
    {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json',
      'X-SQUEAKY-API-KEY' => ENV.fetch('squeaky-api-key')
    }
  end

  def timeout
    5
  end
end`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'typescript',
                      name: 'Node.js',
                      icon: 'npmjs-line',
                      body: (
                        <>
                          <Code lang='typescript'>
{`export class SqueakyClient {
  private baseUri = 'https://squeaky.ai';

  public async addEvent(name: string, userId: number, data: Record<string, string>) {
    const body = {
      name,
      user_id: userId,
      data: JSON.stringify(data),
      timestamp: new Date().valueOf(),
    };

    return fetch(\`\${this.baseUri}/api/events\`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers,
    });
  }

  public async createVisitor(userId: number, data: Record<string, string>) {
    const body = {
      user_id: userId,
      data: JSON.stringify(data),
    };

    return fetch(\`\${this.baseUri}/api/visitors\`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers,
    });
  }

  private get headers(): HeadersInit {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-SQUEAKY-API-KEY': process.env['squeaky-api-key'],
    };
  }
}`}
                            </Code>
                        </>
                      )
                    }
                  ]}
                />
              </>
            )}

            {tab === 'post-visitors' && (
              <>
                <h4><code className='code'>POST /api/visitors</code></h4>
                <p>Squeaky allows you to link visitors to users in your database by using the <code className='code'>identify</code> function, however there are scenarios where you want to create the visitor ahead of time.</p>
                <p>Using this endpoint, you can create a blank visitor that is pre-populated with linked data. Provided you are also using data linking during sessions, all sessions made by this visitor will be automatically stored against this visitor.</p>
                <p><b>Please note</b>: You can only create one visitor per user id.</p>
                <p>To create a visitor, you must supply the following two fields within the JSON body:</p>
                <ul className='code-lists'>
                  <li>
                    <code className='code'>user_id: string|number</code> (required)
                    <span>The id of the user in your database.</span>
                  </li>
                  <li>
                    <code className='code'>data: string</code> (required)
                    <span>Additional JSON meta data to store against the visitor (e.g. email, created_at)</span>
                  </li>
                </ul>
                <p>Using the example client, you can create a visitor like so:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <Code lang='ruby'>
{`client = SqueakyClient.new

client.create_visitor(
  user_id: user.id,
  data: {
    email: email@yourwebsite.com,
    created_at: Time.now.iso8601
  }
)`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'typescript',
                      name: 'Node.js',
                      icon: 'npmjs-line',
                      body: (
                        <>
                          <Code lang='typescript'>
{`const client = new SqueakyClient();

await client.createVisitor(user.id, {
  email: email@yourwebsite.com,
  createdAt: new Date().toISOString(), 
});
`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'curl',
                      name: 'Curl',
                      icon: 'terminal-line',
                      body: (
                        <>
                          <Code lang='shell'>
{`curl -X POST 'https://squeaky.ai/api/visitors' \\
--header 'X-SQUEAKY-API-KEY: your_api_key' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "user_id": 1,
    "data": "{\"email\":\"email@yourwebsite.com\"}"
}'
`}
                          </Code>
                        </>
                      )
                    }
                  ]}
                />
                <p>Validation will be performed server side, and the error handling responsibility will fall on you.</p>
                <p>You can expect the following HTTP responses for certain senarios:</p>
                <ul className='code-lists'>
                  <li>
                    <code className='code'>201 - Created</code>
                    <ul>
                      <li>The visitor was successfully created</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>400 - Bad Request</code>
                    <ul>
                      <li>The payload did not pass validation</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>401 - Unauthorized</code>
                    <ul>
                      <li>You have reached your monthly limit</li>
                      <li>This feature has been disabled for your site by Squeaky</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>403 - Forbidden</code>
                    <ul>
                      <li>You did not provide an API key</li>
                      <li>You provided an invalid API key</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>409 - Conflict</code>
                    <ul>
                      <li>The visitor already exists</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>500 - Internal Server Error</code>
                    <ul>
                      <li>There is an issue on Squeaky&apos;s side</li>
                    </ul>
                  </li>
                </ul>
              </>
            )}

            {tab === 'post-event' && (
              <>
                <h4><code className='code'>POST /api/events</code></h4>
                <p>Not everything happens during the users&apos; session and you may want to add events server-side when you no longer have access to the session context.</p>
                <p>For example, when a user signs up, you may kick off a background process to send a welcome email. This is likely an asynchronous process, and the user is likely no longer on site.</p>
                <p>Custom events can be used for general purpose event collection. In addition, you can also include a user_id, and provided you have set up data linking via the <code className='code'>identify</code> method during the users&apos; session, you will be able to attribute events to a particular visitor.</p>
                <p>The events endpoint accepts four fields within the JSON body:</p>
                <ul className='code-lists'>
                  <li>
                    <code className='code'>name: string</code> (required)
                    <span>The name of the event that will show up in the Squeaky events page.</span>
                  </li>
                  <li>
                    <code className='code'>user_id: string|number</code> (optional)
                    <span>The id of the user in your database. Squeaky will attempt to find the visitor using the data linking feature. If there is no matching visitor then then the visitor will be empty.</span>
                  </li>
                  <li>
                    <code className='code'>data: string</code> (required)
                    <span>Additional JSON meta data to send with the event.</span>
                  </li>
                  <li>
                    <code className='code'>timestamp: number</code> (optional)
                    <span>A millisecond presicion timestamp.</span>
                  </li>
                </ul>
                <p>For example, to notify when the welcome email was sent, you could use:</p>
                <Tabs
                  tabs={[
                    {
                      page: 'ruby',
                      name: 'Ruby on Rails',
                      icon: 'vip-diamond-line',
                      body: (
                        <>
                          <Code lang='ruby'>
{`client = SqueakyClient.new

client.add_event(
  name: 'WelcomeEmailSent',
  user_id: user.id,
  data: {
    sent_at: Time.now.iso8601
  }
)`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'typescript',
                      name: 'Node.js',
                      icon: 'npmjs-line',
                      body: (
                        <>
                          <Code lang='typescript'>
{`const client = new SqueakyClient();

await client.addEvent('WelcomeEmailSent', user.id, {
  sentAt: new Date().toISOString(), 
});
`}
                            </Code>
                        </>
                      )
                    },
                    {
                      page: 'curl',
                      name: 'Curl',
                      icon: 'terminal-line',
                      body: (
                        <>
                          <Code lang='shell'>
{`curl -X POST 'https://squeaky.ai/api/events' \\
--header 'X-SQUEAKY-API-KEY: your_api_key' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "name": "WelcomeEmailSent",
    "user_id": 1,
    "data": "{\"sentAt\": 1674838612560}"
}'
`}
                          </Code>
                        </>
                      )
                    }
                  ]}
                />
                <p>Validation will be performed server side, and the error handling responsibility will fall on you.</p>
                <p>You can expect the following HTTP responses for certain senarios:</p>
                <ul className='code-lists'>
                  <li>
                    <code className='code'>201 - Created</code>
                    <ul>
                      <li>The event was successfully stored</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>400 - Bad Request</code>
                    <ul>
                      <li>The payload did not pass validation</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>401 - Unauthorized</code>
                    <ul>
                      <li>You have reached your monthly limit</li>
                      <li>This feature has been disabled for your site by Squeaky</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>403 - Forbidden</code>
                    <ul>
                      <li>You did not provide an API key</li>
                      <li>You provided an invalid API key</li>
                    </ul>
                  </li>
                  <li>
                    <code className='code'>500 - Internal Server Error</code>
                    <ul>
                      <li>There is an issue on Squeaky&apos;s side</li>
                    </ul>
                  </li>
                </ul>
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
