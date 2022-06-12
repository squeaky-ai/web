import React from 'react';
import type { FC } from 'react';
import { Container } from 'components/container';
import { Steps, StepItem } from 'components/steps';

interface Props {
  title: string;
  subtitle: string;
  stepItem1Title: string;
  stepItem1Subtitle: string;
  stepItem2Title: string;
  stepItem2Subtitle: string;
  stepItem3Title: string;
  stepItem3Subtitle: string;
}

export const ProgramsSteps: FC<Props> = ({ 
  title, 
  subtitle,
  stepItem1Title,
  stepItem1Subtitle,
  stepItem2Title,
  stepItem2Subtitle,
  stepItem3Title,
  stepItem3Subtitle,
}) => (
  <Container className='centered lg up-and-running'>
    <Container className='centered sm'>
      <h2>{title}</h2>
      <p className='subheading'>{subtitle}</p>
    </Container>

    <Steps>
      <StepItem
        title={stepItem1Title}
        body={stepItem1Subtitle}
        position={1}
      />
      <StepItem
        title={stepItem2Title}
        body={stepItem2Subtitle}
        position={2}
      />
      <StepItem
        title={stepItem3Title}
        body={stepItem3Subtitle}
        position={3}
      />
    </Steps>
  </Container>
);
