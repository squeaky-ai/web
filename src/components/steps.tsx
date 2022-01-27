import React from 'react';
import type { FC } from 'react';

interface ParentProps {
  children: React.ReactNode;
}

interface ChildProps {
  title: string;
  body: string | React.ReactNode;
  position: number;
}

export const Steps: FC<ParentProps> = ({ children }) => (
  <div className='steps'>
    {children}
  </div>
);

export const StepItem: FC<ChildProps> = ({ title, body, position }) => (
  <div className='step-item'>
    <h3>{position}</h3>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);
