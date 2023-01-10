import React from 'react';
import Link from 'next/link';
import type { FC } from 'react';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { usePlans } from 'hooks/use-plans';
import { Spinner } from 'components/spinner';
import { Message } from 'components/message';
import { Tag } from 'components/tag';
import { Divider } from 'components/divider';
import { getPricingForCurrencyAndInterval } from 'lib/plans';
import { getCurrencySymbol, Interval } from 'lib/currency';
import { buildPlanData } from 'data/plans/constants';
import type { Currency } from 'types/graphql';

interface Props {
  currency: Currency;
  interval: Interval;
}

export const PricingCards: FC<Props> = ({ currency, interval }) => {
  const { plans, loading, error } = usePlans();

  const planData = buildPlanData(plans);

  if (error) {
    return (
      <Container className='centered pricing-cards xsm'>
        <Message 
          type='error' 
          message='Pricing unavailable, please try again later'
        />
      </Container>
    );
  }

  return (
    <Container className='centered pricing-cards lg'>
      {loading && (
        <Spinner />
      )}

      {planData.map(data => (
        <Card className='plan-card' key={data.name}>
          <h4 className='plan-name'>
            <b>{data.plan.name}</b>
            {interval === Interval.YEARLY && (
              <Tag className='discount'>20% OFF</Tag>
            )}
          </h4>
          <p className='description'>
            {data.description}
          </p>
          <p className='pricing'>
            <b>{getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(data.plan, currency, interval)}</b> / {interval}
          </p>
          <Link href='/auth/signup' className='button primary'>
            Get Started Free
          </Link>  
          <Divider />
          <div className='features'>
            {data.usage.length > 0 && (
              <>
                <p className='category'>Usage</p>
                {data.usage.map(u => (
                  <p className='small' key={u}>{u}</p>
                ))}
              </>
            )}
            {data.capabilities.length > 0 && (
              <>
                <p className='category'>Capabilities</p>
                {data.includesCapabilitiesFrom && (
                  <p className='small includes'>
                    Everything in {data.includesCapabilitiesFrom}, plus the following upgrades and extras:
                  </p>
                )}
                {data.capabilities.map(c => (
                  <p className='small' key={c}>{c}</p>
                ))}
              </>
            )}
            {data.options.length > 0 && (
              <>
                <p className='category'>Options</p>
                {data.options.map(o => (
                  <p className='small' key={o}>{o}</p>
                ))}
              </>
            )}
          </div>
          <div className='deprecation-notice'>
            <p className='small'>
              You are currently on a legacy pricing plan. We will honour your plan in perpetuity, until you choose to change plan or your payment details expire.
            </p>
          </div>
        </Card>
      ))}

      <Card className='plan-card enterprise'>
        <h4 className='plan-name'>
          <b>Enterprise</b>
        </h4>
        <p className='description'>
          Tailor made insights for large organisations.
        </p>
        <p className='pricing'><b>Let's talk</b></p>
        <a href='/contact-us' className='button primary' target='_blank'>
          Book a call
        </a>
        <Divider />
        <div className='features'>
          <p className='category'>Usage</p>
          <p className='small'>Custom visits per month</p>
          <p className='small'>Unlimited team members</p>
          <p className='small'>Custom data retention</p>
          <p className='category'>Capabilities</p>
          <p className='includes small'>All features, plus the following upgrades and extras:</p>
          <p className='small'>Custom surveys <span>(Unlimited)</span></p>
          <p className='small'>Segments <span>(Unlimited)</span></p>
          <p className='category'>Options</p>
          <p className='small'>Single Sign-On (SSO)</p>
          <p className='small'>Audit Trail</p>
          <p className='small'>Private Instance</p>
          <p className='small'>Enterprise SLA&apos;s</p>
        </div>
      </Card>
    </Container>
  );
};
