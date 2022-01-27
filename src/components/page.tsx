import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Sidebar } from 'components/app/sidebar';
import { Header } from 'components/web/header';
import { Footer } from 'components/web/footer';
import type { User } from 'types/graphql';

interface Props {
  user: User;
}

export const Page: FC<Props> = ({ children, user }) => {
  const router = useRouter();

  const isAppRoute = router.route.startsWith('/app/');

  const isAuthRoute = router.route.startsWith('/auth/');

  const isAdminRoute = router.route.startsWith('/__admin');

  const isWebRoute = !isAppRoute && !isAuthRoute && !isAdminRoute;

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

  if (isAppRoute) {
    return (
      <div className={classnames('page app', ...slug)}>
        <Sidebar />
        {children}
      </div>
    );
  }

  if (isWebRoute) {
    return (
      <div className={classnames('page web', ...slug)}>
        <Header user={user} />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <div className={classnames('page', ...slug)}>
      {children}
    </div>
  );
};
