import React from 'react';
import Link from 'next/link';
import { Illustration } from 'components/illustration';
import { Container } from 'components/container';
import type { SqueakyPage } from 'types/page';

const InternalServerError: SqueakyPage = () => (
  <Container className='lg error-state'>
    <Container className='md'>
      <Illustration illustration='illustration-3' height={256} width={256} alt='Error state' />
      <h2>500</h2>
      <p>A internal server error has occurred.</p>
      <Link href='/' className='button primary'>
        Back to home
      </Link>
    </Container>
  </Container>
);

InternalServerError.getMetaData = () => ({
  title: 'Squeaky | Internal Server Error',
  description: 'There was an error on our side, sorry about that!',
  index: false,
});

export default InternalServerError;
