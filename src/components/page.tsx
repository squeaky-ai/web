import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { useRouter } from 'next/router';

export const Page: FC = ({ children }) => {
  const router = useRouter();

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

  return (
    <div className={classnames('page', ...slug)}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
