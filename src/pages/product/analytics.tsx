import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ProductHeader } from 'components/product-header';
import { Container } from 'components/container';
import { ExpandingDetails } from 'components/expanding-details';
import { Screenshot } from 'components/screenshots';
import { TestimonialQuote } from 'components/testimonial-quote';
import { FeaturesGrid, FeaturesGridItem } from 'components/features-grid';
import { FeaturesBanner } from 'components/features-banner';
import { UpAndRunning } from 'components/up-and-running';
import { Platforms } from 'components/platforms';
import { Cta } from 'components/cta';
import { ProductTools } from 'components/product-tools';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductAnalytics: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Product - Analytics</title> 
    </Head>

    <ProductHeader
      title='Let data drive your decisions'
      subtitle='Analytics'
      body={
        <>
          Our privacy-friendly analytics tool offers you straightforward access to the precise and meaningful data you need.
          <ul>
            <li>Understand your audience</li>
            <li>Measure performance</li>
            <li>Decide with data</li>
          </ul>
        </>
      }
    />
    
    <section className='glance'>
      <Container className='lg centered'>
        <h2>Analytics at a glance</h2>

        <ExpandingDetails
          items={[
            {
              icon: 'line-chart-line',
              title: 'Understand traffic & trends',
              body: 'Get precise data on visitor numbers, page views, and session statistics for any timeframe you need.',
              image: <Screenshot screen='analytics' width={738} height={525} />
            },
            {
              icon: 'group-line',
              title: 'Know your audience',
              body: 'Identify where your visitors are coming from, what they\'re interested in, and the context of their visit.',
              image: <Screenshot screen='session' width={738} height={525} />
            },
            {
              icon: 'ghost-line',
              title: 'Private by design',
              body: 'We don\'t use cookies or IP address tracking, and we provide tools that help you avoid collecting any personal data on your users.',
              image: <Screenshot screen='recordings' width={738} height={525} />
            }
          ]}
        />
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='Squeaky&apos;s great. It&apos;s easy to integrate and simple to use. It quickly let us see how potential customers were responding to our sign up page,  helping us to identify an issue with the layout and site nav and improve conversion.'
          by='Steve Nuttall'
          at='Founder at Serve The Team'
          person='steve'
        />
      </Container>
    </section>

    <section className='metrics'>
      <Container className='centered lg'>
        <h2>The metrics that matter most</h2>

        <FeaturesGrid>
          <FeaturesGridItem
            icon='line-chart-line'
            title='Visitor numbers'
            body='Knowing what times and days your traffic is peaking provides vital signals that help you measure success and learn when to post content, release changes or start new marketing campaigns.'
          />
          <FeaturesGridItem
            icon='user-line'
            title='Page visits'
            body='Understanding when your pages are proving most popular will help your discover the content that matters most to your visitors.'
          />
          <FeaturesGridItem
            icon='calendar-line'
            title='Filter by date'
            body='Viewing your data over the right time period is vital, so Squeakily lets you quickly apply pre-defined date ranges.'
          />
          <FeaturesGridItem
            icon='timer-line'
            title='Average session duration'
            body='Squeaky highlights how long people are spending on your website or app, helping to provide important insights into how engaging your content is.'
          />
          <FeaturesGridItem
            icon='pages-line'
            title='Pages per session'
            body='Quickly discover how efffective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages then leaving.'
          />
          <FeaturesGridItem
            icon='route-line'
            title='Traffic sources'
            body='Knowing where your visitors are arriving from can help you to better understand your audience and the effectiveness of your marketing campaigns.'
          />
          <FeaturesGridItem
            icon='map-pin-2-line'
            title='Location and language'
            body='Find out which regions and languages are bring you the most visitors, so you can make sure you content and marketing is targeted at the right people.'
          />
          <FeaturesGridItem
            icon='thumb-up-line'
            title='Popular pages'
            body='Most visitors are going to visit your homepage, but where do they go next, and for how long? Squeaky surfaces this data to help you rapidly improve your site or app.'
          />
          <FeaturesGridItem
            icon='device-line'
            title='Browser and device types'
            body='Target your website improvements based on precise knowledge of the technology your customer are using data on browser, device type'
          />
          <FeaturesGridItem
            icon='arrow-left-right-line'
            title='Device widths'
            body='Quickly discover how efffective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages then leaving.'
          />
        </FeaturesGrid>

        <FeaturesBanner />
      </Container>
    </section>

    <section className='tools'>
      <ProductTools />
    </section>

    <section className='easy'>
      <UpAndRunning />
    </section>

    <section className='compatibility'>
      <Platforms />
    </section>

    <section className='get-started'>
      <Cta type='squiggle' title={<h3>Get started in minutes. Your team will thank you.</h3>} />
    </section>
  </>
);

export default ProductAnalytics;
export { getServerSideProps };

