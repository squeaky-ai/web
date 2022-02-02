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
        <Link href='/'>
          <a className='logo'>
            <Logo logo='main' height={48} width={155} />
          </a>
        </Link>
        <p className='tagline'>Squeaky helps businesses to understand how visitors are using their website or web app, without invading their privacy.</p>
        <p className='small'><b>Follow us</b></p>
        <div className='social'>
          <Link href='#'>
            <a aria-label='Twitter'>
              <Icon name='twitter-fill' />
            </a>
          </Link>
          <Link href='#'>
            <a aria-label='Facebook'>
              <Icon name='facebook-fill' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/company/squeakyai'>
            <a aria-label='LinkedIn' target='_blank' rel='noreferrer'>
              <Icon name='linkedin-fill' />
            </a>
          </Link>
        </div>
      </div>
      <div className='items col-2'>
        <FooterLinkGroup title='Use Cases'>
          <Link href='/use-cases/product-and-ux'>
            <a>Product &amp; UX</a>
          </Link>
          <Link href='/use-cases/marketing-and-conversion'>
            <a>Marketing &amp; Conversion</a>
          </Link>
          <Link href='/use-cases/customer-success'>
            <a>Customer Success</a>
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Product'>
          <Link href='/product/analytics'>
            <a>Analytics</a>
          </Link>
          <Link href='/product/recordings'>
            <a>Recordings</a>
          </Link>
          <Link href='/product/heatmaps'>
            <a>Heatmaps</a>
          </Link>
          <Link href='/product/feedback'>
            <a>Feedback</a>
          </Link>
          <Link href='/features'>
            <a>Features</a>
          </Link>
          <Link href='/pricing'>
            <a>Pricing</a>
          </Link>
        </FooterLinkGroup>
      </div>

      <div className='items col-3'>
        <FooterLinkGroup title='Connect'>
          <Link href='/book-demo'>
            <a>Book a demo</a>
          </Link>
          <Link href='/contact-us'>
            <a>Contact us</a>
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Resources'>
          <Link href={publicRuntimeConfig.helpCenterUrl}>
            <a target='_blank' rel='noreferrer'>Help centre</a>
          </Link>
          <Link href='/developers'>
            <a>Developer docs</a>
          </Link>
        </FooterLinkGroup>
      </div>
      <div className='items col-4'>
        <FooterLinkGroup title='Company'>
          <Link href='/about-us'>
            <a>About us</a>
          </Link>
        </FooterLinkGroup>

        <FooterLinkGroup title='Legal &amp; Compliance'>
          <Link href='/legal/privacy-policy'>
            <a>Privacy Policy</a>
          </Link>
          <Link href='/legal/terms-of-service'>
            <a>Terms of Service</a>
          </Link>
          <Link href='/legal/gdpr'>
            <a>GDPR</a>
          </Link>
          <Link href='/legal/ccpa'>
            <a>CCPA</a>
          </Link>
          <Link href='/legal/security'>
            <a>Security</a>
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
