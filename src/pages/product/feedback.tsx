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

const ProductFeedback: SqueakyPage<NextPage> = () => (
  <>
    <ProductHeader
      title='Listen to your customers'
      subtitle='Feedback'
      body={
        <>
          <p>By using NPS® and Sentiment Surveys anywhere in your website or web app you can ensure you&apos;re taking customer feedback seriously.</p>
          <ul>
            <li>Gather feedback with context</li>
            <li>Use data to spot trends</li>
            <li>Reproduce and resolve customer issues</li>
          </ul>
        </>
      }
      image='feedback'
    />

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Feedback at a glance</h2>

        <ExpandingDetails
          items={[
            {
              icon: 'hand-heart-line', 
              title: 'NPS®',
              body: 'Using NPS® feedback from your customers will help you to better understand how the quality of your product and customer support are helping to drive the growth of your business.',
              image: <Screenshot screen='nps-2' width={738} height={525} />
            }, 
            {
              icon: 'emotion-happy-line',
              title: 'Sentiment surveys',
              body: 'The best feedback is often collected unprompted. Our Sentiment Survey provides you with a straightforward and relatable way to let your customers tell you how they\'re feeling.',
              image: <Screenshot screen='sentiment-2' width={738} height={525} />
            },
            {
              icon: 'line-chart-line',
              title: 'Easy analysis',
              body: 'Get precise data on how your customer feedback changes over time, so you can measure the improvements you\'re making to your product or service.',
              image: <Screenshot screen='nps-1' width={738} height={525} />,
              shadowless: true
            },
            {
              icon: 'pages-line',
              title: 'Feedback with context',
              body: 'We link all feedback directly to recordings, so you can quickly watch back any visit and understand exactly what they experienced when they submitted their feedback.',
              image: <Screenshot screen='session-1' width={738} height={525} />,
              shadowless: true
            },
            {
              icon: 'translate',
              title: 'Speak your visitor\'s language',
              body: 'Localize your feedback widgets and surveys so that they\'re available in any language your visitors need.',
              image: <Screenshot screen='nps-3' width={738} height={525} />,
            }
          ]}
        />
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='One of my favourite things about Squeaky is that I can jump straight from a customer support ticket and into the app to see what exactly happened.'
          by='Nathan Ganser'
          at='Founder of Nat Personal CRM'
          person='nathan'
          flip
        />
      </Container>
    </section>

    <section className='pair'>
      <Container className='centered lg'>
        <h3>Pair direct feedback with context and data</h3>

        <FeaturesGrid>
        <FeaturesGridItem
            icon='user-voice-line'
            title='Net Promoter Score®'
            body='Squeaky offers built in NPS® survey functionality enabling you to add the widely used market research metric directly on your website or in your web app.'
          />
          <FeaturesGridItem
            icon='emotion-happy-line'
            title='Sentiment analysis'
            body='Our sentiment survey offers a straightforward and relatable way to let your customers tell you how they&apos;re feeling about using your services. '
          />
          <FeaturesGridItem
            icon='paint-brush-line'
            title='Appearance customisation'
            body='Style your feedback widgets to match your brand, and choose the layout or positioning that works best for your website or web app.'
          />
          <FeaturesGridItem
            icon='eye-line'
            title='Display options'
            body='Depending on which type of feedback you&apos;re using, you can choose which pages it&apos;s displayed on and how often, ensuring you only connect with your visitors when the time is right.'
          />
          <FeaturesGridItem
            icon='line-chart-line'
            title='Analysis'
            body='Use detailed charts and analysis to detect trends in your customer feedback that you can use to determine targeted improvements to their experience.'
          />
          <FeaturesGridItem
            icon='sound-module-line'
            title='Filtering'
            body='Apply feedback filters throughout the Squeaky application so you can easily focus on visitors and recordings with feedback.'
          />
        </FeaturesGrid>

        <FeaturesBanner />
      </Container>
    </section>

    <section className='tools'>
      <ProductTools options={['recordings', 'analytics', 'events', 'journeys', 'heatmaps']} />
    </section>

    <section className='easy'>
      <UpAndRunning />
    </section>

    <section className='compatibility'>
      <Platforms />
    </section>

    <section className='get-started'>
      <Cta type='cross-mauve' title={<h2>Get started now, your team will thank you.</h2>} />
    </section>
  </>
);

ProductFeedback.getMetaData = () => ({
  title: 'Squeaky | Feedback',
  description: 'Use feedback widgets to find out what your visitors think of your site. You can easily customise when and where to show NPS or Sentiment surveys to visitors.',
  index: true,
});

export default ProductFeedback;
