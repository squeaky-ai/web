import React from 'react';
import type { FC } from 'react';

export type IllustrationType = 
  'illustration-1' |
  'illustration-2' |
  'illustration-3' |
  'illustration-4' |
  'illustration-5' |
  'illustration-6' |
  'illustration-7' |
  'illustration-8' |
  'illustration-9' |
  'illustration-10' |
  'illustration-11' |
  'illustration-12' |
  'illustration-13' |
  'illustration-14' |
  'illustration-15' |
  'illustration-16' |
  'illustration-17' |
  'illustration-18' |
  'illustration-19' |
  'illustration-20';


interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  illustration: IllustrationType;
}

export const Illustration: FC<Props> = ({ illustration, ...props }) => {
  return <img src={`/illustrations/${illustration}.svg`} {...props} alt='Illustration' />;
};
