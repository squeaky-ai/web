import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { GetStarted } from 'components/get-started';

import duda from '../../public/cms-analytics/duda.svg';
import shopify from '../../public/cms-analytics/shopify.svg';
import webflow from '../../public/cms-analytics/webflow.svg';
import wix from '../../public/cms-analytics/wix.svg';
import wordpress from '../../public/cms-analytics/wordpress.svg';

interface Props {
  title: string;
  body: string;
  image: 'duda' | 'shopify' | 'webflow' | 'wix' | 'wordpress';
}

const imageSrc = (image: Props['image']) => {
  switch(image) {
    case 'duda':
      return duda;
    case 'shopify':
      return shopify;
    case 'webflow':
      return webflow;
    case 'wix':
      return wix;
    case 'wordpress':
      return wordpress;
  }
}

export const CmsAnalyticsHeader: FC<Props> = ({ title, body, image }) => (
  <div className='cms-analytics-header'>
    <div className='egg'>
      <Container className='lg centered'>
        <div className='info'>
          <h1>{title}</h1>
          <p>{body}</p>
          <GetStarted />
          <p className='check'>
            <Icon name='check-line' />
            No credit card required
          </p>
        </div>
        <div className='image'>
          <Image src={imageSrc(image)} width={388} height={304} alt={`Illustration of ${image}`} />
        </div>
      </Container>
    </div>
  </div>
);
