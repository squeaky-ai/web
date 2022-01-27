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

const Img: FC<Pick<Props, 'person'>> = (props) => {
  switch(props.person) {
    case 'matt':
      return <Image src={matt} height={296} width={296} alt='Image of Matt, the person who gave the testimonial' />;
    case 'yassine':
      return <Image src={yassine} height={296} width={296} alt='Image of Yassine, the person who gave the testimonial' />;
    case 'steve':
      return <Image src={steve} height={296} width={296} alt='Image of Steve, the person who gave the testimonial' />;
    case 'steven':
      return <Image src={steven} height={296} width={296} alt='Image of Steven, the person who gave the testimonial' />;
    case 'nathan':
      return <Image src={nathan} height={296} width={296} alt='Image of Nathan, the person who gave the testimonial' />;
    default:
      return null;
  }
};

export const TestimonialQuote: FC<Props> = ({ quote, by, at, circular, flip, person }) => (
  <div className={classnames('testimonial-quote', { circular, flip })}>
    <div className='image'>
      <div className='shadow' />
      <div className='img'>
        <Img person={person} />
      </div>
    </div>
    <div className='info'>
      <h3>{quote}</h3>
      <p><b>{by}</b> {at}</p>
    </div>
  </div>
);
