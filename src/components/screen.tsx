import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import session1 from '../../public/screens/session-1.png';
import session2 from '../../public/screens/session-2.png';
import analytics1 from '../../public/screens/analytics-1.png';
import analytics2 from '../../public/screens/analytics-2.png';
import feedback1 from '../../public/screens/feedback-1.png';
import feedback2 from '../../public/screens/feedback-2.png';
import feedback3 from '../../public/screens/feedback-3.png';
import heatmaps1 from '../../public/screens/heatmaps-1.png';
import heatmaps2 from '../../public/screens/heatmaps-2.png';
import heatmaps3 from '../../public/screens/heatmaps-3.png';
import heatmaps4 from '../../public/screens/heatmaps-4.png';
import privacy1 from '../../public/screens/privacy-1.png';
import privacy2 from '../../public/screens/privacy-2.png';

type ScreenType = 
  'session-1' |
  'session-2' |
  'analytics-1' |
  'analytics-2' |
  'feedback-1' |
  'feedback-2' |
  'feedback-3' |
  'heatmaps-1' |
  'heatmaps-2' |
  'heatmaps-3' |
  'heatmaps-4' |
  'privacy-1' |
  'privacy-2';

interface Props extends Omit<ImageProps, 'src'> {
  screen: ScreenType;
}

const getScreenSrc = (screen: ScreenType) => {
  switch(screen) {
    case 'session-1':
      return session1;
    case 'session-2':
      return session2;
    case 'analytics-1':
      return analytics1;
    case 'analytics-2':
      return analytics2;
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
    case 'privacy-1':
      return privacy1;
    case 'privacy-2':
      return privacy2;
  }
};

export const Screen: FC<Props> = ({ screen, ...props }) => (
  <Image src={getScreenSrc(screen)} {...props} alt='Screenshot from inside the app' unoptimized priority />
);
