import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { range } from 'lib/utils';
import { Icon } from 'components/icon';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { usePlans } from 'hooks/use-plans';
import { Spinner } from 'components/spinner';
import { monthlyPrice, recordingsPerMonthLimit, formatShortRecordingCount } from 'lib/plans';
import type { Currency } from 'types/common';
import { Message } from './message';

interface Props {
  currency: Currency;
}

export const Calculator: FC<Props> = ({ currency }) => {
  const [plan, setPlan] = React.useState<number>(1);

  const { plans, loading, error } = usePlans();

  const isHighestPlan = plan === plans.length;

  const onPlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(event.target.value);
    setPlan(number === 0 ? 1 : number);
  };

  const getCalculatorStyle = (): React.CSSProperties => {
    if (plan < 3) {
      return { left: 0 };
    }

    if (plan >= 4) {
      return { right: 0 };
    }

    return { left: '50%', transform: 'translateX(-50%)' };
  };

  if (error) {
    return (
      <Container className='centered calculator xsm'>
        <Message 
          type='error' 
          message='Pricing unavailable, please try again later'
        />
      </Container>
    );
  }

  return (
    <Container className='centered calculator md-lg'>
      <Card>
        {loading && (
          <Spinner />
        )}

        {!loading && (
          <>
            <div className='calc'>
              <h3>Calculate Your Price</h3>
              <p>
                Simple pricing for powerful functionality - Just select the number of <a href='#'>visits</a> you want to capture per month to discover which plan is right for you:
              </p>
              <div className='slider-label'>
                <p style={getCalculatorStyle()}>
                  <Icon name='group-line' />
                  <b>{recordingsPerMonthLimit(plans, plan)}</b> visits per month
                </p>
              </div>
              <div className='slider'>
                <div className='progress'>
                  {range(plans.length).map(i => (
                    <span key={i} className={classnames({ active: plan > i })} />
                  ))}
                </div>
                <input 
                  className='input' 
                  type='range' 
                  step={1} 
                  min={0} 
                  max={plans.length}
                  value={plan}
                  onChange={onPlanChange}
                />
              </div>
              <div className='slider-axis'>
                <p>
                  <span className='active'>0</span>
                  {plans.map((p, i) => (
                    <span key={p.name} className={classnames({ active: plan === i + 1 })}>
                      {formatShortRecordingCount(p.maxMonthlyRecordings) || 'Custom'}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            {isHighestPlan && (
              <div className='plan enterprise'>
                <h4>
                  <Icon name='building-3-line' />
                  Enterprise
                </h4>
                <p>All our amazing products, plus:</p>
                <ul>
                  <li><Icon name='check-line' />Bespoke visits limits</li>
                  <li><Icon name='check-line' />Enterprise SLA&apos;s &amp; Support</li>
                  <li><Icon name='check-line' />SSO</li>
                  <li><Icon name='check-line' />Audit Trail</li>
                  <li><Icon name='check-line' />Self-hosting options</li>
                </ul>
                <Link href='/contact-us'>
                  <a className='button primary'>
                    Talk To Sales
                  </a>
                </Link>
              </div>
            )}
            {!isHighestPlan && (
              <div className='plan'>
               <h4>{plans[plan]?.name}</h4>
               <p className='limit'>{plan === plans.length ? 'more than' : 'up to'} {recordingsPerMonthLimit(plans, plan)} visits per month</p>
               <h1>{currency.symbol}{monthlyPrice(plans, plan, currency.name)}</h1>
               <p className='duration'>per month</p>
               <Link href='/auth/signup'>
                 <a className='button primary'>
                   Get Started Free
                 </a>
               </Link>
               <p className='assurance'>
                 <Icon name='check-line' />
                 No credit card required
               </p>
             </div>
            )}
          </>
        )}
      </Card>
    </Container>
  );
};
