import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Illustration } from 'components/illustration';
import { Container } from 'components/container';

const NotFound: NextPage = () => (
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

export default NotFound;
