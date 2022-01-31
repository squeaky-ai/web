import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'components/container';
import { Carousel, CarouselItem } from 'components/carousel';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { Cta } from 'components/cta';
import { SideBySide } from 'components/side-by-side';
import { TestimonialQuote } from 'components/testimonial-quote';
import { FourIconGrid, FourItemGridItem } from 'components/four-icon-grid';
import { UseCasesHeader, UseCasesHeaderStats } from 'components/use-cases-header';

const UseCasesMarketingAndConversion: NextPage = () => (
  <>
    <Head>
      <title>Squeaky - Use Cases - Marketing &amp; Conversion</title> 
    </Head>

    <UseCasesHeader
      subtitle='For Marketing &amp; conversion'
      title='Qualify &amp; convert more leads'
      body='Segment and analyse your traffic to understand which vistors are converting and why.'
      image={<img src='/use-cases/use-case-2.png' alt='image showing marketers' />}
      stats={
        <>
          <UseCasesHeaderStats
            stat='2/3'
            body={<>website visitors can be missed by conventional analytics tools because people reject cookie placement. We&apos;re solved for that with cookieless <Link href='/product/analytics'><a>analytics</a></Link>.</>}
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
          <p>Sure, Squeaky&apos;s got the numbers, but we also offer rich context too. Thanks to Squeaky, when your customers aren&apos;t converting, you can quickly reveal the the most high-value opportunities for improvement.</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='sentiment' alt='Screenshot of the Squeaky sentiment page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='analytics' alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='nps' alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session' alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings' alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
        </Carousel>

        <h3>Included in every plan</h3>
        <FourIconGrid>
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
        </FourIconGrid>
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
          <p>Squeaky&apos;s full featured customer experience platform will help you to drive new experiments and validate your ideas faster than ever.</p>
        </Container>

        <SideBySide 
          title='Segment and analyse your data to understand your audience'
          body='With Squeaky&apos;s powerful filters you can segment your recordings based on a wide array of criteria, or understand your traffic at scale with our analytics product.'
          linkText='Discover Analytics'
          linkHref='/product/analytics'
          image={<Screen screen='analytics-2' />}
          flip
        />
        <SideBySide 
          title='Quantify the behaviour of your customers'
          body='Whether it&apos;s aggregating user interactions in heatmaps, or spotting trends in customer feedback, Squeaky lets data drive your decision making so you can win more business.'
          linkText='Explore Heatmaps'
          linkHref='/product/heatmaps'
          image={<Screen screen='heatmaps-3' />}
        />
        <SideBySide 
          title='See what your customers see'
          body='By watching back session recordings you&apos;ll experience your customer journey first hand, enabling you to develop a greater understanding of their needs and painpoints.'
          image={<Screen screen='session-2' />}
          linkText='Learn About Recordings'
          linkHref='/product/recordings'
          flip
        />
        <SideBySide 
          title='Gather direct feedback straight from your customers'
          body='Don&apos;t just rely on data and best practice when you can discover new opportunities for improvements by collecting direct customer feedback.'
          linkText='Discover Feedback'
          linkHref='/product/feedback'
          image={<Screen screen='feedback-3' />}
        />
        <SideBySide 
          title='Learn from your customers without invading their privacy'
          body='We&apos;ve build build Squeaky as a privacy-first product from day one, meaning you can gather vital insights whilst keeping your customers data anonymised, and your company compliant.'
          linkText=''
          linkHref=''
          image={<Screen screen='privacy-2' />}
          flip
        />
      </Container>
    </section>

    <section className='insight'>
      <Cta type='cross' title={<h2>Get started in minutes, your team will thank you</h2>} />
    </section>
  </>
);

export default UseCasesMarketingAndConversion;
