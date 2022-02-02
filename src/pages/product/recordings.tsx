import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ProductHeader } from 'components/product-header';
import { Container } from 'components/container';
import { ExpandingDetails } from 'components/expanding-details';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { TestimonialQuote } from 'components/testimonial-quote';
import { FeaturesGrid, FeaturesGridItem } from 'components/features-grid';
import { FeaturesBanner } from 'components/features-banner';
import { Platforms } from 'components/platforms';
import { Cta } from 'components/cta';
import { UpAndRunning } from 'components/up-and-running';
import { ProductTools } from 'components/product-tools';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductRecordings: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky | Recordings</title> 
    </Head>

    <ProductHeader
      title='See what your customers see'
      subtitle='Recordings'
      body={
        <>
          Capture pixel-perfect session recordings that help you understand the experience of your customers without compromising their privacy.
          <ul>
            <li>Watch customers in-the-wild</li>
            <li>Reproduce and resolve customer issues</li>
            <li>Optimise conversion rates</li>
          </ul>
        </>
      }
    />

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Recordings at a glance</h2>

        <ExpandingDetails
          flip
          items={[
            {
              icon: 'line-chart-line',
              title: 'Powerful playback',
              body: 'Learn from your visitors by watching recordings of their visits. We provide rich meta data on their visit and you can add annotate and tags recordings too.',
              image: <Screenshot screen='session-1' width={738} height={525} />
            },
            {
              icon: 'sound-module-line',
              title: 'Advanced filtering',
              body: 'Reduce noise by using advanced filters to segment your recordings and surface only those relevant to the task at hand. ',
              image: <Screenshot screen='recordings-1' width={738} height={525} />
            },
            {
              icon: 'ghost-line',
              title: 'Private by design',
              body: 'We provide tools that help you avoid collecting any personal data on your users, even in session recordings.  We also never use cookies or IP address tracking.',
              image: <Screen screen='privacy-1' width={640} height={390} />,
              shadowless: true
            }
          ]}
        />
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='Squeaky is a great, no-nonsense way of seeing how users are using our app. We get great insights that we use to improve Taskable on a weekly basis.'
          by='Matt Johnson'
          at='CEO at Taskable'
          person='matt'
        />
      </Container>
    </section>

    <section className='full-picture'>
      <Container className='centered lg'>
        <h2>Capture the full picture</h2>

        <FeaturesGrid>
          <FeaturesGridItem
            icon='video-line'
            title='Recordings overview'
            body='View all your website or web app&apos;s visitors in one place. You can easily filter the data to find the recordings that are most relevant to the task at hand.'
          />
          <FeaturesGridItem
            icon='film-line'
            title='Perfect playback'
            body='Our script captures a perfect copy of your website, exactly as your visitor saw it. That way, when you play back a visitors session you can see exactly what they saw.'
          />
          <FeaturesGridItem
            icon='sound-module-line'
            title='Playback controls'
            body='Pause, and scrub recordings to quickly navigate the playback, view the recording at faster or slower speeds to go through the sessions at your preferred pace.'
          />
          <FeaturesGridItem
            icon='zoom-in-line'
            title='Zoom'
            body='Zoom in and out of your session playback to take in the whole picture, or focus on the tiniest details.'
          />
          <FeaturesGridItem
            icon='information-line'
            title='Session info'
            body='Anonymous session information, such as the user&apos;s device, browser and language, help you understand the context of their visit, use data linking to add additional fields form your own database.'
          />
          <FeaturesGridItem
            icon='time-line'
            title='Activity and pages feed'
            body='Easily navigate your recording using a timestamped list of the pages visited or the activity feed (e.g. clicks, scrolls, hovers etc).'
          />
          <FeaturesGridItem
            icon='sticky-note-line'
            title='Notes and tags'
            body='Use notes and tags to document visitor behaviour, site issues, and activity, so you have a clear record of the moments that need addressing later.'
          />
          <FeaturesGridItem
            icon='user-voice-line'
            title='Feedback'
            body='If you&apos;re using our NPS® or Sentiment survey tools then we&apos;ll pull feedback data directly in the recordings overview and the recording playback.'
          />
          <FeaturesGridItem
            icon='checkbox-multiple-line'
            title='Bulk actions'
            body='Sometimes you&apos;ll want to quickly update the properties of multiple recordings at once. We&apos;ve made that effortless, by providing bulk actions you can access from the recordings overview'
          />
          <FeaturesGridItem
            icon='link'
            title='Data linking'
            body='For some companies it&apos;s vitally important to be able to link your Squeaky visitors to your existing user database. With our Linked Data feature you can seemlessly make that connection, and still keep their data private if you need.'
          />
          <FeaturesGridItem
            icon='layout-column-line'
            title='Custom columns'
            body='Squeaky captures an enormous amount of data, but sometimes you&apos;ll want to cut out the noise and focus on the data points that matter to your business. We made that effortless, with our custom column management.'
          />
          <FeaturesGridItem
            icon='bookmark-3-line'
            title='Bookmarking'
            body='Keep track of the most interesting or important recordings by bookmarking your favourites. You can access these quickly later on by using the filters provided, or from within the visitor&apos;s individual profile.'
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
      <Cta type='cross' title={<h2>Give your business the insights it deserves</h2>} />
    </section>
  </>
);

export default ProductRecordings;
export { getServerSideProps };
