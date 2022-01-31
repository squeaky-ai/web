import React from 'react';
import type { FC } from 'react';

type ScreenshotType = 
  'analytics' |
  'nps' |
  'sentiment' |
  'session' | 
  'recordings';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  screen: ScreenshotType;
}

export const Screenshot: FC<Props> = ({ screen, ...props }) => (
  <img src={`/screenshots/${screen}.jpg`} {...props} alt='Screenshot from inside the app' />
);
