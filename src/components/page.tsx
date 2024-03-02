import React from 'react';
import type { FC } from 'react';
import getConfig from 'next/config';
import Script from 'next/script';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { usePoll } from 'hooks/use-poll';
import { usePage } from 'hooks/use-page';

interface Props {
  children: React.ReactNode;
}

const { publicRuntimeConfig } = getConfig();

export const Page: FC<Props> = ({ children }) => {
  const router = useRouter();

  const isFeedback = router.pathname.startsWith('/feedback');

  const { user, latestBlogPost, loading } = usePage();

  const loaded = usePoll(() => window.hasOwnProperty('squeaky'));

  const slug = router.route
    .split('/')
    .map(r => r.replace(/[\[\]]|(_id)/g, ''))
    .filter(r => !!r)
    .map(r => r.replace('...', ''));

  if (slug.find(s => s === '404')) {
    slug.push('not-found');
  }

  if (slug.find(s => s === '500')) {
    slug.push('internal-server-error');
  }

  if (slug.length === 0) {
    slug.push('home');
  }

  React.useEffect(() => {
    if (!user || !!loaded) return;

    const { id, firstName, lastName, email, superuser, createdAt } = user;

    window.squeaky?.identify(id, {
      'name': `${firstName} ${lastName}`,
      'email': email,
      'superuser': superuser ? 'Yes' : 'No',
      'created': new Date(createdAt.iso8601).toLocaleDateString(),
    });
  }, [user]);

  if (isFeedback) {
    return <>{children}</>;
  }

  return (
    <>
      <Script 
        id='squeaky-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: `
          (function(s,q,u,e,a,k,y){
            s._sqSettings={site_id:'2918cf0f-42aa-499d-a4da-d362bd1011ed'};
            e=q.getElementsByTagName('head')[0];
            a=q.createElement('script');
            a.src=u+s._sqSettings.site_id;
            e.appendChild(a);
          })(window,document,'${publicRuntimeConfig.scriptUrl}?');

          (function(s,q,l,b,o,o,k){
            s._sbSettings={uuid:'50b83d18-591c-44d9-b9f2-eb2312067bff'};
            e=q.getElementsByTagName('head')[0];
            a=q.createElement('script');
            a.src=l+s._sbSettings.uuid;
            e.appendChild(a);
          })(window,document,'https://cdn.sqlbook.com/script.js?');
        `}}
      />

      <div className={classnames('page', ...slug)}>
        <Header user={user} loading={loading} latestBlogPost={latestBlogPost} />
        {children}
        <Footer />
      </div>
    </>
  );
};
