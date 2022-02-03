import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import matt from '../../public/people/matt.png';
import yassine from '../../public/people/yassine.png';
import steve from '../../public/people/steve.png';
import steven from '../../public/people/steven.png';
import nathan from '../../public/people/nathan.png';

interface Props {
  quote: string;
  by: string;
  at: string;
  person: Person;
  circular?: boolean;
  flip?: boolean;
}

type Person = 'matt' | 'yassine' | 'steve'  | 'steven' | 'nathan';

const imageSrc = (person: Props['person']) => {
  switch(person) {
    case 'matt':
      return matt;
    case 'yassine':
      return yassine;
    case 'steve':
      return steve;
    case 'steven':
      return steven;
    case 'nathan':
      return nathan;
  }
};

export const TestimonialQuote: FC<Props> = ({ quote, by, at, circular, flip, person }) => {
  const alt = `Image of ${by}, ${at}`;
  const src = imageSrc(person);

  return (
    <div className={classnames('testimonial-quote', { circular, flip })}>
      <div className='image'>
        <div className='shadow' />
        <div className='img'>
          <Image src={src} height={296} width={296} alt={alt} unoptimized priority />;
        </div>
      </div>
      <div className='info'>
        <h3>{quote}</h3>
        <div className='bottom'>
          <div className='img'>
            <Image src={src} height={296} width={296} alt={alt} unoptimized priority />;
          </div>
          <p><b>{by}</b> {at}</p>
        </div>
      </div>
    </div>
  );
};
