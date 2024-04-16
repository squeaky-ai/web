import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { Steps, StepItem } from 'components/steps';
import { guideLinks, dudaAppStoreLink } from 'data/sites/constants';

interface Props {
  cms: 'duda' | 'shopify' | 'webflow' | 'wix' | 'wordpress';
}

interface CtaData {
  link: string;
  value: string;
}

const getCtaData = (cms: Props['cms']): CtaData => {
  switch(cms) {
    case 'duda':
      return {
        link: dudaAppStoreLink,
        value: 'Duda App Store',
      };
    case 'shopify':
      return {
        link: guideLinks.shopify,
        value: 'Shopify Installation Guide',
      };
    case 'webflow':
      return {
        link: guideLinks.webflow,
        value: 'Webflow Installation Guide',
      };
    case 'wix':
      return {
        link: guideLinks.wix,
        value: 'Wix Installation Guide',
      };
    case 'wordpress':
      return {
        link: guideLinks.wordpress,
        value: 'Wordpress Installation Guide',
      };
  }
}

export const CmsUpAndRunning: FC<Props> = ({ cms }) => {
  const cmsData = getCtaData(cms);

  return (
    <Container className='centered lg up-and-running'>
      <Container className='centered sm'>
        <h2>Get up and running in minutes</h2>
        <p className='subheading'>Adding Squeaky to your site is so easy that on average it takes new customers 2 minutes to begin collecting data.</p>
      </Container>

      <Steps>
        <StepItem
          title={
            cms === 'duda'
              ? 'Find Squeaky in the Duda App Store'
              : 'Sign up and add your site to Squeaky'
          }
          body={
            cms === 'duda'
              ? <>Go to the <Link href={dudaAppStoreLink} target='_blank' rel='noreferrer'>Duda App Store</Link>, either on the website or from within the Duda app.</>
              : <>It&apos;s free to <Link href='/blog/company-news/a-very-important-announcement-from-squeaky/'>get started</Link> and adding your site in Squeaky takes just a few clicks.</>
          }
          position={1}
        />
        <StepItem
          title={
            cms === 'duda'
              ? 'Add Squeaky to your site '
              : 'Add the Squeaky script to your site'
          }
          body={
            cms === 'duda'
              ? 'Click to add our app to your site, we\'ll automatically very the installation and there&apos;s no credit card required.'
              : <>Use our <Link href={guideLinks.manual} target='_blank' rel='noreferrer'>quick-start guides</Link> for Wordpress to quickly add and verify the installation of our tracking code on your site.</>}
          position={2}
        />
        <StepItem
          title={
            cms === 'duda'
              ? 'Start analysing and improving your site'
              : 'Start analysing and improving your site'
          }
          body={
            cms === 'duda'
              ? 'Your first data will start arriving shortly after adding Squeaky to your site.'
              : 'Your first data will start arriving shortly after your tracking code installation is verified.'
          }
          position={3}
        />
      </Steps>

      <Link href={cmsData.link} className='button primary' target='_blank' rel='noreferrer'>
        {cmsData.value}
      </Link>
    </Container>
  );
};
