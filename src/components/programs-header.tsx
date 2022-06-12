import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Container } from 'components/container';

import partnerImage from '../../public/illustrations/illustration-14.svg';
import startupImage from '../../public/illustrations/illustration-15.svg';

interface Props {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  body: React.ReactNode;
  actions: React.ReactNode;
  image: 'partner' | 'startup';
}

const imageSrc = (image: Props['image']) => {
  switch(image) {
    case 'partner':
      return partnerImage;
    case 'startup':
      return startupImage;
  }
}

export const ProgramsHeader: FC<Props> = ({ title, subtitle, body, actions, image }) => (
  <>
    <div className='programs-header'>
      <div className='egg'>
        <Container className='lg centered'>
          <div className='info'>
            <h6>{subtitle}</h6>
            <h1>{title}</h1>
            <p>{body}</p>
            <div className='actions'>
              {actions}
            </div>
          </div>
          <div className='image'>
            <Image src={imageSrc(image)} width={600} height={500} alt={`Illustration of ${image}`} />
          </div>
        </Container>
      </div> 
    </div>
  </>
);
