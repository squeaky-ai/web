import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import analytics1 from '../../public/screenshots/analytics-1.webp';
import analytics2 from '../../public/screenshots/analytics-2.webp';
import analytics3 from '../../public/screenshots/analytics-3.webp';
import dashboard1 from '../../public/screenshots/dashboard-1.webp';
import events1 from '../../public/screenshots/events-1.webp';
import events2 from '../../public/screenshots/events-2.webp';
import events3 from '../../public/screenshots/events-3.webp';
import events4 from '../../public/screenshots/events-4.webp';
import heatmaps1 from '../../public/screenshots/heatmaps-1.webp';
import heatmaps2 from '../../public/screenshots/heatmaps-2.webp';
import heatmaps3 from '../../public/screenshots/heatmaps-3.webp';
import heatmaps4 from '../../public/screenshots/heatmaps-4.webp';
import heatmaps5 from '../../public/screenshots/heatmaps-5.webp';
import journeys1 from '../../public/screenshots/journeys-1.webp';
import journeys2 from '../../public/screenshots/journeys-2.webp';
import journeys3 from '../../public/screenshots/journeys-3.webp';
import journeys4 from '../../public/screenshots/journeys-4.webp';
import nps1 from '../../public/screenshots/nps-1.webp';
import nps2 from '../../public/screenshots/nps-2.webp';
import nps3 from '../../public/screenshots/nps-3.webp';
import recordings1 from '../../public/screenshots/recordings-1.webp';
import sentiment1 from '../../public/screenshots/sentiment-1.webp';
import sentiment2 from '../../public/screenshots/sentiment-2.webp';
import session1 from '../../public/screenshots/session-1.webp';
import session2 from '../../public/screenshots/session-2.webp';

type ScreenshotType = 
  'analytics-1' |
  'analytics-2' |
  'analytics-3' |
  'dashboard-1' |
  'events-1' |
  'events-2' |
  'events-3' |
  'events-4' |
  'heatmaps-1' |
  'heatmaps-2' |
  'heatmaps-3' |
  'heatmaps-4' | 
  'heatmaps-5' |
  'journeys-1' | 
  'journeys-2' | 
  'journeys-3' | 
  'journeys-4' |
  'nps-1' |
  'nps-2' |
  'nps-3' |
  'recordings-1' |
  'sentiment-1' |
  'sentiment-2' |
  'session-1' | 
  'session-2';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  screen: ScreenshotType;
  alt?: string;
}

const getScreenSrc = (screen: ScreenshotType) => {
  switch(screen) {
    case 'analytics-1':
      return analytics1;
    case 'analytics-2':
      return analytics2;
    case 'analytics-3':
      return analytics3;
    case 'dashboard-1':
      return dashboard1;
    case 'events-1':
      return events1;
    case 'events-2':
      return events2;
    case 'events-3':
      return events3;
    case 'events-4':
      return events4;
    case 'heatmaps-1':
      return heatmaps1;
    case 'heatmaps-2':
      return heatmaps2;
    case 'heatmaps-3':
      return heatmaps3;
    case 'heatmaps-4':
      return heatmaps4;
    case 'heatmaps-5':
      return heatmaps5;
    case 'journeys-1':
      return journeys1;
    case 'journeys-2':
      return journeys2;
    case 'journeys-3':
      return journeys3;
    case 'journeys-4':
      return journeys4;
    case 'nps-1':
      return nps1;
    case 'nps-2':
      return nps2;
    case 'nps-3':
      return nps3;
    case 'sentiment-1':
      return sentiment1;
    case 'sentiment-2':
      return sentiment2;
    case 'recordings-1':
      return recordings1;
    case 'session-1':
      return session1;
    case 'session-2':
      return session2;
}
};

export const Screenshot: FC<Props> = ({ screen, ...props }) => (
  <Image 
    src={getScreenSrc(screen)}
    alt='Screenshot from inside the app' 
    unoptimized
    priority
    {...props}
  />
);
