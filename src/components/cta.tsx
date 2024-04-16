import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Container } from 'components/container';

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  type: 'cross-mauve' | 'cross-white' | 'squiggle';
  buttonText?: string;
  buttonLink?: string;
}

export const Cta: FC<Props> = ({ title, subtitle, type, buttonText, buttonLink }) => (
  <div className={classnames('cta', type)}>
    <Container className='centered md'>
      {title}
      {subtitle}
      <Link href={buttonLink || '/blog/company-news/a-very-important-announcement-from-squeaky/'} className='button primary'>
        {buttonText || 'Get Started Free'}
      </Link>
    </Container>
  </div>
);
