import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  icon: string;
  title: string;
  body: string;
}

export const FeaturesGrid: FC<ParentProps> = ({ children }) => (
  <div className='features-grid'>
    {children}
  </div>
);

export const FeaturesGridItem: FC<ChildProps> = ({ icon, title, body }) => (
  <div className='item'>
    <Icon name={icon} />
    <p><b>{title}</b></p>
    <p>{body}</p>
  </div>
);
