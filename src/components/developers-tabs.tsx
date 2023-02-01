import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import type { DeveloperTab } from 'types/developers';

interface Props {
  tab: DeveloperTab;
  setTab: (tab: DeveloperTab) => void;
}

export const DevelopersTabs: FC<Props> = ({ tab, setTab }) => (
  <aside className='developers-tabs'>
    <p>Installation</p>
    <Button 
      className={classnames({ active: tab === 'tracking-code' })}
      onClick={() => setTab('tracking-code')}
    >
      <span>Tracking Code</span>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <p>Users</p>

    <Button 
      className={classnames({ active: tab === 'user-privacy' })}
      onClick={() => setTab('user-privacy')}
    >
      <span>Privacy</span>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <p>SDK</p>

    <Button
      className={classnames({ active: tab === 'sdk' })}
      onClick={() => setTab('sdk')}
    >
      <span>Intro</span>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <Button 
      className={classnames({ active: tab === 'user-indentification' })}
      onClick={() => setTab('user-indentification')}
    >
      <code className='code'>identify</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'page-views' })}
      onClick={() => setTab('page-views')}
    >
      <code className='code'>addPageView</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'nps-surveys' })}
      onClick={() => setTab('nps-surveys')}
    >
      <code className='code'>showNpsSurvey</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'sentiment-surveys' })}
      onClick={() => setTab('sentiment-surveys')}
    >
      <code className='code'>showSentimentSurvey</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'accept-consent' })}
      onClick={() => setTab('accept-consent')}
    >
      <code className='code'>acceptConsent</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'reject-consent' })}
      onClick={() => setTab('reject-consent')}
    >
      <code className='code'>rejectConsent</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
    <Button 
      className={classnames({ active: tab === 'add-event' })}
      onClick={() => setTab('add-event')}
    >
      <code className='code'>addEvent</code>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <p>API</p>

    <Button
      className={classnames({ active: tab === 'api' })}
      onClick={() => setTab('api')}
    >
      <span>Intro</span>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <Button 
      className={classnames({ active: tab === 'post-visitors' })}
      onClick={() => setTab('post-visitors')}
    >
      <code className='code'>POST /api/visitors</code>
      <Icon name='arrow-drop-right-line' />
    </Button>

    <Button 
      className={classnames({ active: tab === 'post-event' })}
      onClick={() => setTab('post-event')}
    >
      <code className='code'>POST /api/events</code>
      <Icon name='arrow-drop-right-line' />
    </Button>
  </aside>
);
