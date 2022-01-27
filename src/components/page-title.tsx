import React from 'react';
import type { FC } from 'react';

interface ParentProps {
  title: string;
  subtitle?: React.ReactNode;
  nav?: React.ReactNode;
}

interface ChildProps {
  children: React.ReactNode;
}

export const PageTitle: FC<ParentProps> = ({ title, subtitle, nav }) => (
  <>
    <div className='page-title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    {nav}
  </>
);

export const PageTitleNav: FC<ChildProps> = ({ children }) => (
  <nav className='page-title-nav'>
    {children}
  </nav>
)
