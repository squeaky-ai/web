import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { Steps, StepItem } from 'components/steps';

export const UpAndRunning: FC = () => (
  <Container className='centered lg up-and-running'>
    <Container className='centered sm'>
      <h2>It&apos;s easy to get up and running in minutes</h2>
      <p className='subheading'>In the time it&apos;s taken you to read this page you could have already started collecting valuable insights, it&apos;s</p>
    </Container>

    <Steps>
      <StepItem
        title='Sign up'
        body={<>Create your <Link href='/auth/signup'><a>free account</a></Link> and add your website or app.</>}
        position={1}
      />
      <StepItem
        title='Install tracking code'
        body='Install our privacy-first tracking code on your website.'
        position={2}
      />
      <StepItem
        title='Analyse your data'
        body='Use your recordings and data to improve your site or app.'
        position={3}
      />
    </Steps>

    <Link href='/auth/signup'>
      <a className='button primary'>
        Get Started Free
      </a>
    </Link>
  </Container>
);
