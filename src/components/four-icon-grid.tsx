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

export const FourIconGrid: FC<ParentProps> = ({ children }) => (
  <div className='four-icon-grid'>
    {children}
  </div>
);

export const FourItemGridItem: FC<ChildProps> = ({ icon, title, body }) => (
  <div className='item'>
    <Icon name={icon} />
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);
