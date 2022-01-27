import React from 'react';
import type { FC } from 'react';
import { Container } from 'components/container';

interface Props {
  children: React.ReactNode;
}

export const LegalContainer: FC<Props> = ({ children }) => (
  <Container className='centered md legal-container'>
    {children}
  </Container>
);
