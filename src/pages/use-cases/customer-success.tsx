import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Container } from 'components/container';
import { Carousel, CarouselItem } from 'components/carousel';
import { Screenshot } from 'components/screenshots';
import { TestimonialQuote } from 'components/testimonial-quote';
import { SideBySide } from 'components/side-by-side';
import { Screen } from 'components/screen';
import { Cta } from 'components/cta';
import { FiveIconGrid, FiveItemGridItem } from 'components/five-icon-grid';
import { UseCasesHeader, UseCasesHeaderStats } from 'components/use-cases-header';
import type { SqueakyPage } from 'types/page';

import useCasesHeaderImage from '../../../public/use-cases/use-case-3.webp';

const UseCasesCustomerSuccess: SqueakyPage<NextPage> = () => (
  <>
    <UseCasesHeader
      subtitle='For customer success teams'
      title='Follow in your customers&apos; footsteps'
      body='Solve customer problems faster by combining feedback tools with session recording and playback.'
      image={<Image src={useCasesHeaderImage} alt='image showing customers succeeding' unoptimized priority />}
      stats={
        <>
          <UseCasesHeaderStats
            stat='84%'
            body={<>of our customers say gathering direct <Link href='/product/feedback'><a>user feedback</a></Link> linked to <Link href='/product/recordings'><a>sessions recordings</a></Link> is helping them to improve their customer support.</>}
          />
          <UseCasesHeaderStats
            stat='77%'
            body={<>of companies struggle to close the feedback loop. Squeaky&apos;s <Link href='/product/recordings'><a>session recordings</a></Link> offer immediate context that allows you to understand and respond faster than ever.</>}
          />
          <UseCasesHeaderStats
            stat='2/3'
            body={<>of Fortune 1000 companies are using <Link href='/product/feedback'><a>NPS® surveys</a></Link> to measure their customer satisfaction and drive improvements to their products and services.</>}
          />
        </>
      }
      theme='mauve'
    />

    <section className='understand'>
      <Container className='lg centered'>
        <Container className='md tagline'>
          <h2>It&apos;s never been easier to understand your customers</h2>
          <p>With Squeaky, when your customers get in touch with a problem you can see exactly what happened, and you can provide faster and more personalised support</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='nps-1' width={1440} height={1024} alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='sentiment-1' width={1440} height={1024} alt='Screenshot of the Squeaky sentiment page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session-1' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings-1' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='journeys-1' alt='Screenshot of the Squeaky journeys page' />
          </CarouselItem>
        </Carousel>

        <h3>Included in every plan</h3>
        <FiveIconGrid>
          <FiveItemGridItem
            icon='user-voice-line'
            title='Feedback'
            body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
          />
          <FiveItemGridItem
            icon='vidicon-line'
            title='Recordings'
            body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
          />
          <FiveItemGridItem
            icon='line-chart-line'
            title='Analytics'
            body='Turn your data into actionable insights to improve your user experience and convert leads faster than ever.'
          />
          <FiveItemGridItem
            icon='fire-line'
            title='Heatmaps'
            body='Discover which content matters most to your visitors, and where your business could be performing better.'
          />
          <FiveItemGridItem
            icon='route-line'
            title='Journeys'
            body='Find out where your customers are going or where they came from by mapping their journey through your site.'
          />
        </FiveIconGrid>
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='One of my favourite things about Squeaky is that I can jump straight from a customer support ticket and into the app to see what actually happened.'
          by='Nathan Ganser'
          at='Founder of Nat Personal CRM'
          person='nathan'
        />
      </Container>
    </section>

    <section className='detect'>
      <Container className='centered lg'>
        <Container className='md centered tagline'>
          <h2>Detect and diagnose customer problems in new ways</h2>
          <p>Squeaky offers you brand new tools that will let you understand and address the pain points of your customers faster, and more effectively, than ever.</p>
        </Container>

        <SideBySide 
          title='Feedback with context'
          body='Tired of receiving customer feedback with no idea what they&apos;ve just experienced? Squeaky provides session replay for each piece of feedback you capture, so you can see exactly what happened.'
          linkText='Discover Feedback'
          linkHref='/product/feedback'
          image={<Screen screen='feedback-2' />}
          buttonType='secondary-marine'
          flip
        />
        <SideBySide 
          title='Walk in your customers&apos; shoes'
          body='With Squeaky you can quickly look up any customers who have raised support tickets and play back a recording of their session to see first-hand what went wrong.'
          linkText='Explore Recordings'
          linkHref='/product/recordings'
          image={<Screen screen='session-2' />}
          buttonType='secondary-marine'
        />
        <SideBySide  
          title='Quantify the behaviour of your customers'
          body='Whether it&apos;s spotting trends in customer feedback, or aggregating user interactions in heatmaps, Squeaky lets data do the talking for you.'
          image={<Screen screen='heatmaps-4' />}
          buttonType='secondary-marine'
          linkText='Learn About Analytics'
          linkHref='/product/analytics'
          flip
        />
        <SideBySide 
          title='Understand the exact routes visitors take whlist navigating your site.'
          body='Squeaky&apos;s user journey maps show you where your visitors went from any given page, or how they got there, so you can optimise and improve your customer journeys.'
          buttonType='secondary-marine'
          linkText='Learn More'
          linkHref='/product/journeys'
          image={<Screen screen='journeys-1' />}
        />
        <SideBySide 
          title='Learn from your customers without invading their privacy'
          body='We&apos;ve built Squeaky as a privacy-first product from day one, meaning you can gather vital insights whilst keeping your customers data anonymised, and your company compliant.'
          buttonType='secondary-marine'
          linkText=''
          linkHref='/'
          image={<Screen screen='privacy-1' />}
          flip
        />
      </Container>
    </section>

    <section className='get-started'>
      <Cta type='squiggle' title={<h3>Get started now, your team will thank you.</h3>} />
    </section>
  </>
);

UseCasesCustomerSuccess.getMetaData = () => ({
  title: 'Squeaky | Customer Success',
  description: 'See how Squeaky can help you improve your customer support by collecting customer feedback, viewing session recordings, and capturing useful analytics data.',
  index: true,
});

export default UseCasesCustomerSuccess;
