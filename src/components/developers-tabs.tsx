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

    <p>API</p>

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
  </aside>
);
