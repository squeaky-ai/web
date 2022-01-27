import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  title: string;
  body: React.ReactNode; 
}

export const Accordion: FC<Props> = ({ title, body }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className={classnames('accordion', { open })}>
      <Button className='heading' onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <Icon name={open ? 'subtract-line' : 'add-line'} />
      </Button>
      <div className='body'>
        {body}
      </div>
    </div>
  );
};
