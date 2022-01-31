import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';

interface Props {
  quote: string;
  by: string;
  at: string;
  person: Person;
  circular?: boolean;
  flip?: boolean;
}

type Person = 'matt' | 'yassine' | 'steve'  | 'steven' | 'nathan';

export const TestimonialQuote: FC<Props> = ({ quote, by, at, circular, flip, person }) => (
  <div className={classnames('testimonial-quote', { circular, flip })}>
    <div className='image'>
      <div className='shadow' />
      <div className='img'>
        <img src={`/people/${person}.png`} height={296} width={296} alt='Image of Matt, the person who gave the testimonial' />;
      </div>
    </div>
    <div className='info'>
      <h3>{quote}</h3>
      <div className='bottom'>
        <div className='img'>
          <img src={`/people/${person}.png`} height={296} width={296} alt='Image of Matt, the person who gave the testimonial' />;
        </div>
        <p><b>{by}</b> {at}</p>
      </div>
    </div>
  </div>
);
