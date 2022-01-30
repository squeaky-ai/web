import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import illustration1 from '../../public/illustrations/illustration-1.svg';
import illustration2 from '../../public/illustrations/illustration-2.svg';
import illustration3 from '../../public/illustrations/illustration-3.svg';
import illustration4 from '../../public/illustrations/illustration-4.svg';
import illustration5 from '../../public/illustrations/illustration-5.svg';
import illustration6 from '../../public/illustrations/illustration-6.svg';
import illustration7 from '../../public/illustrations/illustration-7.svg';
import illustration8 from '../../public/illustrations/illustration-8.svg';
import illustration9 from '../../public/illustrations/illustration-9.svg';
import illustration10 from '../../public/illustrations/illustration-10.svg';
import illustration11 from '../../public/illustrations/illustration-11.svg';
import illustration12 from '../../public/illustrations/illustration-12.svg';
import illustration13 from '../../public/illustrations/illustration-13.svg';
import illustration14 from '../../public/illustrations/illustration-14.svg';
import illustration15 from '../../public/illustrations/illustration-15.svg';
import illustration16 from '../../public/illustrations/illustration-16.svg';
import illustration17 from '../../public/illustrations/illustration-17.svg';
import illustration18 from '../../public/illustrations/illustration-18.svg';
import illustration19 from '../../public/illustrations/illustration-19.svg';
import illustration20 from '../../public/illustrations/illustration-20.svg';

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


interface Props extends Omit<ImageProps, 'src'> {
  illustration: IllustrationType;
}

const getIllustrationSrc = (illustration: IllustrationType) => {
  switch(illustration) {
    case 'illustration-1':
      return illustration1;
    case 'illustration-2':
      return illustration2;
    case 'illustration-3':
      return illustration3;
    case 'illustration-4':
      return illustration4;
    case 'illustration-5':
      return illustration5;
    case 'illustration-6':
      return illustration6;
    case 'illustration-7':
      return illustration7;
    case 'illustration-8':
      return illustration8;
    case 'illustration-9':
      return illustration9;
    case 'illustration-10':
      return illustration10;
    case 'illustration-11':
      return illustration11;
    case 'illustration-12':
      return illustration12;
    case 'illustration-13':
      return illustration13;
    case 'illustration-14':
      return illustration14;
    case 'illustration-15':
      return illustration15;
    case 'illustration-16':
      return illustration16;
    case 'illustration-17':
      return illustration17;
    case 'illustration-18':
      return illustration18;
    case 'illustration-19':
      return illustration19;
    case 'illustration-20':
      return illustration20;
  }
};

export const Illustration: FC<Props> = ({ illustration, ...props }) => {
  return <Image src={getIllustrationSrc(illustration)} {...props} alt='Illustration' unoptimized />;
};
