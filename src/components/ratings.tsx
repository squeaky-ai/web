import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

import rating0 from '../../public/ratings/rating-0.svg';
import rating1 from '../../public/ratings/rating-1.svg';
import rating2 from '../../public/ratings/rating-2.svg';
import rating3 from '../../public/ratings/rating-3.svg';
import rating4 from '../../public/ratings/rating-4.svg';

interface Props extends Omit<ImageProps, 'src'> {
  rating: number;
}

const getRatingSrc = (rating: number) => {
  switch(rating) {
    case 0:
      return rating0;
    case 1:
      return rating1;
    case 2:
      return rating2;
    case 3:
      return rating3;
    case 4:
      return rating4;
    default:
      return null;
  }
}


export const Rating: FC<Props> = ({ rating, ...props }) => {
  return <Image src={getRatingSrc(rating)} {...props} alt='Rating' unoptimized priority />;
};
