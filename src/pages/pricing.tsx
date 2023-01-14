import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { NextPage } from 'next';
import { Icon } from 'components/icon';
import { Container } from 'components/container';
import { Currencies } from 'components/currencies';
import { PricingCards } from 'components/pricing-cards';
import { Intervals } from 'components/intervals';
import { TestimonialQuote } from 'components/testimonial-quote';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';
import { Accordion } from 'components/accordion';
import { PlanComparison } from 'components/plan-comparison';
import { Message } from 'components/message';
import { Cta } from 'components/cta';
import { Spinner } from 'components/spinner';
import { Interval, getUsefulCurrency } from 'lib/currency';
import { usePlans } from 'hooks/use-plans';
import type { SqueakyPage } from 'types/page';
import type { Currency } from 'types/graphql';

const { publicRuntimeConfig } = getConfig();

const Pricing: SqueakyPage<NextPage> = () => {
  const [currency, setCurrency] = React.useState<Currency>(getUsefulCurrency());
  const [interval, setInterval] = React.useState<Interval>(Interval.MONTHLY);

  const { plans, loading, error } = usePlans();

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

        {error && (
          <Container className='centered pricing-cards xsm'>
            <Message
              type='error' 
              message='Pricing unavailable, please try again later'
            />
          </Container>
        )}

        {loading && (
          <Spinner />
        )}

        {!loading && !error && (
          <PricingCards 
            currency={currency} 
            interval={interval} 
            plans={plans}
          />
        )}
        
        <Container className='centered md-lg'>
          <a href='#pricing-comparison' className='pricing-comparison'>
            <Icon name='eye-line' />
            <span>See Full Comparison</span>
          </a>
        </Container>
      </section>

      <section className='plan'>
        <Container className='centered lg'>
          <h3>Full-stack, privacy-friendly analytics</h3>
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
            title='When do we need to pay?'
            body={
              <>
                <p>For monthly subscriptions your Squeaky plan will be billed on the same day as you initiated your active plan e.g. if you first start using the Light Plan on the 3rd of February, you will be billed on that day and on the 3rd of each month thereafter.</p>
                <p>For annual subscriptions, your Squeaky plan will be billed on the same day as you initiated your active plan the previous year.</p>
              </>
            }
          />
          <Accordion
            title='How easy is it to install Squeaky?'
            body={
              <>
                <p>We&apos;ve gone out of our way to make sure installing Squeaky is easy. We have <Link href={publicRuntimeConfig.helpCenterTrackingCodeUrl} target='_blank' rel='noreferrer'>installation guides</Link> for all leading CMS and eCommerce platforms, as well as for manual installation. Typically installation takes 2-5 minutes, and if you run into any problems we&apos;re on hand to walk you through the steps required to get up and running.</p>
              </>
            }
          />
          <Accordion
            title='Will Squeaky affect my site&apos;s performance?'
            body={
              <>
                <p>Our script is the last thing to load on your page, and is incredible small, so the performance is great - you and your users will never know it&apos;s there. We also don&apos;t cache huge volumes of data on your user&apos;s device, so there is no risk of the user&apos;s device performance degrading as the session gets longer.</p>
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

      <section id='pricing-comparison' className='pricing-comparison-table'>
        <Container className='centered lg'>
          <h2>Compare Plans</h2>
          {!loading && !error && (
            <PlanComparison 
              currency={currency} 
              interval={interval} 
              plans={plans}
            />
          )}
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
