import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Icon } from 'components/icon';
import { Container } from 'components/container';

interface Props {
  title: string;
  subtitle: string;
  body: React.ReactNode;
}

export const ProductHeader: FC<Props> = ({ title, subtitle, body }) => (
  <>
    <div className='product-header'>
      <Container className='lg centered'>
        <Container className='sm-md'>
          <h6>{subtitle}</h6>
          <h1>{title}</h1>
          <p>{body}</p>
          <div className='actions'>
            <Link href='/auth/signup'>
              <a className='button primary'>
                Get Started
              </a>
            </Link>
            <Link href='/book-demo'>
              <a className='button secondary'>
                Book Demo
              </a>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
    <div className='features'>
      <p>
        <Icon name='bank-card-2-line' />
        No credit card required
      </p>
      <p>
        <Icon name='shield-check-line' />
        GDPR &amp; CCPA complaint
      </p>
      <p>
        <Icon name='code-s-slash-line' />
        No tech expertise needed
      </p>
    </div>
  </>
);
