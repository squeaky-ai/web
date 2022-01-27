import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Container } from 'components/container';

interface Props {
  title: React.ReactNode;
  type: 'cross' | 'squiggle' | 'blank';
}

export const Cta: FC<Props> = ({ title, type }) => (
  <div className={classnames('cta', type)}>
    <Container className='centered md'>
      {title}
      <Link href='/auth/signup'>
        <a className='button primary'>
          Get Started Free
        </a>
      </Link>
    </Container>
  </div>
);
