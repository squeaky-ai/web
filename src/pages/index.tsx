import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { Carousel, CarouselItem } from 'components/carousel';
import { SideBySide } from 'components/side-by-side';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { Cta } from 'components/cta';
import { UpAndRunning } from 'components/up-and-running';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeImageGrid, ThreeImageGridItem } from 'components/three-image-grid';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Platforms } from 'components/platforms';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const Home: NextPage<ServerSideProps> = () => {
  return (
    <>
      <Head>
        <title>Squeaky | The privacy-first customer experience platform</title>
      </Head>

      <section className='hero'>
        <Container className='centered md'>
          <h1>The privacy-first customer experience platform</h1>
          <p>Create high-value digital experiences by understanding exactly how visitors are using your service or product, without compromising their privacy.</p>
          <div className='actions'>
            <Link href='/auth/signup'>
              <a className='button primary'>
                Get Started
              </a>
            </Link>
            <Link href='/book-demo'>
              <a className='button secondary'>
              Book Demo
              </a>
            </Link>
          </div>
        </Container>
        <div className='features'>
          <p>
            <Icon name='bank-card-2-line' />
            No credit card required
          </p>
          <p>
            <Icon name='shield-check-line' />
            GDPR &amp; CCPA complaint
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
          <CarouselItem>
            <Screenshot screen='heatmaps-1' alt='Screenshot of the Squeaky heatmaps page' />
          </CarouselItem>
        </Carousel>

        <Container className='centered md-lg'>
          <h2>Solutions for results-driven teams and companies</h2>

          <ThreeImageGrid>
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-16' width={122} height={128} />}
              title='Product &amp; UX Teams'
              body='Use context-rich, customer data and insights to make better decisions for your business.'
              link='/use-cases/product-and-ux'
            />
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-17' width={138} height={128} />}
              title='Marketing &amp; CRO'
              body='Analyse and segment your traffic to learn why visitors are converting and how you can help more to succeed.'
              link='/use-cases/marketing-and-conversion'
            />
            <ThreeImageGridItem
              image={<Illustration illustration='illustration-18' width={164} height={128} />}
              title='Customer Success'
              body='Provide best-in-class customer support by seeing and hearing your customers&apos; problems first hand.'
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
          <h2>Elevate your customers&apos; digital experience</h2>
          <p className='subheading'>Squeaky <b>puts data at the heart</b> of how you understand and improve your customer experience.</p>
        </Container>

        <Container className='centered lg'>
          <SideBySide 
            subtitle='Session recording'
            title='Discover what your customers are really getting up to'
            body='There&apos;s no need to sift through hours of recording data, our advanced filtering helps you segment and surface only the most relevant customer recordings.'
            linkText='Learn More'
            linkHref='/product/recordings'
            image={<Screen screen='session-1' />}
          />
          <SideBySide 
            subtitle='Analytics'
            title='Make better decisions using actionable analytics data'
            body='Monitor performance and make informed decisions about your site, using precise and meaningful data.'
            linkText='Learn More'
            linkHref='/product/analytics'
            image={<Screen screen='analytics-1' />}
            flip
          />
          <SideBySide 
            subtitle='NPS® feedback &amp; sentiment analysis'
            title='Remove guesswork with a steady flow of customer feedback'
            body='Capture round-the-clock NPS® and Sentiment survey data and know your customers are being heard.'
            linkText='Learn More'
            linkHref='/product/feedback'
            image={<Screen screen='feedback-1' />}
          />
          <SideBySide 
            subtitle='Heatmaps'
            title='Use real data to evaluate the performance of your site'
            body='Use Heatmap data to provide the right content and the most effective interfaces for your users.'
            linkText='Learn More'
            linkHref='/product/heatmaps'
            image={<Screen screen='heatmaps-1' />}
            flip
          />
        </Container>
      </section>

      <section className='understanding'>
        <Container className='centered lg'>
          <div className='understanding-grid'>
            <h2>Understand your visitors without invading their privacy</h2>
            <p>You don&apos;t have to covertly collect mountains of data on each of your visitors to generate meaningful insights. Our product proves it, by offering world-class customer insights whilst meeting the highest standards in data privacy.</p>
            <div className='image'>
              <Illustration illustration='illustration-19' width={598} height={395} />
            </div>
          </div>
          <ThreeTextGrid>
            <ThreeTextGridItem
              title='Private by design'
              body='Since our inception, privacy-first design has been a core element of our product. We don&apos;t use cookie-based tracking, store IP addresses, or capture form data.'
              link='#'
            />
            <ThreeTextGridItem
              title='GDPR &amp; CCPA compliant'
              body='Squeaky is full compliant with GDPR &amp; CCPA regulations. You&apos;ll be able to use our products whilst protecting the personal data and privacy of your customers.'
              link='#'
            />
            <ThreeTextGridItem
              title='Security minded'
              body='Along with a privacy-centric approach to data we also adhere to industry standard security processes and protocols.'
              link='#'
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
        <Cta type='squiggle' title={<h3>Get started in minutes. Your team will thank you.</h3>} />
      </section>
    </>
  );
};

export default Home;
export { getServerSideProps };
