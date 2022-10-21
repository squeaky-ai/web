import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  title: string;
  body: string;
  link: string;
}

export const ThreeTextGrid: FC<ParentProps> = ({ children }) => (
  <div className='three-text-grid'>
    {children}
  </div>
);

export const ThreeTextGridItem: FC<ChildProps> = ({ title, body, link }) => (
  <div className='item'>
    <h4>{title}</h4>
    <p>{body}</p>
    <Link href={link}>
      <a className='button secondary'>Learn More</a>
    </Link>
  </div>
);
