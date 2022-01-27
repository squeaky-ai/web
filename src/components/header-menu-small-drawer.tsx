import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  title: string;
  children: React.ReactNode;
  open: boolean;
  toggleOpen: VoidFunction;
}

export const HeaderMenuSmallDrawer: FC<Props> = ({ title, open, children, toggleOpen }) => (
  <div className={classnames('header-drawer-item', { open })}>
    <Button onClick={toggleOpen}>
      {title}
      <Icon name='arrow-drop-down-line' className='arrow' />
    </Button>

    {open && (
      <div className='links'>
        {children}
      </div>
    )}
  </div>
);
