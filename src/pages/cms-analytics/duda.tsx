import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { CmsAnalyticsHeader } from 'components/cms-analytics-header';
import { Container } from 'components/container';
import { ExpandingDetails } from 'components/expanding-details';
import { CmsUpAndRunning } from 'components/cms-up-and-running';
import { Screenshot } from 'components/screenshots';
import { Accordion } from 'components/accordion';
import { Illustration } from 'components/illustration';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Cta } from 'components/cta';
import { dudaAppStoreLink } from 'data/sites/constants';
import type { SqueakyPage } from 'types/page';

const CmsAnalyticsDuda: SqueakyPage<NextPage> = () => (
  <>
    <CmsAnalyticsHeader
      title='The privacy-first analytics tool for Duda'
      image='duda'
      body={
        <>
          <p>Delight your clients with powerful, privacy-friendly analytics that will help them uncover insights, improve their sites, and grow their businesses.</p>
          <Link href={dudaAppStoreLink} className='button primary' target='_blank' rel='noreferrer'>
            Vist The Duda App Store
          </Link>
        </>
      }
    />

    <section className='glance'>
      <Container className='lg centered'>
        <h2>Squeaky at a glance</h2>
        <p className='subheading'>Squeaky <b>puts data at the heart</b> of how you understand and improve your customer experience.</p>

        <ExpandingDetails
          items={[
            {
              icon: 'line-chart-line',
              title: 'Analytics',
              body: 'Turn your data into actionable insights to improve your user experience and service your customers best than ever.',
              image: <Screenshot screen='analytics-1' width={738} height={525} />
            },
            {
              icon: 'vidicon-line',
              title: 'Session recording',
              body: 'It\'s never been easier to understand your users, thanks to our seamless session recording and playback.',
              image: <Screenshot screen='session-1' width={738} height={525} />
            },
            {
              icon: 'fire-line',
              title: 'Heatmaps',
              body: 'Discover which content matters most to your visitors, and where your business could be performing better.',
              image: <Screenshot screen='heatmaps-5' width={738} height={525} />
            },
          ]}
        />

        <ExpandingDetails
          flip
          items={[
            {
              icon: 'flashlight-line',
              title: 'Event and error tracking',
              body: 'Monitor every element of your customer experience by tracking any action taking place on your site.',
              image: <Screenshot screen='events-1' width={738} height={525} />
            },
            {
              icon: 'group-line',
              title: 'Feedback widgets',
              body: 'Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.',
              image: <Screenshot screen='nps-1' width={738} height={525} />
            },
            {
              icon: 'zoom-in-line',
              title: 'Customer journey maps',
              body: 'Alongside site-wide analytics you can also analyse the performance of individual pages of your site, fine tuning your site for the best possible results.',
              image: <Screenshot screen='journeys-1' width={738} height={525} />
            },
          ]}
        />
      </Container>
    </section>

    <section className='easy'>
      <CmsUpAndRunning cms='duda' />
    </section>

    <section className='faq'>
      <Container className='centered md-lg'>
        <h2>Frequently asked questions</h2>
        <Accordion
          title='What are visits and how many do I need?'
          body={
            <>
              <p>Visits are the times when individual visitors have visited your website or web app. A visit could last minutes or hours, but if a visitor has been inactive for 30 minutes then the visit is closed, if they reactivate then a new visit is started.</p>
              <p>If you are not familiar with how much traffic or visitors you currently have, then don&apos;t worry. You can start on the free plan and you will be notified when you are approaching your visit limit and can upgrade at that time.</p>
            </>
          }
        />
        <Accordion
          title='What happens if I go over my visit limit?'
          body={
            <>
              <p>As you approach the visit limit for your subscription we will send you an email to let you know, and once your limit has been reached you will receive an additional email notification. If you&apos;re approaching or exceed your limit you have two options:</p>
              <ol>
                <li>You can simply wait until your next month starts, at which point you will begin capturing new visit data using the new month&apos;s allocation.</li>
                <li>You can upgrade your plan within Squeaky, this will ensure you don&apos;t run over your limit the following month and that have no unnecessary gaps in your data for the current month.</li>
              </ol>
            </>
          }
        />
        <Accordion
          title='Can I cancel at any time?'
          body={
            <>
              <p>Absolutely, simply head to the subscription page in Squeaky and you can downgrade or cancel your subscription at any time.</p>
            </>
          }
        />
        <Accordion
          title='Are you GDPR and CCPA compliant?'
          body={
            <>
              <p>Yes of course, please visit our <Link href='/legal/gdpr'>Legal &amp; Compliance page</Link> to learn more.</p>
            </>
          }
        />
        <Accordion
          title='Do you have a privacy policy?'
          body={
            <>
              <p>Yes, you can find our privacy policy <Link href='/legal/privacy-policy'>here</Link>.</p>
            </>
          }
        />
        <Accordion
          title='How long is data stored in Squeaky for?'
          body={
            <>
              <p>Your data storage allocation is dependent upon the plan you are on:</p>
              <ul>
                <li>Free plan: 1 month of data storage.</li>
                <li>Starter plan: 3 months of data storage.</li>
                <li>Business plan: 12 months of data storage.</li>
                <li>Enterprise plan: Custom data storage.</li>
              </ul>
              <p>Any session data older than your plans data storage limit will be automatically deleted. </p>
            </>
          }
        />
        <Accordion
          title='Do you provide customer support?'
          body={
            <>
              <p>We offer email, live chat, and phone support, depending on the plan you are on. Response times are dictated by the Service Level Agreement of your current plan and Enterprise customers have a dedicated account manager.</p>
              <p>We also offer extensive documentation and how-to guides in our Help Centre.</p>
            </>
          }
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
            body={<p>We don&apos;t use cookies or IP address tracking, and we provide tools like our <Link href='/blog/privacy/a-magic-erasure-that-protects-your-visitors-privacy'>Magic Erasure</Link> that help you avoid collecting any personal data on your users.</p>}
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

    <section className='get-started'>
      <Cta
        type='squiggle'
        title={<h3>Learn more about analytics for your business</h3>}
        buttonText='Book Demo' 
        buttonLink='/book-demo'
      />
    </section>
  </>
);

CmsAnalyticsDuda.getMetaData = () => ({
  title: 'Squeaky | CMS Analytics | Duda',
  description: 'Find out how Squeaky\'s easy-to-use and privacy-friendly analytics solution can help improve the user experience and performance of your Duda website',
  index: true,
});

export default CmsAnalyticsDuda;
