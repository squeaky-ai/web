import React from 'react';
import Link from 'next/link';
import { Illustration } from 'components/illustration';
import { Container } from 'components/container';
import type { SqueakyPage } from 'types/page';

const NotFound: SqueakyPage = () => (
  <Container className='lg centered error-state'>
    <Container className='md'>
      <Illustration illustration='illustration-3' height={256} width={256} alt='Error state' />
      <h2>404</h2>
      <p>The page you are looking for cannot be found.</p>
      <Link href='/' className='button primary'>
        Back to home
      </Link>
    </Container>
  </Container>
);

NotFound.getMetaData = () => ({
  title: 'Squeaky | Page not found',
  description: 'The page could not be found',
  index: false,
});

export default NotFound;
