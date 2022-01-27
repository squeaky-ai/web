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
  toggleOpen: VoidFunction;
}

export const HeaderDropdown: FC<Props> = ({ link, open, active, children, toggleOpen }) => (
  <div className='dropdown'>
    <Button className={classnames('link', { active, open })} onClick={toggleOpen}>
      <span>{link}</span>
      <Icon name='arrow-drop-down-line' className='arrow' />
    </Button>

    {open && (
      <div className='header-dropdown'>
        {children}
      </div>
    )}
  </div>
);
