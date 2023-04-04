import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import { Container } from 'components/container';
import { Carousel, CarouselItem } from 'components/carousel';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { Cta } from 'components/cta';
import { SideBySide } from 'components/side-by-side';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { UseCasesHeader, UseCasesHeaderStats } from 'components/use-cases-header';
import type { SqueakyPage } from 'types/page';

import useCasesHeaderImage from '../../../public/use-cases/use-case-4.webp';

const UseCasesDevelopers: SqueakyPage<NextPage> = () => (
  <>
    <UseCasesHeader
      subtitle='For Developers'
      title='All your analytics data in one place'
      body='Combine privacy-first data capture and analysis with comprehensive event tracking functionality, via web or API.'
      image={<Image src={useCasesHeaderImage} alt='image showing marketers' unoptimized priority />}
      stats={
        <>
          <UseCasesHeaderStats
            stat='2/3'
            body='of developers using Squeaky see it as their primary tool for data capture and analysis.'
          />
          <UseCasesHeaderStats
            stat='100%'
            body='of your event data can be captured by Squeaky, either using our web-based data capture or sending data to Squeaky via API'
          />
          <UseCasesHeaderStats
            stat='84%'
            body='of the companies using Squeaky have discovered javascript errors on their site thanks to our tracking code.'
          />
        </>
      }
      theme='blue'
    />

    <section className='plan'>
      <Container className='lg centered'>
        <Container className='md tagline'>
          <h2>For developers seeking total data capture</h2>
          <p>A reliable and straightforward home for all your event, analytics, and user experience data, Squeaky&apos;s <Link href='/privacy'>privacy-first</Link> solution helps you capture more data than legacy analytics tools, without compromising on visitor privacy.</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='events-1' width={1440} height={1024} alt='Screenshot of the Squeaky events page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='analytics-1' width={1440} height={1024} alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session-1' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='heatmaps-4' width={1440} height={1024} alt='Screenshot of the Squeaky heatmaps page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings-1' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='journeys-1' width={1440} height={1024} alt='Screenshot of the Squeaky journeys page' />
          </CarouselItem>
        </Carousel>

        <h3>Squeaky&apos;s core features</h3>
        <ThreeTextGrid>
          <ThreeTextGridItem
            icon='flashlight-line'
            title='Event Tracking'
            body={<p>Monitor every element of your customer experience by tracking any action taking place on your site.</p>}
            link='/product/event-tracking'
          />
          <ThreeTextGridItem
            icon='line-chart-line'
            title='Analytics'
            body={<p>Turn your data into actionable insights to improve your user experience and convert leads faster than ever.</p>}
            link='/product/analytics'
          />
          <ThreeTextGridItem
            icon='fire-line'
            title='Heatmaps'
            body={<p>Discover which content matters most to your visitors, and where your business could be performing better.</p>}
            link='/product/heatmaps'
          />
          <ThreeTextGridItem
            icon='vidicon-line'
            title='Recordings'
            body={<p>It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.</p>}
            link='/product/recordings'
          />
          <ThreeTextGridItem
            icon='user-voice-line'
            title='Feedback'
            body={<p>Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.</p>}
            link='/product/feedback'
          />
          <ThreeTextGridItem
            icon='route-line'
            title='Journeys'
            body={<p>Find out where your customers are going or where they came from by mapping their journey through your site.</p>}
            link='/product/journeys'
          />
        </ThreeTextGrid>
      </Container>
    </section>

    <section className='testimonial'>
      <Container className='centered lg'>
        <TestimonialQuote
          quote='By combining great features with high performing data capture, Squeaky has effectively replaced our need for separate tools like Sentry, Hotjar, and Google Analytics.'
          by='Wessel van der Pal'
          at='Founder at Take It_'
          person='wessel'
          circular
        />
      </Container>
    </section>

    <section className='understand'> 
      <Container className='centered lg'>
        <Container className='md centered tagline'>
          <h2>Tools for making the right decisions.</h2>
          <p>Squeaky <b>puts data at the heart</b> of how you build better products for your customers.</p>
        </Container>

        <SideBySide
          subtitle='Event Tracking'
          title='Get the full picture by tracking any action on your site'
          body={<p>Are your visitors behaving how you&apos;d expect? See how often any action is performed on your site by using Squeaky&apos;s powerful event tracking functionality.</p>}
          linkText='Learn More'
          linkHref='/product/event-tracking'
          image={<Screen screen='events-1' />}
          buttonType='secondary'
          flip
        />
        <SideBySide 
          subtitle='Analyics'
          title='Surface actionable insights with page and site analytics'
          body={<p>Monitor performance and make informed decisions about your site, using precise and meaningful data.</p>}
          linkText='Learn More'
          linkHref='/product/analytics'
          image={<Screen screen='analytics-1' />}
          buttonType='secondary'
        />
        <SideBySide 
          subtitle='Session Recording'
          title='Discover what your customers are really getting up to'
          body={<p>There&apos;s no need to sift through hours of recording data, our advanced filtering helps you segment and surface only the most relevant customer recordings.</p>}
          image={<Screen screen='session-1' />}
          buttonType='secondary'
          linkText='Learn More'
          linkHref='/product/recordings'
          flip
        />
        <SideBySide 
          subtitle='Heatmaps'
          title='Use interaction data to evaluate the performance of your site'
          body={<p>Use Heatmap data to provide the right content and the most effective interfaces for your users.</p>}
          linkText='Learn More'
          linkHref='/product/heatmaps'
          image={<Screen screen='heatmaps-1' />}
          buttonType='secondary'
        />
        <SideBySide 
          subtitle='NPS® Feedback & Sentiment Analysis'
          title='Remove guesswork with a steady flow of customer feedback'
          body={<p>Capture round-the-clock NPS® and Sentiment survey data and know your customers are being heard.</p>}
          linkText='Learn More'
          linkHref='/product/feedback'
          image={<Screen screen='feedback-1' />}
          buttonType='secondary'
          flip
        />
        <SideBySide 
          subtitle='Journeys'
          title='Understand the exact routes visitors take whilst navigating your site.'
          body={<p>See where your visitors went from any given page, or how they got there, so you can optimise and improve your customer journeys.</p>}
          linkText='Learn More'
          linkHref='/product/journeys'
          image={<Screen screen='journeys-1' />}
          buttonType='secondary'
        />
      </Container>
    </section>

    <section className='insight'>
      <Cta type='cross-mauve' title={<h2>Get started in minutes, your team will thank you</h2>} />
    </section>
  </>
);

UseCasesDevelopers.getMetaData = () => ({
  title: 'Squeaky | Developers',
  description: 'Learn how Squeaky helps developers to build great products and improve their customer experience, using comprehensive analytics and event tracking.',
  index: true,
});

export default UseCasesDevelopers;
