import React from 'react';
import Link from 'next/link';
import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { Tag } from 'components/tag';
import { Divider } from 'components/divider';
import { getPricingForCurrencyAndInterval } from 'lib/plans';
import { getCurrencySymbol, Interval } from 'lib/currency';
import type { Currency, DecoratedPlan } from 'types/graphql';

interface Props {
  currency: Currency;
  interval: Interval;
  plans: DecoratedPlan[];
}

export const PricingCards: FC<Props> = ({ currency, interval, plans }) => {
  const currentPlans = plans.filter(plan => plan.show);

  return (
    <Container className='centered pricing-cards lg'>
      {currentPlans.map(data => (
        <Card className={classnames('plan-card', data.name.toLowerCase())} key={data.name}>
          <h4 className='plan-name'>
            <b>{data.name}</b>
            {interval === Interval.YEARLY && (
              <Tag className='discount'>20% OFF</Tag>
            )}
          </h4>
          <p className='description'>
            {data.description}
          </p>
          <p className='pricing'>
            {data.plan
              ? <><b>{getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(data.plan, currency, interval)}</b> / {interval}</>
              : <b>Let&apos;s talk</b>
            }
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
    </Container>
  );
};
