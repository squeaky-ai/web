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
  body: React.ReactNode;
  link?: string;
  buttonType?: 'primary' | 'secondary' | 'secondary-marine' | 'link';
}

export const ThreeTextGrid: FC<ParentProps> = ({ children }) => (
  <div className='three-text-grid'>
    {children}
  </div>
);

export const ThreeTextGridItem: FC<ChildProps> = ({ title, body, link, icon, buttonType }) => (
  <div className={classnames('item', { 'has-icon': icon })}>
    {icon && <Icon name={icon} />}
    <h4>{title}</h4>
    {body}
    {link && (
      <Link href={link} className={classnames('button', buttonType || 'secondary')}>
        Learn More
      </Link>
    )}
  </div>
);
