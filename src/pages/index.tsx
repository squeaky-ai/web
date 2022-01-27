import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Divider } from 'components/divider';
import { Illustration } from 'components/illustration';
import { Carousel, CarouselItem } from 'components/carousel';
import { TagGroup, TagGroupItem } from 'components/tag-group';
import { SideBySide } from 'components/side-by-side';
import { Screen } from 'components/screen';
import { Screenshot } from 'components/screenshots';
import { Card } from 'components/card';
import { Platform } from 'components/platform';
import { Cta } from 'components/cta';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeImageGrid, ThreeImageGridItem } from 'components/three-image-grid';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Steps, StepItem } from 'components/steps';

const { publicRuntimeConfig } = getConfig();

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Squeaky</title>
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
            <Screenshot screen='sentiment' width={1088} height={750} alt='Screenshot of the Squeaky sentiment page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='analytics' width={1088} height={750} alt='Screenshot of the Squeaky analytics page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='nps' width={1088} height={750} alt='Screenshot of the Squeaky NPS page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='session' width={1088} height={750} alt='Screenshot of the Squeaky session page' />
          </CarouselItem>
          <CarouselItem>
            <Screenshot screen='recordings' width={1088} height={750} alt='Screenshot of the Squeaky recordings page' />
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

          <Divider />

          <TagGroup>
            <TagGroupItem
              icon='window-line'
              text='SaaS'
            />
            <TagGroupItem
              icon='shopping-cart-2-line'
              text='eCommerce'
            />
            <TagGroupItem
              icon='rocket-2-line'
              text='Startups'
            />
            <TagGroupItem
              icon='building-line'
              text='SMB&apos;s'
            />
            <TagGroupItem
              icon='hand-heart-line'
              text='Non-profits'
            />
          </TagGroup>
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

      <section className='up-and-running'>
        <Container className='centered lg'>
          <Container className='centered sm'>
            <h2>It&apos;s easy to get up and running in minutes</h2>
            <p className='subheading'>In the time it&apos;s taken you to read this page you could have already started collecting valuable insights, it&apos;s</p>
          </Container>

          <Steps>
            <StepItem
              title='Sign up'
              body={<>Create your <Link href='/auth/signup'><a>free account</a></Link> and add your website or app.</>}
              position={1}
            />
            <StepItem
              title='Install tracking code'
              body='Install our privacy-first tracking code on your website.'
              position={2}
            />
            <StepItem
              title='Analyse your data'
              body='Use your recordings and data to improve your site or app.'
              position={3}
            />
          </Steps>

          <Link href='/auth/signup'>
            <a className='button primary'>
              Get Started Free
            </a>
          </Link>
        </Container>
      </section>


      <section className='compatibility'>
        <Container className='centered lg'>
          <div>
            <h3>Compatible with the platforms you&apos;re already using</h3>
            <p>We&apos;ve got installation guides to get you up and running in no time, no matter whether you&apos;re using a CMS, or if you&apos;ve hand-coded your website or web app from scratch.</p>
            <Link href={publicRuntimeConfig.helpCenterTrackingCodeUrl}>
              <a target='_blank' rel='noreferrer'>See Installation Guides</a>
            </Link>
          </div>
          <Card>
            <div>
              <Platform platform='wordpress' height={64} width={64} />
            </div>
            <div>
              <Platform platform='shopify' height={64} width={64} />
            </div>
            <div>
              <Platform platform='wix' height={64} width={64} />
            </div>
            <div>
              <Platform platform='drupal' height={64} width={64} />
            </div>
            <div>
              <Platform platform='magento' height={64} width={64} />
            </div>
            <div>
              <Platform platform='webflow' height={64} width={64} />
            </div>
          </Card>
        </Container>
      </section>

      <section className='get-started'>
        <Cta type='squiggle' title={<h3>Get started in minutes. Your team will thank you.</h3>} />
      </section>
    </>
  );
};

export default Home;
