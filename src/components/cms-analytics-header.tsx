import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { GetStarted } from 'components/get-started';

interface ParentProps {
  title: string;
  subtitle: string;
  body: string;
  image: React.ReactNode;
}

export const CmsAnalyticsHeader: FC<ParentProps> = ({ title, subtitle, body, image }) => (
  <div className='cms-analytics-header'>
    <div className='egg'>
      <Container className='lg centered'>
        <div className='info'>
          <p className='subtitle'>{subtitle}</p>
          <h1>{title}</h1>
          <p>{body}</p>
          <GetStarted />
          <p className='check'>
            <Icon name='check-line' />
            No credit card required
          </p>
        </div>
        <div className='image'>
          {image}
        </div>
      </Container>
    </div>
  </div>
);
