import React from 'react';
import { NextPage } from 'next';
import { ProductHeader } from 'components/product-header';
import { Container } from 'components/container';
import { ExpandingDetails } from 'components/expanding-details';
import { Screenshot } from 'components/screenshots';
import { FeaturesGrid, FeaturesGridItem } from 'components/features-grid';
import { FeaturesBanner } from 'components/features-banner';
import { TestimonialQuote } from 'components/testimonial-quote';
import { UpAndRunning } from 'components/up-and-running';
import { Platforms } from 'components/platforms';
import { Cta } from 'components/cta';
import { ProductTools } from 'components/product-tools';
import type { SqueakyPage } from 'types/page';

const ProductEvents: SqueakyPage<NextPage> = () => (
  <>
    <ProductHeader
      title='Measure every important activity'
      subtitle='Events'
      body={
        <>
          <p>Automatically capture any activity on your site for easy comparison, including page visits, button or text clicks, javascript errors, or any custom event you like.</p>
          <ul>
            <li>Monitor engagement and track user activation</li>
            <li>Compare the performance of features and pages</li>
            <li>Track errors and bugs to gauge their impact</li>
          </ul>
        </>
      }
      image='events'
    /> 

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Event tracking at a glance</h2>

        <ExpandingDetails
          flip
          items={[
            {
              icon: 'line-chart-line',
              title: 'Discover patterns and trends',
              body: 'Capturing and grouping event data across your site allows you to easily discover the hidden patterns in user behaviour, meaning you can more effectively optimise conversion and improve your customer experience.',
              image: <Screenshot screen='events-1' width={738} height={525} />
            },
            {
              icon: 'magic-line',
              title: 'Automatic tracking',
              body: 'Once your tracking code is installed there\'s no configuration required for all key events, such as page views, text or button clicks, and javascript errors. So you can retrospectively investigate any issue with no configuration required',
              image: <Screenshot screen='events-2' width={738} height={525}  />,
              shadowless: true
            },
            {
              icon: 'warning',
              title: 'Monitor & compare error rates',
              body: 'Find out which errors are having the most impact on your users and compare their impact over time.',
              image: <Screenshot screen='events-3' width={738} height={525} />
            },
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

    <section className='features'>
      <Container className='centered lg'>
        <h3>Data on demand</h3>
        <FeaturesGrid>
          <FeaturesGridItem
            icon='magic-line'
            title='Autocapture events'
            body='Squeaky automatically captures several pre-defined visitor actions such as page views, clicks or javascript errors. Autocapture of event data provides you with historical data that you can interrogate at any time in the future.'
          />
          <FeaturesGridItem
            icon='settings-3-line'
            title='Custom events'
            body='Add custom tracking for any user activity you can think of e.g. every time a user updated their shopping cart, or tried out a new feature. Custom events are incredibly powerful, though they&apos;re one of the few areas of Squeaky that require technical expertise.'
          />
          <FeaturesGridItem
            icon='file-copy-line'
            title='Event groups'
            body='Groups allow you to bundle particular events that are related to one another, making it easy to quickly compare an array of similar events with just a few clicks.'
          />
          <FeaturesGridItem
            icon='line-chart-line'
            title='Comparisons'
            body='The event history view allows you to track all instances of an event over time, but you can also pull additional events to the same charts and see, side-by-side, how events compare with one another.'
          />
          <FeaturesGridItem
            icon='time-line'
            title='Event feed'
            body='From within the events history page, you have access to a feed showing whenever an event took place, allowing you to quickly find the visitors or recordings that contain a particular event.'
          />
        </FeaturesGrid>

        <FeaturesBanner />
      </Container>
    </section>

    <section className='tools'>
      <ProductTools options={['analytics', 'recordings', 'heatmaps', 'journeys', 'feedback']} />
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

ProductEvents.getMetaData = () => ({
  title: 'Squeaky | Events',
  description: 'Use our heatmap tool to visualise where visitors are clicking and scrolling on your site. You\'ll quickly discover which content, interfaces, and layouts work.',
  index: true,
});

export default ProductEvents;
