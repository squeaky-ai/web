import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  icon: string;
  text: string;
}

export const TagGroup: FC<ParentProps> = ({ children }) => (
  <div className='tag-group'>
    {children}
  </div>
);

export const TagGroupItem: FC<ChildProps> = ({ icon, text }) => (
  <p>
    <Icon name={icon} />
    {text}
  </p>
);
