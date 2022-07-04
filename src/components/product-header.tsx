import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from 'components/icon';
import { Container } from 'components/container';

import analyticsImage from '../../public/illustrations/illustration-1.svg';
import feedbackImage from '../../public/illustrations/illustration-2.svg';
import heatmapsImage from '../../public/illustrations/illustration-9.svg';
import recordingsImage from '../../public/illustrations/illustration-13.svg';
import journeysImage from '../../public/illustrations/illustration-17.svg';

interface Props {
  title: string;
  subtitle: string;
  body: React.ReactNode;
  image: 'analytics' | 'feedback' | 'heatmaps' | 'recordings' | 'journeys'
}

const imageSrc = (image: Props['image']) => {
  switch(image) {
    case 'analytics':
      return analyticsImage;
    case 'feedback':
      return feedbackImage;
    case 'heatmaps':
      return heatmapsImage;
    case 'recordings':
      return recordingsImage;
    case 'journeys':
      return journeysImage;
  }
}

export const ProductHeader: FC<Props> = ({ title, subtitle, body, image }) => (
  <>
    <div className='product-header'>
      <div className='egg'>
        <Container className='lg centered'>
          <div className='info'>
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
          </div>
          <div className='image'>
            <Image src={imageSrc(image)} width={600} height={500} alt={`Illustration of ${image}`} />
          </div>
        </Container>
      </div> 
    </div>
    <div className='features'>
      <p>
        <Icon name='bank-card-2-line' />
        No credit card required
      </p>
      <p>
        <Icon name='shield-check-line' />
        GDPR &amp; CCPA compliant
      </p>
      <p>
        <Icon name='code-s-slash-line' />
        No tech expertise needed
      </p>
    </div>
  </>
);
