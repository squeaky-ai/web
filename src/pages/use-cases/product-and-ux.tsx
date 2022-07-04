import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'components/container';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { SideBySide } from 'components/side-by-side';
import { Carousel, CarouselItem } from 'components/carousel';
import { FiveIconGrid, FiveItemGridItem } from 'components/five-icon-grid';
import { Cta } from 'components/cta';
import { TestimonialQuote } from 'components/testimonial-quote';
import { UseCasesHeader, UseCasesHeaderStats } from 'components/use-cases-header';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import type { SqueakyPage } from 'types/page';

import useCasesHeaderImage from '../../../public/use-cases/use-case-1.webp';

const UseCasesProductAndUx: SqueakyPage<ServerSideProps> = () => (
  <>
    <UseCasesHeader
      subtitle='For Product &amp; UX Teams'
      title='Build better customer experiences'
      body='Use context-rich customer insights to make better product and design decisions for your business.'
      image={<Image src={useCasesHeaderImage} alt='Image showing product and UX teams' unoptimized priority />}
      stats={
        <>
          <UseCasesHeaderStats
            stat='56%'
            body={<>of websites are using <Link href='/product/analytics'><a>analytics tooling</a></Link> to better understand their visitors, we&apos;re on a mission to make that 100%.</>}
          />
          <UseCasesHeaderStats
            stat='8/10'
            body={<>of product professionals we surveyed felt their current tools were missing key data, <Link href='/product/feedback'><a>we&apos;re plugging those gaps</a></Link>.</>}
          />
          <UseCasesHeaderStats
            stat='93%'
            body={<>of our customers said Squeaky was helping them to improve their customer experience each month.</>}
          />
        </>
      }
    />

    <section className='plan'>
      <Container className='lg centered'>
        <Container className='md tagline'>
          <h2>The customer experience tool with no missing pieces</h2>
          <p>Too many solutions leave product and design professionals wanting more. By combining recordings, analytics, customer profiles, user feedback and analytics in one tool, you&apos;ll get everything you need in on tool.</p>
        </Container>

        <Carousel>
          <CarouselItem>
            <Screenshot screen='analytics-1' width={1440} height={1024} alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session-1' width={1440} height={1024} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings-1' width={1440} height={1024} alt='Screenshot of the Squeaky recordings page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='nps-1' width={1440} height={1024} alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='heatmaps-1' width={1440} height={1024} alt='Screenshot of the Squeaky heatmaps page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='journeys-1' alt='Screenshot of the Squeaky journeys page' />
          </CarouselItem>
        </Carousel>

        <h3>Included in every plan</h3>
        <FiveIconGrid>
          <FiveItemGridItem
            icon='vidicon-line'
            title='Recordings'
            body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
          />
          <FiveItemGridItem
            icon='line-chart-line'
            title='Analytics'
            body='Turn your data into actionable insights to improve your user experience and convert leads faster than ever.'
          />
          <FiveItemGridItem
            icon='user-voice-line'
            title='Feedback'
            body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
          />
          <FiveItemGridItem
            icon='fire-line'
            title='Heatmaps'
            body='Discover which content matters most to your visitors, and where your business could be performing better.'
          />
          <FiveItemGridItem
            icon='route-line'
            title='Journeys'
            body='Find out where your customers are going or where they came from by mapping their journey through your site.'
          />
        </FiveIconGrid>
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

    <section className='understand'>
      <Container className='centered lg'>
        <Container className='md centered tagline'>
          <h2>Understand, design and build with confidence</h2>
          <p>Inform your roadmap and designs with real insight into how people are using your product. First hand knowledge of your customer experience guarantees better, more informed decision making.</p>
        </Container>

        <SideBySide 
          title='See what your customers see'
          body='By watching back session recordings you&apos;ll experience your customer journey first hand, enabling you to develop a greater understanding of their needs and painpoints.'
          linkText='Discover Recordings'
          linkHref='/product/recordings'
          buttonType='secondary-marine'
          image={<Screen screen='session-2' />}
          flip
        />
        <SideBySide 
          title='Segment and analyse your data to understand your audience'
          body='With Squeaky&apos;s powerful filters you can segment your recordings based on a wide array of criteria, or understand your traffic at scale with our analytics product.'
          linkText='Explore Analytics'
          linkHref='/product/analytics'
          buttonType='secondary-marine'
          image={<Screen screen='analytics-2' />}
        />
        <SideBySide 
          title='Hear what your customers are thinking and feeling'
          body='Understanding where your product is succeeding, and discovering new opportunities for improvements is easy when you add the super power of direct customer feedback.'
          image={<Screen screen='feedback-2' />}
          buttonType='secondary-marine'
          linkText='Learn About Feedback'
          linkHref='/product/feedback'
          flip
        />
        <SideBySide 
          title='Quantify the behaviour of your customers'
          body='Whether it&apos;s spotting trends in customer feedback, or aggregating user interactions in heatmaps, Squeaky lets data do the talking for you.'
          buttonType='secondary-marine'
          linkText='Discover Heatmaps'
          linkHref='/product/heatmaps'
          image={<Screen screen='heatmaps-2' />}
        />
        <SideBySide 
          title='Understand the exact routes visitors take whlist navigating your site.'
          body='Squeaky&apos;s user journey maps show you where your visitors went from any given page, or how they got there, so you can optimise and improve your customer journeys.'
          linkText='Learn More'
          linkHref='/product/journeys'
          image={<Screen screen='journeys-1' />}
          flip
        />
        <SideBySide 
          title='Learn from your customers without invading their privacy'
          body='We&apos;ve built Squeaky as a privacy-first product from day one, meaning you can gather vital insights whilst keeping your customers data anonymised, and your company compliant.'
          buttonType='secondary-marine'
          linkText=''
          linkHref='/'
          image={<Screen screen='privacy-1' />}
        />
      </Container>
    </section>

    <section className='get-started'>
      <Cta type='cross-white' title={<h2>Get started now, your team will thank you.</h2>} />
    </section>
  </>
);

UseCasesProductAndUx.getMetaData = () => ({
  title: 'Squeaky | Product & UX',
  description: 'See how Squeaky helps product and UX teams to improve their customer experience, using session recordings, analytics, heatmaps, and direct user feedback.',
  index: true,
});

export default UseCasesProductAndUx;
export { getServerSideProps };
