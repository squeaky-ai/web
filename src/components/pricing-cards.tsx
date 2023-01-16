import React from 'react';
import type { FC } from 'react';
import { Container } from 'components/container';
import { PricingCard } from 'components/pricing-card';
import type { Interval } from 'lib/currency';
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
      {currentPlans.map(plan => (
        <PricingCard
          key={plan.name}
          plan={plan}
          currency={currency}
          interval={interval}
        />
      ))}
    </Container>
  );
};
