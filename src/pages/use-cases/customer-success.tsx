import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'components/container';
import { Carousel, CarouselItem } from 'components/carousel';
import { Screenshot } from 'components/screenshots';
import { TestimonialQuote } from 'components/testimonial-quote';
import { SideBySide } from 'components/side-by-side';
import { Screen } from 'components/screen';
import { Cta } from 'components/cta';
import { FourIconGrid, FourItemGridItem } from 'components/four-icon-grid';
import { UseCasesHeader, UseCasesHeaderStats } from 'components/use-cases-header';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

import useCasesHeaderImage from '../../../public/use-cases/use-case-3.png';

const UseCasesCustomerSuccess: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Use Cases - Customer Success</title> 
    </Head>

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
            body={<>of companies struggle to close the feedback loop. Squeaky&apos;s <Link href='/product/recordings'><a>session recordings</a></Link> offer immediate context that allows you understand and respond faster than ever.</>}
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
          <p>With Squeaky, when your customers get in touch with a problem you could see exactly what happened, meaning you&apos;ll provide faster and personalised support.</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='nps' width={1440} height={1024} alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='sentiment' width={1440} height={1024} alt='Screenshot of the Squeaky sentiment page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
        </Carousel>

        <h3>Included in every plan</h3>
        <FourIconGrid>
          <FourItemGridItem
            icon='user-voice-line'
            title='Feedback'
            body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
          />
          <FourItemGridItem
            icon='vidicon-line'
            title='Recordings'
            body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
          />
          <FourItemGridItem
            icon='line-chart-line'
            title='Analytics'
            body='Turn your data into actionable insights to improve your user experience and convert leads faster than ever.'
          />
          <FourItemGridItem
            icon='fire-line'
            title='Heatmaps'
            body='Discover which content matters most to your visitors, and where your business could be performing better.'
          />
        </FourIconGrid>
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
          <h2>Detect and diagnose customer problems in new ways.</h2>
          <p>Squeaky offers you brand new tools that will let you understand and address the pain points of your customers faster, and more effectively, than ever.</p>
        </Container>

        <SideBySide 
          title='Feedback with context'
          body='Tired of receiving customer feedback with no idea what they just experienced? Squeaky provides session replay for each piece fo feedback you capture, so you can see exactly happened.'
          linkText='Discover Feedback'
          linkHref='/product/feedback'
          image={<Screen screen='feedback-2' />}
          flip
        />
        <SideBySide 
          title='Walk in your customers&apos; shoes'
          body='With Squeaky you can quickly look up any customers who have raised support tickets and play back a recording of their session to see first hand what went wrong.'
          linkText='Explore Recordings'
          linkHref='/product/recordings'
          image={<Screen screen='session-2' />}
        />
        <SideBySide 
          title='Quantify the behaviour of your customers'
          body='Whether it&apos;s spotting trends in customer feedback, or aggregating user interactions in heatmaps, Squeaky lets data do the talking for you.'
          image={<Screen screen='heatmaps-4' />}
          linkText='Learn About Analytics'
          linkHref='/product/analytics'
          flip
        />
        <SideBySide 
          title='Learn from your customers without invading their privacy'
          body='We&apos;ve build build Squeaky as a privacy-first product from day one, meaning you can gather vital insights whilst keeping your customers data anonymised, and your company compliant.'
          linkText=''
          linkHref=''
          image={<Screen screen='privacy-1' />}
        />
      </Container>
    </section>

    <section className='get-started'>
      <Cta type='squiggle' title={<h3>Get started in minutes. Your team will thank you.</h3>} />
    </section>
  </>
);

export default UseCasesCustomerSuccess;
export { getServerSideProps };
