import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Container } from 'components/container';

export const HeaderUseCases: FC = () => {
  return (
    <div className='products'>
      <Container className='md-lg'>
        <Link href='/use-cases/product-and-ux'>
          <a className='item product'>
            <h5>Product &amp; UX</h5>
            <p>Let data inform your product and design decision making.</p>
          </a>
        </Link>
        <Link href='/use-cases/marketing-and-conversion'>
          <a className='item marketing'>
            <h5>Marketing &amp; Conversion</h5>
            <p>Get the full picture of how visitors are using your site.</p>
          </a>
        </Link>
        <Link href='/use-cases/customer-success'>
          <a className='item customer'>
            <h5>Customer Success</h5>
            <p>Solves problems faster by seeing what your customers see.</p>
          </a>
        </Link>
      </Container>
    </div>
  );
};
