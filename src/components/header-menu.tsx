import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { Container } from 'components/container';

interface Props {
  link: string;
  open: boolean;
  active: boolean;
  children: React.ReactNode;
  handleOpen: VoidFunction;
}

export const HeaderMenu: FC<Props> = ({ link, open, active, children, handleOpen }) => {
  return (
    <>
      <Button className={classnames('link menu', { active, open })} onMouseEnter={handleOpen}>
        <span>{link}</span>
        <Icon name='arrow-drop-down-line' className='arrow' />
      </Button>

      {open && (
        <div className='header-menu'>
          <Container className='lg centered'>
            {children}
          </Container>
        </div>
      )}
    </>
  );
};
