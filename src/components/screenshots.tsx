import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import analytics1 from '../../public/screenshots/analytics-1.jpg';
import analytics2 from '../../public/screenshots/analytics-2.jpg';
import dashboard1 from '../../public/screenshots/dashboard-1.jpg';
import heatmaps1 from '../../public/screenshots/heatmaps-1.jpg';
import nps1 from '../../public/screenshots/nps-1.jpg';
import recordings1 from '../../public/screenshots/recordings-1.jpg';
import sentiment1 from '../../public/screenshots/sentiment-1.jpg';
import session1 from '../../public/screenshots/session-1.jpg';

type ScreenshotType = 
  'analytics-1' |
  'analytics-2' |
  'dashboard-1' |
  'heatmaps-1' |
  'nps-1' |
  'sentiment-1' |
  'session-1' | 
  'recordings-1';

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
    case 'nps-1':
      return nps1;
    case 'sentiment-1':
      return sentiment1;
    case 'session-1':
      return session1;
    case 'recordings-1':
      return recordings1;
  }
};

export const Screenshot: FC<Props> = ({ screen, ...props }) => (
  <Image src={getScreenSrc(screen)} {...props} alt='Screenshot from inside the app' unoptimized priority />
);
