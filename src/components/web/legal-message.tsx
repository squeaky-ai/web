import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';

interface Props {
  children: React.ReactNode;
}

export const LegalMessage: FC<Props> = ({ children }) => (
  <div className='legal-message'>
    <Icon name='information-line' />
    <div className='text'>
      {children}
    </div>
  </div>
);
