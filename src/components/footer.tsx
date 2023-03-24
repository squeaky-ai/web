import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { Logo } from 'components/logo';
import { Container } from 'components/container';
import { Icon } from 'components/icon';
import { FooterLinkGroup } from 'components/footer-link-group';

const { publicRuntimeConfig } = getConfig();

export const Footer: FC = () => (
  <footer className='footer'>
    <Container className='lg centered links'>
      <div className='items col-1'>
        <Link href='/'  className='logo'>
          <Logo logo='main' height={48} width={155} />
        </Link>
        <p className='tagline'>Squeaky helps businesses to understand how visitors are using their website or web app, without invading their privacy.</p>
        <p className='small'><b>Follow us</b></p>
        <div className='social'>
          <Link href='https://twitter.com/squeakyai' aria-label='Twitter' target='_blank' rel='noreferrer'>
            <Icon name='twitter-fill' />
          </Link>
          <Link href='https://www.facebook.com/SqueakyAI' aria-label='Facebook' target='_blank' rel='noreferrer'>
            <Icon name='facebook-fill' />
          </Link>
          <Link href='https://www.linkedin.com/company/squeakyai' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
            <Icon name='linkedin-fill' />
          </Link>
        </div>
      </div>
      <div className='items col-2'>
        <FooterLinkGroup title='Use Cases'>
          <Link href='/use-cases/product-and-ux'>
            Product &amp; UX
          </Link>
          <Link href='/use-cases/marketing-and-conversion'>
            Marketing &amp; Conversion
          </Link>
          <Link href='/use-cases/customer-success'>
            Customer Success
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Product'>
          <Link href='/product/analytics'>
            Analytics
          </Link>
          <Link href='/product/recordings'>
            Recordings
          </Link>
          <Link href='/product/event-tracking'>
            Event Tracking
          </Link>
          <Link href='/product/heatmaps'>
            Heatmaps
          </Link>
          <Link href='/product/feedback'>
            Feedback
          </Link>
          <Link href='/product/journeys'>
            Journeys
          </Link>
          <Link href='/features'>
            All Features
          </Link>
          <Link href='/pricing'>
            Pricing
          </Link>
        </FooterLinkGroup>
      </div>

      <div className='items col-3'>
        <FooterLinkGroup title='Connect'>
          <Link href='/book-demo'>
            Book a demo
          </Link>
          <Link href='/contact-us'>
            Contact us
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Resources'>
          <Link href='/blog'>
            Blog
          </Link>
          <Link href={publicRuntimeConfig.helpCenterUrl} target='_blank' rel='noreferrer'>
            Help centre
          </Link>
          <Link href='/developers'>
            Developer docs
          </Link>
        </FooterLinkGroup>
      </div>
      <div className='items col-4'>
        <FooterLinkGroup title='Company'>
          <Link href='/about-us'>
            About us
          </Link>
          <Link href='/press-kit'>
            Press kit
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Programs'>
          <Link href='/programs/partners'>
            For Partners
          </Link>
          <Link href='/programs/startups'>
            For Startups
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Legal &amp; Compliance'>
          <Link href='/legal/terms-of-service'>
            Terms of Service
          </Link>
          <Link href='/legal/privacy-policy'>
            Privacy Policy
          </Link>
          <Link href='/legal/gdpr'>
            GDPR
          </Link>
          <Link href='/legal/ccpa'>
            CCPA
          </Link>
          <Link href='/legal/security'>
            Security
          </Link>
        </FooterLinkGroup>
      </div>
    </Container>
    <div className='legal'>
      <Container className='lg centered'>
        <p>© Squeaky BV, 2021</p>
      </Container>
    </div>
  </footer>
);
