import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { GetStarted } from 'components/get-started';

interface ParentProps {
  title: string;
  subtitle: string;
  body: string;
  stats: React.ReactNode;
  image: React.ReactNode;
  theme?: 'blue' | 'mauve';
}

interface ChildProps {
  stat: string;
  body: string | React.ReactNode;
}

export const UseCasesHeader: FC<ParentProps> = ({ title, subtitle, body, stats, image, theme }) => (
  <div className={classnames('use-cases-header', theme)}>
    <Container className='lg centered hero'>
      <div className='details'>
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
    <div className='stats'>
      <Container className='md-lg centered'>
        {stats}
      </Container>
    </div>
  </div>
);

export const UseCasesHeaderStats: FC<ChildProps> = ({ stat, body }) => (
  <div className='stat'>
    <h2>{stat}</h2>
    <p>{body}</p>
  </div>
);
