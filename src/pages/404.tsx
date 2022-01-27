import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Illustration } from 'components/illustration';
import { Container } from 'components/container';

const NotFound: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    // Next doesn't support any server side stuff with the 404
    // page and also doesn't return the expected route from the
    // router, so this hackery is needed to toggle the styles
    const isApp = router.asPath.startsWith('/app/');
    const page = document.querySelector('.page');

    if (isApp) {
      page.classList.remove('web')
      page.classList.add('app');
    } else {
      page.classList.remove('app')
      page.classList.add('web');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Squeaky | Page Not Found</title>
      </Head>

      <Container className='lg centered error-state'>
        <Container className='md'>
          <Illustration illustration='illustration-10' height={256} width={256} alt='Error state' />
          <h2>404</h2>
          <p>The page you are looking for cannot be found.</p>
          <Link href='/'>
            <a className='button primary-web'>
              Back to home
            </a>
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default NotFound;
