import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

import useCasesHeaderImage from '../../../public/use-cases/use-case-2.webp';

const UseCasesMarketingAndConversion: SqueakyPage<NextPage> = () => (
  <>
    <UseCasesHeader
      subtitle='For Marketing &amp; conversion'
      title='Qualify &amp; convert more leads'
      body='Segment and analyse your traffic to understand which vistors are converting and why.'
      image={<Image src={useCasesHeaderImage} alt='image showing marketers' unoptimized priority />}
      stats={
        <>
          <UseCasesHeaderStats
            stat='2/3'
            body={<>website visitors can be missed by conventional analytics tools because people reject cookie placement. We&apos;ve solved that with cookieless <Link href='/product/analytics'><a>analytics</a></Link>.</>}
          />
          <UseCasesHeaderStats
            stat='53%'
            body={<>of SaaS companies report reducing churn by introducing a customer-centric approach to conversion and onboarding.</>}
          />
          <UseCasesHeaderStats
            stat='5x'
            body={<>more expensive to acquire new customers than to retain existing ones. Understanding your <Link href='/product/recordings'><a>customer behaviour</a></Link> can rapidly reduce your costs.</>}
          />
        </>
      }
      theme='blue'
    />

    <section className='plan'>
      <Container className='lg centered'>
        <Container className='md tagline'>
          <h2>For marketing &amp; conversion teams seeking the full picture</h2>
          <p>Sure, Squeaky has the numbers, but we offer rich context too.. Thanks to Squeaky, when your customers aren&apos;t converting, you can quickly reveal the most high-value opportunities for improvement.</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='analytics-1' width={1440} height={1024} alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings-1' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session-1' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='events-1' width={1440} height={1024} alt='Screenshot of the Squeaky events page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='heatmaps-4' width={1440} height={1024} alt='Screenshot of the Squeaky heatmaps page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='journeys-1' width={1440} height={1024} alt='Screenshot of the Squeaky journeys page' />
          </CarouselItem>
        </Carousel>

        <h3>Included in every plan</h3>
        <ThreeTextGrid>
          <ThreeTextGridItem
            icon='line-chart-line'
            title='Analytics'
            body={<p>Turn your data into actionable insights to improve your user experience and convert leads faster than ever.</p>}
            link='/product/analytics'
          />
          <ThreeTextGridItem
            icon='flashlight-line'
            title='Event Tracking'
            body={<p>Monitor every element of your customer experience by tracking any action taking place on your site.</p>}
            link='/product/event-tracking'
          />
          <ThreeTextGridItem
            icon='vidicon-line'
            title='Recordings'
            body={<p>It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.</p>}
            link='/product/recordings'
          />
          <ThreeTextGridItem
            icon='fire-line'
            title='Heatmaps'
            body={<p>Discover which content matters most to your visitors, and where your business could be performing better.</p>}
            link='/product/heatmaps'
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
          quote='Squeaky hooks into our B2B apps data, enabling us to associate user sessions with our actual users. It&apos;s invaluable. It means it&apos;s super simple to watch back recordings for specific customers, making it easier for us to support them and improve our product.'
          by='Steven Hylands'
          at='Chief Product Officer at Stora'
          person='steven'
          circular
        />
      </Container>
    </section>

    <section className='understand'> 
      <Container className='centered lg'>
        <Container className='md centered tagline'>
          <h2>Let deep understanding of your audience drive your marketing forward</h2>
          <p>Squeaky&apos;s full-featured customer experience platform will help you to drive new experiments and validate your ideas faster than ever.</p>
        </Container>

        <SideBySide 
          title='Segment and analyse your data to understand your audience'
          body={<p>With Squeaky&apos;s powerful filters you can segment your recordings based on a wide array of criteria, or understand your traffic at scale with our analytics product.</p>}
          linkText='Explore Analytics'
          linkHref='/product/analytics'
          image={<Screen screen='analytics-3' />}
          buttonType='secondary'
          flip
        />
        <SideBySide 
          title='See what your customers see'
          body={<p>By watching back session recordings you&apos;ll experience your customer journey first hand, enabling you to develop a greater understanding of their needs and painpoints.</p>}
          image={<Screen screen='session-3' />}
          buttonType='secondary'
          linkText='Discover Recordings'
          linkHref='/product/recordings'
        />
        <SideBySide
          title='Monitor any activity on your site'
          body={<p>Are your visitors behaving how you&apos;d expect? See how often any action is performed on your site by using Squeaky&apos;s powerful event tracking functionality.</p>}
          linkText='See Events Tracking'
          linkHref='/product/event-tracking'
          buttonType='secondary'
          image={<Screen screen='events-2' />}
          flip
        />
        <SideBySide 
          title='Hear what your customers are thinking and feeling'
          body={<p>Understanding where your product is succeeding, and discovering new opportunities for improvements is easy when you add the super power of direct customer feedback.</p>}
          linkText='Learn About Feedback'
          linkHref='/product/feedback'
          image={<Screen screen='feedback-3' />}
          buttonType='secondary'
        />
        <SideBySide 
          title='Quantify the behaviour of your customers'
          body={<p>Whether it&apos;s aggregating user interactions in heatmaps, or spotting trends in customer feedback, Squeaky lets data drive your decision-making so you can win more business.</p>}
          linkText='Discover Heatmaps'
          linkHref='/product/heatmaps'
          image={<Screen screen='heatmaps-5' />}
          buttonType='secondary'
          flip
        />
        <SideBySide 
          title='Understand the exact routes visitors take whilst navigating your site.'
          body={<p>Squeaky&apos;s user journey maps show you where your visitors went from any given page, or how they got there, so you can optimise and improve your customer journeys.</p>}
          linkText='See Journeys'
          linkHref='/product/journeys'
          image={<Screen screen='journeys-2' />}
          buttonType='secondary'
        />
      </Container>
    </section>

    <section className='insight'>
      <Cta type='cross-mauve' title={<h2>Get started now, your team will thank you.</h2>} />
    </section>
  </>
);

UseCasesMarketingAndConversion.getMetaData = () => ({
  title: 'Squeaky | Marketing & Conversion',
  description: 'Find out how Squeaky can help you engage with your audience, and convert more visitors to customers, with our analytics, heatmaps, and session recording tools.',
  index: true,
});

export default UseCasesMarketingAndConversion;
