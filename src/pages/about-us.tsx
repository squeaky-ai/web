import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { PageTitle } from 'components/page-title';
import { Illustration } from 'components/illustration';
import { Cta } from 'components/cta';
import { Container } from 'components/container';
import { Icon } from 'components/icon';
import type { SqueakyPage } from 'types/page';

import chris from '../../public/stallions/chris.webp';
import lewis from '../../public/stallions/lewis.webp';

const AboutUs: SqueakyPage<NextPage> = () => (
  <>
    <PageTitle
      title='About us'
      subtitle={<>We&apos;re passionate geeks who believe that businesses should be able to learn from their customers without invading their privacy.</>}
    />

    <section className='mission'>
      <Container className='lg centered'>
        <div className='text'>
          <h2>Our Mission</h2>
          <p>At Squeaky we&apos;re making it our life&apos;s work to create <b>a better web for everyone</b>.</p>
          <p>Just like you, we believe <b>every great business should be continuously learning from their customers</b>, but we think the current ways of doing so are ineffective, unethical, and invasive. We&apos;re here to shake things up.</p>
          <p><b>We create web, product, and customer experience analytics</b> that enable companies to learn from their customers, capturing high value data and insights <b>without ever having to compromise on customer privacy</b>.</p>
          <p>And yes, if you want, Squeaky can help you <b>say goodbye to your horrible cookies and consent banner</b>.</p>
        </div>
        <div className='image'>
          <Illustration illustration='illustration-10' />
        </div>
        <div className='image'>
          <Illustration illustration='illustration-11' />
        </div>
        <div className='text'>
          <h2>Our origins</h2>
          <p>Like many people nowadays, we&apos;re acutely aware of the need to protect our privacy online, and we always default to software, hardware and companies that consider privacy and security to be core to their values.</p>
          <p><b>Companies shouldn&apos;t have to suck up vast quantities of our personal data to provide a better product or service.</b> However, because it&apos;s been so easy for too long, many of them do. This has, quite rightly, lead to a backlash. Over <Link href='https://www.cnet.com/tech/services-and-software/ad-blocking-surges-as-millions-more-seek-privacy-security-and-less-annoyance/' rel='noreferrer'>40% of web users</Link> now deploy adblockers and other tools to protect privacy and improve their experience on the web. Regulators are increasingly cracking down too, with legislation like GDPR and CCPA leading the way.</p>
          <p>That&apos;s amazing for the global community of internet users, but where does it leave businesses that have been relying on conventional digital and customer experience analytics tools? Well, the prognosis is not good. <b>Companies are missing out on up to two thirds of their available data and insights due to their reliance on cookie and IP-based tracking, or other tools that are gathering far too much sensitive data</b>.</p>
          <p>We&apos;ve seen firsthand the effect that can have on genuinely well-intentioned teams that are trying to better understand their customers. <b>Being shut out of key data, or being acutely aware that you&apos;re not getting the full picture, can be debilitating</b> - leading to worse products and services for the end user. At Squeaky, we believe it doesn&apos;t have to be this way.</p>
        </div>
        <div className='text'>
        <p>Mid 2021, we decided it was time to build <b>a brand new analytics and monitoring tool</b> from the ground up - <b>with privacy at its core</b>.</p>
        <p>By making privacy central to each of our decisions, <b>we&apos;ve had to find unusual and innovative solutions to data capture and processing that set us apart from the competition</b>. Not only that, but we pair the requisite technology, with 1-on-1 privacy consultations for any of our customers, ensuring their website or web app meets the stringent requirements of the modern web.</p>
        <p>It&apos;s early days, <b>but we&apos;re proud to be offering the only truly future proof, ethical solution</b> that allows companies to capture the fullest picture of the customer experience, by putting the customer first.</p>
        </div>
        <div className='image'>
          <Illustration illustration='illustration-12' />
        </div>
      </Container>
    </section>

    <section className='founders'>
      <Container className='lg centered'>
        <h2>Our Founders</h2>
        <Container className='sm centered'>
          <p>Chris and Lewis started Squeaky because of a shared belief that while <b>knowledge is power, privacy is sacred</b>.</p>
          <p>They&apos;ve used their years of product, design, and technology expertise to create a <b>best-in-class analytics platform</b>, in the least invasive way possible.</p>
        </Container>
        <Container className='md-lg centered people'>
          <div className='person'>
            <div className='image'>
              <Image src={chris} alt='Chris, cofunder and CEO' width={360} height={416} unoptimized priority />
            </div>
            <h3>
              Chris Pattison
              <a href='https://www.linkedin.com/in/pattisonchris/' target='_blank' rel='noreferrer'>
                <Icon name='linkedin-fill' />
              </a>
            </h3>
            <h6>Cofounder &amp; ceo</h6>
            <p>Chris is a strategy, product, and design specialist who&apos;s built products and teams at some of the Netherland&apos;s most successful startups, before going on to found Squeaky.</p>
          </div>
          <div className='person'>
            <div className='image'>
              <Image src={lewis} alt='Lewis, cofunder and CTO' width={360} height={416} unoptimized priority />
            </div>
            <h3>
              Lewis Monteith
              <a href='https://www.linkedin.com/in/lewis-monteith-869b0310a/' target='_blank' rel='noreferrer'>
                <Icon name='linkedin-fill' />
              </a>
            </h3>
            <h6>Cofounder &amp; cto</h6>
            <p>Lewis is a self-taught engineer with a background in Senior Fullstack development roles in some of the UK&apos;s fastest growing technology companies.</p>
          </div>
        </Container>
      </Container>
    </section>

    <section className='curious'>
      <Cta 
        type='cross-mauve' 
        title={<h2>Curious to learn more?</h2>} 
        subtitle={<p>We&apos;d love to chat with you about your business needs. Head over to our demo scheduling page using the button below.</p>}
        buttonText='Book Demo'
        buttonLink='/book-demo'
      />
    </section>
  </>
);

AboutUs.getMetaData = () => ({
  title: 'Squeaky | About Us',
  description: 'Learn about Squeaky\'s mission to create a better web, and why we started a privacy-first customer analytics company in the first place.',
  index: true,
});

export default AboutUs;
