import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const FooterLinkGroup: FC<Props> = ({ title, children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className={classnames('group', { open })}>
      <Button onClick={() => setOpen(!open)}>
        {title}
        <Icon name='arrow-drop-down-line' className='arrow' />
      </Button>
      <div className='link-items'>
        {children}
      </div>
    </div>
  );
};
