import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
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

const ProductHeatmaps: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky | Heatmaps</title> 
    </Head>

    <ProductHeader
      title='Understand which content matters'
      subtitle='Heatmaps'
      body={
        <>
          Use heatmaps to quantify your customer experience and discover which content, interfaces and layouts matter most to your visitors.
          <ul>
            <li>Spot issues you couldn&apos;t predict</li>
            <li>Analyse the impact of changes you make</li>
            <li>Compare performance across devices</li>
          </ul>
        </>
      }
      image='heatmaps'
    /> 

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Heatmaps at a glance</h2>

        <ExpandingDetails
          flip
          items={[
            {
              icon: 'vidicon-line',
              title: 'Discover what\'s important',
              body: 'Get precise data on visitor numbers, page views, and session statistics for any timeframe you need.',
              image: <Screenshot screen='heatmaps-1' width={738} height={525} />
            },
            {
              icon: 'sound-module-line',
              title: 'See what\'s getting missed',
              body: 'Scrollmaps help you discover whether your visitors are really scrolling far enough to reach the content that matters.',
              image: <Screenshot screen='heatmaps-2' width={738} height={525} />
            },
            {
              icon: 'ghost-line',
              title: 'Compare devices',
              body: 'What works well on a desktop, may perform entirely different on a tablet or mobile device. With Squeaky you can toggle between views to compare the performance.',
              image: <Screenshot screen='heatmaps-3' width={738} height={525} />
            },
            {
              icon: 'ghost-line',
              title: 'Analyse your releases',
              body: 'Use date filters to compare the performance or your pages before and after major changes, to discover if the work your doing is having the impact you expect.',
              image: <Screenshot screen='heatmaps-4' width={738} height={525} />
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

    <section className='features'>
      <Container className='centered lg'>
        <h3>Heatmaps</h3>
        <p>Use aggregated user interaction data to better understand the performance of your site, what areas of your interface are being interacted with most, and which content matters.</p>

        <FeaturesGrid>
          <FeaturesGridItem
            icon='cursor-line'
            title='Clickmaps'
            body='Squeaky tracks every click on any element of your site or web app. We then aggregate this based on device size so that we can show you which elements are being clicked most and least often.'
          />
          <FeaturesGridItem
            icon='mouse-line'
            title='Scrollmaps'
            body='Scrollmaps help you understand how far down the page your users are scrolling so that you know whether your most important content is high enough on the page or going to waste.'
          />
          <FeaturesGridItem
            icon='sun-line'
            title='Continuous collection'
            body='From the moment the Squeaky tracking code is installed, you&apos;re continuously collecting heatmap data for any page that your users have visited. This gives you a wealth of data to analyse at any time you choose'
          />
          <FeaturesGridItem
            icon='device-line'
            title='Compare devices'
            body='Use our simple toggles to quickly see differences in how your visitors are interacting with your website or web app depending on which device they are visiting on.'
          />
          <FeaturesGridItem
            icon='database-2-line'
            title='365 storage'
            body='There are no time limits on the data you can access, any recording you&apos;ve captured under your subscription will be available until it is deleted after 365 days. Please contact us if you require data storage beyound the standard 365 limit.'
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

export default ProductHeatmaps;
export { getServerSideProps };
