import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

import matt from '../../public/people/matt.webp';
import yassine from '../../public/people/yassine.webp';
import steve from '../../public/people/steve.webp';
import steven from '../../public/people/steven.webp';
import nathan from '../../public/people/nathan.webp';
import stas from '../../public/people/stas.webp';
import wessel from '../../public/people/wessel.webp';

interface Props {
  quote: string;
  by: string;
  at: string;
  person: Person;
  circular?: boolean;
  flip?: boolean;
}

type Person = 'matt' | 'yassine' | 'steve'  | 'steven' | 'nathan' | 'stas' | 'wessel';

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
    case 'stas':
      return stas;
    case 'wessel':
      return wessel;
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
