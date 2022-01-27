import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';

interface Props {
  link: string;
  open: boolean;
  active: boolean;
  children: React.ReactNode;
  handleOpen: VoidFunction;
  handleClose: VoidFunction;
}

export const HeaderDropdown: FC<Props> = ({ link, open, active, children, handleOpen, handleClose }) => (
  <div className='dropdown'>
    <Button className={classnames('link', { active, open })} onMouseEnter={handleOpen}>
      <span>{link}</span>
      <Icon name='arrow-drop-down-line' className='arrow' />
    </Button>

    {open && (
      <div className='header-dropdown' onMouseLeave={handleClose}>
        {children}
      </div>
    )}
  </div>
);
