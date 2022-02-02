import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  flip?: boolean;
  items: ExpandingDetailItem[];
}

interface ExpandingDetailItem {
  icon: string;
  title: string;
  body: string;
  image: React.ReactNode;
  shadowless?: boolean;
}

export const ExpandingDetails: FC<Props> = ({ flip, items }) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className={classnames('expanding-details', { flip })}>
      <div className='images'>
        {items.map((item, index) => (
          <div key={item.title} className={classnames('image', { show: index === active, shadowless: item.shadowless })}>
            {item.image}
          </div>
        ))}
      </div>

      <div className='items'>
        {items.map((item, index) => (
          <div key={item.title} className={classnames('item', { show: index === active })}>
            <div className={classnames('image', { shadowless: item.shadowless })}>
              {item.image}
            </div>
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
