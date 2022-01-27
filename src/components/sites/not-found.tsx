import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Illustration } from 'components/illustration';
import { Container } from 'components/container';

export const NotFound: FC = () => (
  <div className='not-found'>
    <Container className='md'>
      <Illustration illustration='illustration-10' height={256} width={256} alt='Page not found' />
      <h2>404</h2>
      <p>The page you are looking for cannot be found.</p>
      <Link href='/app/sites'>
        <a className='button primary-app'>
          Back to sites
        </a>
      </Link>
    </Container>
  </div>
);
