import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import analytics from '../../public/screenshots/analytics.jpg';
import dashboard from '../../public/screenshots/dashboard.jpg';
import heatmaps from '../../public/screenshots/heatmaps.jpg';
import nps from '../../public/screenshots/nps.jpg';
import recordings from '../../public/screenshots/recordings.jpg';
import sentiment from '../../public/screenshots/sentiment.jpg';
import session from '../../public/screenshots/session.jpg';

type ScreenshotType = 
  'analytics' |
  'dashboard' |
  'heatmaps' |
  'nps' |
  'sentiment' |
  'session' | 
  'recordings';

interface Props extends Omit<ImageProps, 'src'> {
  screen: ScreenshotType;
}

const getScreenSrc = (screen: ScreenshotType) => {
  switch(screen) {
    case 'analytics':
      return analytics;
    case 'dashboard':
      return dashboard;
    case 'heatmaps':
      return heatmaps;
    case 'nps':
      return nps;
    case 'sentiment':
      return sentiment;
    case 'session':
      return session;
    case 'recordings':
      return recordings;
  }
};

export const Screenshot: FC<Props> = ({ screen, ...props }) => (
  <Image src={getScreenSrc(screen)} {...props} alt='Screenshot from inside the app' unoptimized />
);
