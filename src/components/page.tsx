import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { usePage } from 'hooks/use-page';

interface Props {
  children: React.ReactNode;
}

export const Page: FC<Props> = ({ children }) => {
  const router = useRouter();

  const isFeedback = router.pathname.startsWith('/feedback');

  const { user, latestBlogPost, loading } = usePage();

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

  if (isFeedback) {
    return <>{children}</>;
  }

  return (
    <div className={classnames('page', ...slug)}>
      <Header user={user} loading={loading} latestBlogPost={latestBlogPost} />
      {children}
      <Footer />
    </div>
  );
};
