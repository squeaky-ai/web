import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { Steps, StepItem } from 'components/steps';
import { guideLinks } from 'data/sites/constants';

interface Props {
  cmsName: string;
  link: string;
}

export const CmsUpAndRunning: FC<Props> = ({ cmsName, link }) => (
  <Container className='centered lg up-and-running'>
    <Container className='centered sm'>
      <h2>Get up and running in minutes</h2>
      <p className='subheading'>Adding Squeaky to your site is so easy that on average it takes new customers 2 minutes to begin collecting data.</p>
    </Container>

    <Steps>
      <StepItem
        title='Sign up and add your site to Squeaky'
        body={<>It&apos;s free to <Link href='/auth/signup'>get started</Link> and adding your site in Squeaky takes just a few clicks.</>}
        position={1}
      />
      <StepItem
        title='Add the Squeaky script to your site'
        body={<>Use our <Link href={guideLinks.manual} target='_blank' rel='noreferrer'>quick-start guides</Link> for Wordpress to quickly add and verify the installation of our tracking code on your site.</>}
        position={2}
      />
      <StepItem
        title='Start analysing and improving your site'
        body='Your first data will start arriving shortly after your tracking code installation is verified.'
        position={3}
      />
    </Steps>

    <Link href={link} className='button primary' target='_blank' rel='noreferrer'>
      {cmsName} Installation Guide
    </Link>
  </Container>
);
