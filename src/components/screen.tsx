import React from 'react';
import type { FC } from 'react';

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

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  screen: ScreenType;
}

export const Screen: FC<Props> = ({ screen, ...props }) => (
  <img src={`/screens/${screen}.png`} {...props} alt='Screenshot from inside the app' />
);
