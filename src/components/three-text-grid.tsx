import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Icon } from './icon';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  icon?: string;
  title: string;
  body: string;
  link: string;
}

export const ThreeTextGrid: FC<ParentProps> = ({ children }) => (
  <div className='three-text-grid'>
    {children}
  </div>
);

export const ThreeTextGridItem: FC<ChildProps> = ({ title, body, link, icon }) => (
  <div className={classnames('item', { 'has-icon': icon })}>
    {icon && <Icon name={icon} />}
    <h4>{title}</h4>
    <p>{body}</p>
    <Link href={link}>
      <a className='button secondary'>Learn More</a>
    </Link>
  </div>
);
