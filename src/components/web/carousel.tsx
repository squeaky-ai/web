import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { range } from 'lodash';
import { Button } from 'components/button';

interface Props {
  children: React.ReactNode;
}

let timer: NodeJS.Timeout;

export const Carousel: FC<Props> = ({ children }) => {
  const [index, setIndex] = React.useState<number>(0);

  const count = React.Children.count(children);

  const auto = () => setTimeout(() => {
    setIndex(index => index === (count -1) ? 0 : index + 1);
    auto();
  }, 5000);

  React.useEffect(() => {
    timer = auto();

    return () => {
      clearTimeout(timer);
      timer = null;
    }
  }, []);

  return (
    <div className='carousel'>
      <div className='slide' style={{ transform: `translateX(-${index * 100}%)` }}>
        {children}
      </div>
      <div className='indicator'>
        {range(0, count).map(i => (
          <Button 
            key={i}
            onClick={() => setIndex(i)} 
            className={classnames({ active: i === index })} 
          />
        ))}
      </div>
    </div>
  );
};

export const CarouselItem: FC<Props> = ({ children }) => (
  <div className='item'>
    {children}
  </div>
);
