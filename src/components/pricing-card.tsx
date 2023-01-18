import React from 'react';
import Link from 'next/link';
import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/card';
import { Divider } from 'components/divider';
import { getPricingForCurrencyAndInterval } from 'lib/plans';
import { getCurrencySymbol, Interval } from 'lib/currency';
import type { Currency, DecoratedPlan } from 'types/graphql';
import { Button } from './button';

interface Props {
  currency: Currency;
  interval: Interval;
  plan: DecoratedPlan;
}

export const PricingCard: FC<Props> = ({ plan, interval, currency }) => {
  const [showMore, setShowMore] = React.useState<boolean>(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Card className={classnames('plan-card', plan.name.toLowerCase())}>
      <h4 className='plan-name'>
        {plan.name}
      </h4>
      <p className='description'>
        {plan.description}
      </p>
      <h2 className='pricing'>
        {plan.plan
          ? <>{getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(plan.plan, currency, interval)} <span>/ month</span></>
          : <>Let&apos;s talk</>
        }
        {interval === Interval.YEARLY && (
          <span className='discount'>Paid yearly (save 20%)</span>
        )}
      </h2>
      <Link href='/auth/signup' className='button primary'>
        Get Started Free
      </Link>
      <Divider />
      <Button className='show-more' onClick={toggleShowMore}>
        {showMore ? 'Hide details' : 'Show details'}
      </Button>
      <div className={classnames('features', { show: showMore })}>
        {plan.usage.length > 0 && (
          <>
            <p className='category'>Usage</p>
            {plan.usage.map(u => (
              <p className='small' key={u}>{u}</p>
            ))}
          </>
        )}
        {plan.capabilities.length > 0 && (
          <>
            <p className='category'>Capabilities</p>
            {plan.includesCapabilitiesFrom && (
              <p className='small includes'>
                Everything in {plan.includesCapabilitiesFrom}, plus the following upgrades and extras:
              </p>
            )}
            {plan.capabilities.map(c => (
              <p className='small' key={c}>{c}</p>
            ))}
          </>
        )}
        {plan.options.length > 0 && (
          <>
            <p className='category'>Options</p>
            {plan.options.map(o => (
              <p className='small' key={o}>{o}</p>
            ))}
          </>
        )}
      </div>
    </Card>
  );
};
