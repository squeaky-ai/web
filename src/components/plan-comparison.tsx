import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { getPricingForCurrencyAndInterval } from 'lib/plans';
import { Plans } from 'data/plans/constants';
import { getCurrencySymbol, Interval } from 'lib/currency';
import type { Currency, DecoratedPlan } from 'types/graphql';

interface Props {
  currency: Currency;
  interval: Interval;
  plans: DecoratedPlan[];
}

export const PlanComparison: FC<Props> = ({ currency, interval, plans }) => {
  const [open, setOpen] = React.useState<string[]>([]);

  const toggleOpen = (name: string) => setOpen(
    open.includes(name)
      ? open.filter(o => o !== name)
      : [...open, name]
  );

  const expandAll = () => setOpen(['usage', 'privacy', 'analytics', 'events', 'recordings', 'heatmaps', 'feedback', 'journeys', 'errors', 'visitors', 'team']);

  const collapseAll = () => setOpen([]);

  const getPlanById = (id: string) => plans.find(plan => plan.plan.id === id).plan;

  const freePlan = getPlanById(Plans.Free);
  const starterPlan = getPlanById(Plans.Starter);
  const businessPlan = getPlanById(Plans.Business);

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
          <p className='price'>from {getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(starterPlan, currency, interval)}</p>
        </div>
        <div className='item business'>
          <h5>Business</h5>
          <p className='price'>from {getCurrencySymbol(currency)}{getPricingForCurrencyAndInterval(businessPlan, currency, interval)}</p>
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
          <div className='row'>
            <p>Visits per month</p>
            <p>{freePlan.maxMonthlyRecordings.toLocaleString()}</p>
            <p>{starterPlan.maxMonthlyRecordings.toLocaleString()}</p>
            <p>{businessPlan.maxMonthlyRecordings.toLocaleString()}</p>
            <p>Custom</p>
          </div>
          <div className='row'>
            <p>Team members</p>
            <p>{freePlan.teamMemberLimit || 'Unlimited'}</p>
            <p>{starterPlan.teamMemberLimit || 'Unlimited'}</p>
            <p>{businessPlan.teamMemberLimit || 'Unlimited'}</p>
            <p>Unlimited</p>
          </div>
          <div className='row'>
            <p>Websites</p>
            <p>{freePlan.siteLimit || 'Unlimited'}</p>
            <p>{starterPlan.siteLimit || 'Unlimited'}</p>
            <p>{businessPlan.siteLimit || 'Unlimited'}</p>
            <p>Unlimited</p>
          </div>
          <div className='row'>
            <p>Data retention</p>
            <p>{freePlan.dataStorageMonths} months</p>
            <p>{starterPlan.dataStorageMonths} months</p>
            <p>{businessPlan.dataStorageMonths} months</p>
            <p>Custom</p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('privacy') })}>
        <Button className='feature-header' onClick={() => toggleOpen('privacy')}>
          <Icon name='ghost-line' />
          <span>Privacy &amp; Compliance</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Data anonymisation</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Consent management <i>Widget, API, third-party.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Cookie &amp; IP-based tracking</p>
            <p>Never</p>
            <p>Never</p>
            <p>Never</p>
            <p>Never</p>
          </div>
          <div className='row'>
            <p>Magic Erasure</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>GDPR compliant</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>CCPA compliant</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Audit trail</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('analytics') })}>
        <Button className='feature-header' onClick={() => toggleOpen('analytics')}>
          <Icon name='line-chart-line' />
          <span>Analytics</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Site-wide analytics</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Single-page analytics</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Session averages <i>(Total views, average time on page, bounce rates, and exit rates)</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Busiest days of the week</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Audience metrics <i>Country, language, browser.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Traffic Source / Referrer</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Site-wide analytics</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Device and screen metrics</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Filters <i>Date range.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('events') })}>
        <Button className='feature-header' onClick={() => toggleOpen('events')}>
          <Icon name='flashlight-line' />
          <span>Event Tracking</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Autocapture <i>Page views, text and CSS selector clicks, javascript errors.</i></p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Custom events</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Event groups</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Event comparisons</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Event feed</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Session and video linking</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('recordings') })}>
        <Button className='feature-header' onClick={() => toggleOpen('recordings')}>
          <Icon name='vidicon-line' />
          <span>Session Recording</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Recordings database <i>Advanced filtering, custom columns, sorting, bulk actions and pagination.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Playback controls <i>Scrubber, playback speed controls, fast forward inactivity.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Session info and metadata</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Error Tracking</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Tagging</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Notes</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Bookmarking</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Sharing</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>User feedback <i>Inline NPS and Sentiment feedback.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('heatmaps') })}>
        <Button className='feature-header' onClick={() => toggleOpen('heatmaps')}>
          <Icon name='fire-line' />
          <span>Heatmaps</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Autocapture</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Filters <i>Device size, date range.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Clickmaps</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Click counts</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Mousemaps</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Scrollmaps</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('feedback') })}>
        <Button className='feature-header' onClick={() => toggleOpen('feedback')}>
          <Icon name='user-voice-line' />
          <span>User Feedback</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>NPS surveys</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Sentiment surveys</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Custom surveys</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Appearance customisation <i>Brand colours, position.</i></p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Multi-language</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Device display options</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Analysis</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Filter</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('journeys') })}>
        <Button className='feature-header' onClick={() => toggleOpen('journeys')}>
          <Icon name='route-line' />
          <span>User Journey Mapping</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Autocapture</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>See where visitors are going</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>See where users have been</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Drop-off rates</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Filters <i>Date range.</i></p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('errors') })}>
        <Button className='feature-header' onClick={() => toggleOpen('errors')}>
          <Icon name='code-s-slash-line' />
          <span>Error Tracking</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Autocapture</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Analysis <i>Trends, visitor impact, comparisons.</i></p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Error details <i>Page, filename, line number, column, event message, stacktrace.</i></p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('visitors') })}>
        <Button className='feature-header' onClick={() => toggleOpen('visitors')}>
          <Icon name='user-line' />
          <span>Visitor Profiles</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p>Visitors database <i>Filtering, custom columns, search and sorting.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Anonymous by default</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Visitor profiles</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Analytics</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Data linking</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Starring</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
      <div className={classnames('feature', { open: open.includes('team') })}>
        <Button className='feature-header' onClick={() => toggleOpen('team')}>
          <Icon name='group-line' />
          <span>Team</span>
          <Icon name='arrow-drop-down-line' className='arrow' />
        </Button>
        <div className='features'>
          <div className='row'>
            <p> Members</p>
            <p>{freePlan.teamMemberLimit || 'Unlimited'}</p>
            <p>{starterPlan.teamMemberLimit || 'Unlimited'}</p>
            <p>{businessPlan.teamMemberLimit || 'Unlimited'}</p>
            <p>Unlimited</p>
          </div>
          <div className='row'>
            <p>Roles <i>Owner, Admin, User, Read-only.</i></p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Sharing</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Linked Data Permissions</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>Screening <i>By IP, email, or domain.</i></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
          <div className='row'>
            <p>SSO</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p><Icon name='check-line' className='check' /></p>
          </div>
        </div>
      </div>
    </div>
  );
};
