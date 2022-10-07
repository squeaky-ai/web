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

const { dev = false } = publicRuntimeConfig;

export const Page: FC<Props> = ({ children }) => {
  const router = useRouter();

  const isFeedback = router.pathname.startsWith('/feedback');

  const { user, latestBlogPost, loading } = usePage();

  const loaded = usePoll(() => window.hasOwnProperty('squeaky'));

  const slug = router.route
    .split('/')
    .map(r => r.replace(/[\[\]]|(_id)/g, ''))
    .filter(r => !!r);

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
    if (!user || !!loaded || dev) return;

    const { id, firstName, lastName, email, superuser, createdAt } = user;

    window.squeaky?.identify(id, {
      'name': `${firstName} ${lastName}`,
      'email': email,
      'superuser': superuser ? 'Yes' : 'No',
      'created': new Date(createdAt).toLocaleDateString(),
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
        dangerouslySetInnerHTML={{ __html: dev ? '' : `
          (function(s,q,e,a,u,k,y){
            s._sqSettings={site_id:'2918cf0f-42aa-499d-a4da-d362bd1011ed'};
            u=q.getElementsByTagName('head')[0];
            k=q.createElement('script');
            k.src=e+s._sqSettings.site_id;
            u.appendChild(k);
          })(window,document,'https://cdn.squeaky.ai/g/0.4.0/script.js?');
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
