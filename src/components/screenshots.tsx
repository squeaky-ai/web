import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import analytics1 from '../../public/screenshots/analytics-1.webp';
import analytics2 from '../../public/screenshots/analytics-2.webp';
import dashboard1 from '../../public/screenshots/dashboard-1.webp';
import heatmaps1 from '../../public/screenshots/heatmaps-1.webp';
import heatmaps2 from '../../public/screenshots/heatmaps-2.webp';
import heatmaps3 from '../../public/screenshots/heatmaps-3.webp';
import heatmaps4 from '../../public/screenshots/heatmaps-4.webp';
import nps1 from '../../public/screenshots/nps-1.webp';
import nps2 from '../../public/screenshots/nps-2.webp';
import recordings1 from '../../public/screenshots/recordings-1.webp';
import sentiment1 from '../../public/screenshots/sentiment-1.webp';
import sentiment2 from '../../public/screenshots/sentiment-2.webp';
import session1 from '../../public/screenshots/session-1.webp';
import journeys1 from '../../public/screenshots/journeys-1.webp';

type ScreenshotType = 
  'analytics-1' |
  'analytics-2' |
  'dashboard-1' |
  'heatmaps-1' |
  'heatmaps-2' |
  'heatmaps-3' |
  'heatmaps-4' |
  'nps-1' |
  'nps-2' |
  'sentiment-1' |
  'sentiment-2' |
  'session-1' | 
  'recordings-1' | 
  'journeys-1';

interface Props extends Omit<ImageProps, 'src'> {
  screen: ScreenshotType;
}

const getScreenSrc = (screen: ScreenshotType) => {
  switch(screen) {
    case 'analytics-1':
      return analytics1;
    case 'analytics-2':
      return analytics2;
    case 'dashboard-1':
      return dashboard1;
    case 'heatmaps-1':
      return heatmaps1;
    case 'heatmaps-2':
      return heatmaps2;
    case 'heatmaps-3':
      return heatmaps3;
    case 'heatmaps-4':
      return heatmaps4;
    case 'nps-1':
      return nps1;
    case 'nps-2':
      return nps2;
    case 'sentiment-1':
      return sentiment1;
    case 'sentiment-2':
      return sentiment2;
    case 'session-1':
      return session1;
    case 'recordings-1':
      return recordings1;
    case 'journeys-1':
      return journeys1;
  }
};

export const Screenshot: FC<Props> = ({ screen, ...props }) => (
  <Image src={getScreenSrc(screen)} {...props} alt='Screenshot from inside the app' unoptimized priority />
);
