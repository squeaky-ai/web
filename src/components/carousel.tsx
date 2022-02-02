import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { debounce } from 'lodash';
import { range } from 'lodash';
import { Button } from 'components/button';

interface Props {
  children: React.ReactNode;
}

let timer: NodeJS.Timeout;

export const Carousel: FC<Props> = ({ children }) => {
  const [index, setIndex] = React.useState<number>(0);

  let initialSwipeX: number = null;

  const count = React.Children.count(children);

  const auto = () => setTimeout(() => {
    setIndex(index => index === (count -1) ? 0 : index + 1);
    auto();
  }, 5000);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    initialSwipeX = event.touches[0].clientX;
  };
  
  const onTouchMove = debounce((event: React.TouchEvent<HTMLDivElement>) => {
    if (initialSwipeX === null) {
      return;
    }

    const currentSwipeX = event.touches[0].clientX;
    const diffX = initialSwipeX - currentSwipeX;

    setIndex(index => diffX > 0 ? index + 1 : index - 1);

    initialSwipeX = null;
  }, 100);

  React.useEffect(() => {
    clearTimeout(timer);

    timer = auto();

    return () => {
      clearTimeout(timer);
      timer = null;
    }
  }, []);

  return (
    <div className='carousel' onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <div className='slide' style={{ transform: `translateX(-${index * 100}%)` }}>
        {children}
      </div>
      <div className='indicator'>
        {range(0, count).map(i => (
          <Button 
            key={i}
            onClick={() => setIndex(i)} 
            className={classnames({ active: i === index })}
            aria-label={`Carousel position ${i}`}
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
