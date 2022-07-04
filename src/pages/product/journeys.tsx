import React from 'react';
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
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import type { SqueakyPage } from 'types/page';

const ProductJourneys: SqueakyPage<ServerSideProps> = () => (
  <>
    <ProductHeader
      title='Visualise your customer journey'
      subtitle='Journeys'
      body={
        <>
          Optimise and improve your user journeys by surfacing the exact routes your visitors are taking when navigating around your site.
          <ul>
            <li>See the common journeys between pages</li>
            <li>Discover where your customers drop off</li>
            <li>Spot weak points in your conversion funnels</li>
          </ul>
        </>
      }
      image='journeys'
    /> 

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Journeys at a glance</h2>

        <ExpandingDetails
          items={[
            {
              icon: 'run-line',
              title: 'See where your visitors go',
              body: 'Choose any page on your site and we\'ll show you exactly where your visitor went, from that page onwards. This will help you to better understand the key parts of their journey.',
              image: <Screenshot screen='journeys-1' width={738} height={525} />
            },
            {
              icon: 'guide-line',
              title: 'Understand where your visitors are coming from',
              body: 'Discover the most common routes to any individual page on your site. By uncovering these routes you\'ll see where you need to optimise your journey to improve conversion.',
              image: <Screenshot screen='journeys-2' width={738} height={525} />
            },
            {
              icon: 'arrow-right-down-line',
              title: 'Discover drop-off points',
              body: 'It\'s incredibly important to see where your customers are dropping off along your core user journeys, so we highlight the drop-off rate for each page throught the journey.',
              image: <Screenshot screen='journeys-3' width={738} height={525} />
            },
            {
              icon: 'calendar-line',
              title: 'Analyse your releases',
              body: 'Compare your user journeys before and after major changes and you\'ll be able to measure exactly how much of an impact your updates have made.',
              image: <Screenshot screen='journeys-4' width={738} height={525} />
            },
          ]}
        />
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='A great onboarding experience is so important for our new users, and Squeaky gives us access to vital insights about their experience. I&apos;ve had great support from their team and all my questions get answered promptly.'
          by='Stas Kulesh'
          at='Founder of Karma'
          person='stas'
        />
      </Container>
    </section>

    <section className='metrics'>
      <Container className='centered lg'>
        <h3>Discover and optimise your user journeys</h3>

        <FeaturesGrid>
          <FeaturesGridItem
            icon='route-line'
            title='Start and end points'
            body='Set the exact starting point of a customer journey and you&apos;ll see exactly where your visitors when from there. Alternatively, set an end point to see the routes your visitors took to get there.'
          />
          <FeaturesGridItem
            icon='arrow-right-down-line'
            title='Drop-off rates'
            body='View drop off rates that show you how many users are leaving your site from any given page in their journey. This will help you improve and optimise the journeys to keep your visitors from leaving too soon.'
          />
          <FeaturesGridItem
            icon='vidicon-line'
            title='View recordings'
            body='If you&apos;ve spotted some user journeys that you&apos;d like to watch back, you can quickly jump from the journeys view to a filtered list or recordings that match that journey.'
          />
          <FeaturesGridItem
            icon='magic-line'
            title='Autocapture'
            body='From the moment the Squeaky tracking code is installed, you&apos;re continuously collecting journeys data for any page that your users have visited. This gives you a wealth of data to analyse at any time you choose'
          />
          <FeaturesGridItem
            icon='calendar-line'
            title='Filter by date'
            body='Viewing your data over the right time period is vital, so Squeakily lets you quickly apply pre-defined date ranges.'
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
      <Cta type='squiggle' title={<h3>Get started now, your team will thank you.</h3>} />
    </section>
  </>
);

ProductJourneys.getMetaData = () => ({
  title: 'Squeaky | Journeys',
  description: 'Optimise and improve your user journeys by surfacing the exact routes your visitors are taking when navigating around your site.',
  index: true,
});

export default ProductJourneys;
export { getServerSideProps };
