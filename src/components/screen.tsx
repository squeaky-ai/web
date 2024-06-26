import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import session1 from '../../public/screens/session-1.webp';
import session2 from '../../public/screens/session-2.webp';
import session3 from '../../public/screens/session-3.webp';
import analytics1 from '../../public/screens/analytics-1.webp';
import analytics2 from '../../public/screens/analytics-2.webp';
import analytics3 from '../../public/screens/analytics-3.webp';
import events1 from '../../public/screens/events-1.webp';
import events2 from '../../public/screens/events-2.webp';
import feedback1 from '../../public/screens/feedback-1.webp';
import feedback2 from '../../public/screens/feedback-2.webp';
import feedback3 from '../../public/screens/feedback-3.webp';
import heatmaps1 from '../../public/screens/heatmaps-1.webp';
import heatmaps2 from '../../public/screens/heatmaps-2.webp';
import heatmaps3 from '../../public/screens/heatmaps-3.webp';
import heatmaps4 from '../../public/screens/heatmaps-4.webp';
import heatmaps5 from '../../public/screens/heatmaps-5.webp';
import privacy1 from '../../public/screens/privacy-1.webp';
import privacy2 from '../../public/screens/privacy-2.webp';
import privacy3 from '../../public/screens/privacy-3.webp';
import privacy4 from '../../public/screens/privacy-4.webp';
import privacy5 from '../../public/screens/privacy-5.webp';
import privacy6 from '../../public/screens/privacy-6.webp';
import privacy7 from '../../public/screens/privacy-7.webp';
import privacy8 from '../../public/screens/privacy-8.webp';
import privacy9 from '../../public/screens/privacy-9.webp';
import journeys1 from '../../public/screens/journeys-1.webp';
import journeys2 from '../../public/screens/journeys-2.webp';

type ScreenType = 
  'session-1' |
  'session-2' |
  'session-3' |
  'analytics-1' |
  'analytics-2' |
  'analytics-3' |
  'events-1' |
  'events-2' |
  'feedback-1' |
  'feedback-2' |
  'feedback-3' |
  'heatmaps-1' |
  'heatmaps-2' |
  'heatmaps-3' |
  'heatmaps-4' |
  'heatmaps-5' |
  'privacy-1' |
  'privacy-2' |
  'privacy-3' |
  'privacy-4' |
  'privacy-5' |
  'privacy-6' |
  'privacy-7' |
  'privacy-8' |
  'privacy-9' |
  'journeys-1' |
  'journeys-2';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  screen: ScreenType;
  alt?: string;
}

const getScreenSrc = (screen: ScreenType) => {
  switch(screen) {
    case 'session-1':
      return session1;
    case 'session-2':
      return session2;
    case 'session-3':
      return session3;
    case 'analytics-1':
      return analytics1;
    case 'analytics-2':
      return analytics2;
    case 'analytics-3':
      return analytics3;
    case 'events-1':
      return events1;
    case 'events-2':
      return events2;
    case 'feedback-1':
      return feedback1;
    case 'feedback-2':
      return feedback2;
    case 'feedback-3':
      return feedback3;
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
    case 'privacy-1':
      return privacy1;
    case 'privacy-2':
      return privacy2;
    case 'privacy-3':
      return privacy3;
    case 'privacy-4':
      return privacy4;
    case 'privacy-5':
      return privacy5;
    case 'privacy-6':
      return privacy6;
    case 'privacy-7':
      return privacy7;
    case 'privacy-8':
      return privacy8;
    case 'privacy-9':
      return privacy9;
    case 'journeys-1':
      return journeys1;
    case 'journeys-2':
      return journeys2;
  }
};

export const Screen: FC<Props> = ({ screen, ...props }) => (
  <Image src={getScreenSrc(screen)} {...props} alt='Screenshot from inside the app' unoptimized priority />
);
