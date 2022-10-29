import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { Carousel, CarouselItem } from 'components/carousel';
import { SideBySide } from 'components/side-by-side';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { GetStarted } from 'components/get-started';
import { Cta } from 'components/cta';
import { UpAndRunning } from 'components/up-and-running';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeImageGrid, ThreeImageGridItem } from 'components/three-image-grid';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Platforms } from 'components/platforms';
import type { SqueakyPage } from 'types/page';

const Home: SqueakyPage<NextPage> = () => {
  return (
    <>
      <section className='hero'>
        <Container className='centered md'>
          <h1>Product analytics for customer-obsessed companies</h1>
          <p>Squeaky&apos;s future-proof <a href='#elevate-your-customers-digital-experience'>analytics suite</a> lets you capture up to 60% more data than legacy tools by putting customer privacy first.</p>
          <GetStarted />
        </Container>
        <div className='features'>
          <p>
            <Icon name='bank-card-2-line' />
            No credit card required
          </p>
          <p>
            <Icon name='shield-check-line' />
            GDPR &amp; CCPA compliant
          </p>
          <p>
            <Icon name='code-s-slash-line' />
            No tech expertise needed
          </p>
        </div>
      </section>

      <section className='solutions'>
        <Carousel>
          <CarouselItem>
            <Screenshot screen='dashboard-1' alt='Screenshot of the Squeaky dashboard page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session-1' alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='analytics-1' alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='nps-1' alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem shadowless>
            <Screenshot screen='heatmaps-1' alt='Screenshot of the Squeaky heatmaps page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='journeys-1' alt='Screenshot of the Squeaky journeys page' />
          </CarouselItem>
        </Carousel>

        <Container className='centered md-lg'>
          <h2>Solutions for results-driven teams and companies</h2>

          <ThreeImageGrid>
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-4' width={122} height={128} />}
              title='Product &amp; UX Teams'
              body='Use context-rich customer data and insights to make better decisions for your business.'
              link='/use-cases/product-and-ux'
            />
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-5' width={138} height={128} />}
              title='Marketing &amp; CRO'
              body='Analyse and segment your traffic to learn why visitors are converting and how you can help more to succeed.'
              link='/use-cases/marketing-and-conversion'
            />
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-6' width={164} height={128} />}
              title='Customer Success'
              body='Provide faster, more effective customer support by seeing and hearing your customers&apos; problems first-hand.'
              link='/use-cases/customer-success'
            />
          </ThreeImageGrid>
        </Container>
      </section>

      <section className='testimonial'>
        <Container className='centered lg'>
          <TestimonialQuote
            quote='Squeaky gives us so many more insights across all our websites than conventional analytics tools, all while being completely cookieless and privacy friendly.'
            by='Yassine Zeriouh'
            at='Founder at Testkit'
            circular
            flip
            person='yassine'
          />
        </Container>
      </section>

      <section className='showcase'>
        <Container className='centered sm-md'>
          <h2 id='elevate-your-customers-digital-experience'>Elevate your customers&apos; digital experience</h2>
          <p className='subheading'>Squeaky <b>puts data at the heart</b> of how you understand and improve your customer experience.</p>
        </Container>

        <Container className='centered lg'>
          <SideBySide 
            subtitle='Analytics'
            title='Make better decisions using actionable analytics data'
            body={<p>Monitor performance and make informed decisions about your site, using precise and meaningful data.</p>}
            linkText='Learn More'
            linkHref='/product/analytics'
            image={<Screen screen='analytics-1' />}
            buttonType='secondary'
            flip
          />
          <SideBySide 
            subtitle='Session recording'
            title='Discover what your customers are really getting up to'
            body={<p>There&apos;s no need to sift through hours of recording data, our advanced filtering helps you segment and surface only the most relevant customer recordings.</p>}
            linkText='Learn More'
            linkHref='/product/recordings'
            image={<Screen screen='session-1' />}
            buttonType='secondary'
          />
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
            subtitle='NPS® feedback &amp; sentiment analysis'
            title='Remove guesswork with a steady flow of customer feedback'
            body={<p>Capture round-the-clock NPS® and Sentiment survey data and know your customers are being heard.</p>}
            linkText='Learn More'
            linkHref='/product/feedback'
            image={<Screen screen='feedback-1' />}
            buttonType='secondary'
          />
          <SideBySide 
            subtitle='Heatmaps'
            title='Use interaction data to evaluate the performance of your site'
            body={<p>Use Heatmap data to provide the right content and the most effective interfaces for your users.</p>}
            linkText='Learn More'
            linkHref='/product/heatmaps'
            image={<Screen screen='heatmaps-1' />}
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

      <section className='understanding'>
        <Container className='centered lg'>
          <div className='understanding-grid'>
            <h2>Understand your visitors without invading their privacy</h2>
            <p>You don&apos;t have to covertly collect mountains of data on each of your visitors to generate meaningful insights. Our product proves it, by offering world-class customer insights while meeting the highest standards in data privacy.</p>
            <div className='image'>
              <Illustration illustration='illustration-7' width={598} height={395} />
            </div>
          </div>
          <ThreeTextGrid>
            <ThreeTextGridItem
              title='Private by design'
              body={<p>We don&apos;t use cookies or IP address tracking, and we provide tools like our <Link href='/blog/privacy/a-magic-erasure-that-protects-your-visitors-privacy'><a>Magic Erasure</a></Link> that help you avoid collecting any personal data on your users.</p>}
              link='/legal/privacy-policy'
              buttonType='link'
            />
            <ThreeTextGridItem
              title='GDPR &amp; CCPA compliant'
              body={<p>Squeaky is fully compliant with GDPR &amp; CCPA regulations. You&apos;ll be able to use our products while protecting the personal data and privacy of your customers.</p>}
              link='/legal/gdpr'
              buttonType='link'
            />
            <ThreeTextGridItem
              title='Security minded'
              body={<p>Along with a privacy-centric approach to data we also adhere to industry standard security processes and protocols.</p>}
              link='/legal/security'
              buttonType='link'
            />
          </ThreeTextGrid>
        </Container>
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
};

Home.getMetaData = () => ({
  title: 'Squeaky | The privacy-first customer experience platform',
  description: 'Squeaky\'s customer insights platform helps you understand exactly how customers are using your website or web app, without invading their privacy.',
  index: true,
});

export default Home;
