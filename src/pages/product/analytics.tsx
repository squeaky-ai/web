import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { ProductHeader } from 'components/product-header';
import { Container } from 'components/container';
import { ExpandingDetails } from 'components/expanding-details';
import { Screenshot } from 'components/screenshots';
import { Screen } from 'components/screen';
import { TestimonialQuote } from 'components/testimonial-quote';
import { FeaturesGrid, FeaturesGridItem } from 'components/features-grid';
import { FeaturesBanner } from 'components/features-banner';
import { UpAndRunning } from 'components/up-and-running';
import { Platforms } from 'components/platforms';
import { Cta } from 'components/cta';
import { ProductTools } from 'components/product-tools';
import type { SqueakyPage } from 'types/page';

const ProductAnalytics: SqueakyPage<NextPage> = () => (
  <>
    <ProductHeader
      title='Let data drive your decisions'
      subtitle='Analytics'
      body={
        <>
          <p>Our privacy-friendly analytics tool offers you straightforward access to the precise and meaningful data you need.</p>
          <ul>
            <li>Understand your audience</li>
            <li>Measure performance</li>
            <li>Decide with data</li>
          </ul>
        </>
      }
      image='analytics'
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
              image: <Screenshot screen='analytics-1' width={738} height={525} />
            },
            {
              icon: 'group-line',
              title: 'Know your audience',
              body: 'Identify where your visitors are coming from, what they\'re interested in, and the context of their visit.',
              image: <Screenshot screen='analytics-2' width={738} height={525} />,
              shadowless: true,
            },
            {
              icon: 'zoom-in-line',
              title: 'Zoom out, or dig deeper',
              body: 'Alongside site-wide analytics you can also analyse the performance of individual pages of your site, fine tuning your site for the best possible results.',
              image: <Screenshot screen='analytics-3' width={738} height={525} />
            },
            {
              icon: 'ghost-line',
              title: 'Put privacy first',
              body: <>We don&apos;t use cookies or IP address tracking, and we provide tools like our <Link href='/blog/privacy/a-magic-erasure-that-protects-your-visitors-privacy'>Magic Erasure</Link> that help you avoid collecting any personal data on your users.</>,
              image: <Screen screen='privacy-3' width={616} height={391} />,
              shadowless: true
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
        <h3>The metrics that matter most</h3>

        <FeaturesGrid>
          <FeaturesGridItem
            icon='line-chart-line'
            title='Visitor numbers'
            body='Knowing what times and days your traffic is peaking provides vital signals that help you measure success and learn when to post content, release changes or start new marketing campaigns.'
          />
          <FeaturesGridItem
            icon='user-line'
            title='Page visits'
            body='Understanding when your pages are proving most popular will help you discover the content that matters most to your visitors.'
          />
          <FeaturesGridItem
            icon='calendar-line'
            title='Filter by date'
            body='Viewing your data over the right time period is vital, so Squeaky lets you quickly apply pre-defined date ranges.'
          />
          <FeaturesGridItem
            icon='timer-line'
            title='Average session duration'
            body='Squeaky highlights how long people are spending on your website or app, providing important insights into how engaging your content is.'
          />
          <FeaturesGridItem
            icon='pages-line'
            title='Pages per session'
            body='Quickly discover how effective your site is by seeing whether your visitors are regularly browsing the entirety of your site, or sticking to a narrow selection of pages and then leaving.'
          />
          <FeaturesGridItem
            icon='route-line'
            title='Traffic sources'
            body='Knowing where your visitors are arriving from can help you to better understand your audience and the effectiveness of your marketing campaigns.'
          />
          <FeaturesGridItem
            icon='map-pin-2-line'
            title='Location and language'
            body='Find out which regions and languages bring you the most visitors, so you can make sure your content and marketing is targeted at the right people.'
          />
          <FeaturesGridItem
            icon='thumb-up-line'
            title='Popular pages'
            body='Most visitors are going to visit your homepage, but where do they go next, and for how long? Squeaky surfaces this data to help you rapidly improve your site or app.'
          />
          <FeaturesGridItem
            icon='device-line'
            title='Browser and device types'
            body='Deliver targeted improvements to your website, using precise knowledge of the devices and browsers your visitors are using.'
          />
          <FeaturesGridItem
            icon='arrow-left-right-line'
            title='Device widths'
            body='Use our device-width graph to see which screen sizes are most commonly used to view your website or web app, ensuring you only spend time designing for the right scenarios.'
          />
          <FeaturesGridItem
            icon='logout-box-line'
            title='Exit and bounce rates'
            body='See which pages are keeping visitors on your site longest, and which are causing them to quickly turnaround and leave.'
          />
        </FeaturesGrid>

        <FeaturesBanner />
      </Container>
    </section>

    <section className='tools'>
      <ProductTools options={['recordings', 'events', 'heatmaps', 'journeys', 'feedback']} />
    </section>
 
    <section className='easy'>
      <UpAndRunning />
    </section>

    <section className='compatibility'>
      <Platforms />
    </section>

    <section className='get-started'>
      <Cta type='squiggle' title={<h3>Get started now, your team will thank you.</h3>} />
    </section>
  </>
);

ProductAnalytics.getMetaData = () => ({
  title: 'Squeaky | Analytics',
  description: 'Use our analytics tool to better understand your audience, know your traffic, generate leads, and grow your revenue. It\'s simple and 100% privacy friendly.',
  index: true,
});

export default ProductAnalytics;
