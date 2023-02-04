import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from './button';
import { Icon } from './icon';

interface ParentProps {
  title: string;
  subtitle?: React.ReactNode;
  nav?: React.ReactNode;
}

interface ChildProps {
  children: React.ReactNode;
  tab: string;
}

export const PageTitle: FC<ParentProps> = ({ title, subtitle, nav }) => (
  <>
    <div className='page-title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    {nav}
  </>
);

export const PageTitleNav: FC<ChildProps> = ({ children, tab }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);

  React.useEffect(() => {
    setOpen(false);
  }, [tab]);

  return (
    <nav className={classnames('page-title-nav', { open })}>
      <Button className='link' onClick={toggleOpen}>
        Menu
        <Icon name='arrow-down-s-line' />
      </Button>
      <div className='menu'>
        {children}
      </div>
    </nav>
  );
};