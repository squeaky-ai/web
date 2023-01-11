import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { getPricingForCurrencyAndInterval } from 'lib/plans';
import type { Currency } from 'types/graphql';
import { getCurrencySymbol, Interval } from 'lib/currency';
import type { PlanData } from 'types/billing';
import { Plans } from 'data/plans/constants';

interface Props {
  currency: Currency;
  interval: Interval;
  planData: PlanData[];
}

export const PlanComparison: FC<Props> = ({ currency, interval, planData }) => {
  const [open, setOpen] = React.useState<string[]>([]);

  const toggleOpen = (name: string) => setOpen(
    open.includes(name)
      ? open.filter(o => o !== name)
      : [...open, name]
  );

  const expandAll = () => setOpen(['usage', 'privacy', 'analytics', 'events', 'recordings', 'heatmaps', 'feedback', 'journeys', 'errors', 'visitors', 'team']);

  const collapseAll = () => setOpen([]);

  const getPlanById = (id: string) => planData.find(plan => plan.plan.id === id).plan;

  return (
    <div className='plan-comparison'>
      <div className='feature-heading'>
        <div className='item controls'>
          <Button className='link' onClick={expandAll}>Expand all</Button><span>|</span><Button className='link' onClick={collapseAll}>Collapse all</Button>
        </div>
        <div className='item free'>
          <h5>Free</h5>
          <p className='price'>Forever</p>
        </div>
        <div className='item starter'>
          <h5>Starter</h5>
          <p className='price'>from {getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(getPlanById(Plans.Starter), currency, interval)}</p>
        </div>
        <div className='item business'>
          <h5>Business</h5>
          <p className='price'>from {getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(getPlanById(Plans.Business), currency, interval)}</p>
        </div>
        <div className='item enterprise'>
          <h5>Enterprise</h5>
          <p className='price'>
            <Link href='/contact-us' className='button link'>
              Let's talk!
            </Link>
          </p>
        </div>
      </div>

      <div className={classnames('feature', { open: open.includes('usage') })}>
        <Button className='feature-header' onClick={() => toggleOpen('usage')}>
          <Icon name='dashboard-3-line' />
          <span>Usage</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('privacy') })}>
        <Button className='feature-header' onClick={() => toggleOpen('privacy')}>
          <Icon name='ghost-line' />
          <span>Privacy &amp; Compliance</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('analytics') })}>
        <Button className='feature-header' onClick={() => toggleOpen('analytics')}>
          <Icon name='line-chart-line' />
          <span>Analytics</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('events') })}>
        <Button className='feature-header' onClick={() => toggleOpen('events')}>
          <Icon name='flashlight-line' />
          <span>Event Tracking</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('recordings') })}>
        <Button className='feature-header' onClick={() => toggleOpen('recordings')}>
          <Icon name='vidicon-line' />
          <span>Session Recording</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('heatmaps') })}>
        <Button className='feature-header' onClick={() => toggleOpen('heatmaps')}>
          <Icon name='fire-line' />
          <span>Heatmaps</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('feedback') })}>
        <Button className='feature-header' onClick={() => toggleOpen('feedback')}>
          <Icon name='user-voice-line' />
          <span>User Feedback</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('journeys') })}>
        <Button className='feature-header' onClick={() => toggleOpen('journeys')}>
          <Icon name='route-line' />
          <span>User Journey Mapping</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('errors') })}>
        <Button className='feature-header' onClick={() => toggleOpen('errors')}>
          <Icon name='code-s-slash-line' />
          <span>Error Tracking</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('visitors') })}>
        <Button className='feature-header' onClick={() => toggleOpen('visitors')}>
          <Icon name='user-line' />
          <span>Visitor Profiles</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('team') })}>
        <Button className='feature-header' onClick={() => toggleOpen('team')}>
          <Icon name='group-line' />
          <span>Team</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          ...
        </div>
      </div>
    </div>
  );
};
