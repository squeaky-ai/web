import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  items: ExpandingDetailItem[];
}

interface ExpandingDetailItem {
  icon: string;
  title: string;
  body: string;
  image: React.ReactNode;
}

export const ExpandingDetails: FC<Props> = ({ items }) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className='expanding-details'>
      <div className='images'>
        {items.map((item, index) => (
          <div key={item.title} className={classnames('image', { show: index === active })}>
            {item.image}
          </div>
        ))}
      </div>

      <div className='items'>
        {items.map((item, index) => (
          <div key={item.title} className={classnames('item', { show: index === active })}>
            <Button onClick={() => setActive(index)}>
              <Icon name={item.icon} />
              <span>{item.title}</span>
              <Icon name={index === active ? 'subtract-line' : 'add-line'} />
            </Button>
            <div className='body'>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
