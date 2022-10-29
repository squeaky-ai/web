import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { Container } from 'components/container';
import { Currencies } from 'components/currencies';
import { Calculator } from 'components/calculator';
import { Intervals } from 'components/intervals';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Accordion } from 'components/accordion';
import { Cta } from 'components/cta';
import { Interval, getUsefulCurrency } from 'lib/currency';
import type { Currency } from 'types/common';
import type { SqueakyPage } from 'types/page';

const Pricing: SqueakyPage<NextPage> = () => {
  const [currency, setCurrency] = React.useState<Currency>(getUsefulCurrency());
  const [interval, setInterval] = React.useState<Interval>(Interval.MONTHLY);

  return (
    <>
      <section className='hero'>
        <Container className='centered sm-md'>
          <h1>Unleash your data</h1>
          <p>All plans come with access to our entire range of customer experience products, including <b>analytics</b>, <b>recordings</b>, <b>feedback</b>, and <b>heatmap</b> data.</p>
          <div className='options'>
            <Currencies selected={currency} setSelected={setCurrency} />
            <Intervals selected={interval} setSelected={setInterval} />
          </div>
        </Container>
        <Calculator currency={currency} interval={interval} />
      </section>

      <section className='plan'>
        <Container className='centered lg'>
          <h3>Included in every plan</h3>
          <ThreeTextGrid>
            <ThreeTextGridItem
              icon='line-chart-line'
              title='Analytics'
              body={<p>Turn your data into actionable insights to improve your user experience and convert leads faster than ever.</p>}
              link='/product/analytics'
            />
            <ThreeTextGridItem
              icon='vidicon-line'
              title='Recordings'
              body={<p>It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.</p>}
              link='/product/recordings'
            />
            <ThreeTextGridItem
              icon='flashlight-line'
              title='Event Tracking'
              body={<p>Monitor every element of your customer experience by tracking any action taking place on your site.</p>}
              link='/product/event-tracking'
            />
            <ThreeTextGridItem
              icon='user-voice-line'
              title='Feedback'
              body={<p>Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.</p>}
              link='/product/feedback'
            />
            <ThreeTextGridItem
              icon='fire-line'
              title='Heatmaps'
              body={<p>Discover which content matters most to your visitors, and where your business could be performing better.</p>}
              link='/product/heatmaps'
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
            quote='Squeaky is a great, no-nonsense way of seeing how users are using our app. We get great insights that we use to improve Taskable on a weekly basis.'
            by='Matt Johnson'
            at='CEO at Taskable'
            person='matt'
          />
        </Container>
      </section>

      <section className='faq'>
        <Container className='centered md-lg'>
          <h2>Frequently asked questions</h2>
          <Accordion
            title='What are visits and how many do I need?'
            body={
              <>
                <p>Visits are the times when individual visitors have visited your website or web app. If a visitors has been inactive for 30 minutes then the visit is closed, if they reactivate then a new visit is started.</p>
                <p>If you are not familiar with how much traffic or visitors you currently have, then don&apos;t worry. You can start on the free pricing plan and you will be notified when you have exceeded your visit limits, and can upgrade at that time.</p>
              </>
            }
          />
          <Accordion
            title='What happens if I go over my visit limit?'
            body={
              <>
                <p>As you approach the visit limit for your subscription we will send you an email to let you know, and once your limit has been reached you will receive an additional email notification. If you go over your limit you have two options:</p>
                <ol>
                  <li>You can simply wait until your next month starts, at which point you will begin capturing new visit data using the new month&apos;s allocation.</li>
                  <li>You can upgrade your plan within Squeaky, this will both ensure you don&apos;t run over your limit the following month, and have no unnecessary gaps in your data.</li>
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
            title='When do we need to pay?'
            body={
              <>
                <p>Your monthly subscription for your Squeaky plan will be billed on the same day as you initiated your active plan, e.g. if you first starting using the Light Plan on the 3rd of February, you will be billed on the 3rd of each month thereafter.</p>
              </>
            }
          />
          <Accordion
            title='How easy is it to install Squeaky?'
            body={
              <>
                <p>We&apos;ve gone out of our way to make sure installing Squeaky is easy. We have installation guides for all leading CMS and eCommerce platforms, as well as for manual installation. Typically installation takes 2-5 minutes, and if you run into any problems we&apos;re on hand to walk you through the steps required to get up and running.</p>
              </>
            }
          />
          <Accordion
            title='Are you GDPR and CCPA compliant?'
            body={
              <>
                <p>Yes of course, please visit our <Link href='/legal/gdpr'><a>Legal &amp; Compliance page</a></Link> to learn more.</p>
              </>
            }
          />
          <Accordion
            title='Do you have a privacy policy?'
            body={
              <>
                <p>Yes, you can find our privacy policy <Link href='/legal/privacy-policy'><a>here</a></Link>.</p>
              </>
            }
          />
          <Accordion
            title='How long is data stored in Squeaky for?'
            body={
              <>
                <p>By default, all Squeaky data is stored for 365 days. Any visitor sessions older than 365 days will be automatically deleted. For Enterprise customers we can offer extended data storage.</p>
              </>
            }
          />
          <Accordion
            title='Do you provide customer support?'
            body={
              <>
                <p>We provide email support for all plans and phone support for Enterprise customers, response times are dictated by the Service Level Agreement of your current plan.</p>
                <p>Alongside direct support via email and phone, we have extensive documentation and how-to guides in our Help Centre.</p>
              </>
            }
          />
        </Container>
      </section>

      <section className='insight'>
        <Cta type='cross-mauve' title={<h2>Give your business the insights it deserves</h2>} />
      </section>
    </>
  );
};

Pricing.getMetaData = () => ({
  title: 'Squeaky | Pricing',
  description: 'Find out which Squeaky subscription is right for your business. We have a wide range of pricing plans, including free and enterprise options.',
  index: true,
});

export default Pricing;
