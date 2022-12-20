import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  image: React.ReactNode;
  title: string;
  body: string;
  link: string;
}

export const ThreeImageGrid: FC<ParentProps> = ({ children }) => (
  <div className='three-image-grid'>
    {children}
  </div>
);

export const ThreeImageGridItem: FC<ChildProps> = ({ image, title, body, link }) => (
  <div className='item'>
    <Link href={link} className='image'>
      {image}
    </Link>
    <h4>{title}</h4>
    <p>{body}</p>
    <Link href={link} aria-label={title}>
      Learn More
    </Link>
  </div>
);
