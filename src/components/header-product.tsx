import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'components/container';
import { Icon } from 'components/icon';

import bannerLeft from '../../public/banner-left.svg';
import bannerRight from '../../public/banner-right.svg';

export const HeaderProduct: FC = () => {
  return (
    <div className='product'>
      <Container className='lg centered'>
        <div className='links'>
          <Link href='/product/analytics'>
            <a className='item'>
              <h5>
                <Icon name='line-chart-line' />
                Analytics
              </h5>
              <p>Let data drive your decisions.</p>
            </a>
          </Link>
          <Link href='/product/recordings'>
            <a className='item'>
              <h5>
                <Icon name='vidicon-line' />
                Recordings
              </h5>
              <p>Walk in your customers&apos; shoes.</p>
            </a>
          </Link>
          <Link href='/product/feedback'>
            <a className='item'>
              <h5>
                <Icon name='user-voice-line' />
                Feedback
              </h5>
              <p>Hear directly from customers. </p>
            </a>
          </Link>
          <Link href='/product/heatmaps'>
            <a className='item'>
              <h5>
                <Icon name='fire-line' />
                Heatmaps
              </h5>
              <p>Understand what&apos;s important.</p>
            </a>
          </Link>
        </div>
        <div className='info'>
          <p>
            <Icon name='shield-check-line' />
            GDPR &amp; CCPA compliant
          </p>
          <div className='banner-left'>
            <Image src={bannerLeft} width={32} height={36} alt='illustraion to present text as a banner' unoptimized priority />
          </div>
          <p className='banner'>
            <Icon name='star-line' />
            All plans include our 4 core products
          </p>
          <div className='banner-right'>
            <Image src={bannerRight} width={32} height={36} alt='illustraion to present text as a banner' unoptimized priority />
          </div>
          <p>
            <Icon name='code-s-slash-line' />
            No tech expertise needed
          </p>
        </div>
      </Container>
    </div>
  );
};
