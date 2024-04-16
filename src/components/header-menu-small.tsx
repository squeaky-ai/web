import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import getConfig from 'next/config';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { HeaderButtons } from 'components/header-buttons';
import { HeaderMenuSmallDrawer } from 'components/header-menu-small-drawer';
import { BasedInEurope } from 'components/based-in-europe';
import type { User } from 'types/graphql';
import type { SubMenu } from 'types/common';

const { publicRuntimeConfig } = getConfig();

interface Props {
  user: User;
  open: boolean;
  subMenuOpen: SubMenu;
  setOpen: (open: boolean) => void;
  handleOpen: (subMenu: SubMenu) => VoidFunction;
}

export const HeaderMenuSmall: FC<Props> = ({ user, open, subMenuOpen, setOpen, handleOpen }) => {

  const toggleSubMenuOpen = (subMenu: SubMenu) => handleOpen(subMenuOpen === subMenu ? null : subMenu);

  return (
    <menu className={classnames('small', { user })}>
      <HeaderButtons user={user} />
      <Button className='hamburger' onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close-line' : 'menu-line'} />
      </Button>

      {open && (
        <div className='menu-drawer'>
          <HeaderMenuSmallDrawer title='Product' open={subMenuOpen === 'product'} toggleOpen={toggleSubMenuOpen('product')}>
            <Link href='/product/analytics'>
              Analytics
            </Link>
            <Link href='/product/event-tracking'>
              Event tracking
            </Link>
            <Link href='/product/recordings'>
              Recordings
            </Link>
            <Link href='/product/heatmaps'>
              Heatmaps
            </Link> 
            <Link href='/product/feedback'>
              Feedback
            </Link>
            <Link href='/product/journeys'>
              Journeys
            </Link> 
          </HeaderMenuSmallDrawer>
          <HeaderMenuSmallDrawer title='Use Cases' open={subMenuOpen === 'use-cases'} toggleOpen={toggleSubMenuOpen('use-cases')}>
            <Link href='/use-cases/product-and-ux'>
              Product &amp; UX
            </Link>
            <Link href='/use-cases/marketing-and-conversion'>
              Marketing &amp; Conversion
            </Link>
            <Link href='/use-cases/customer-success'>
              Customer Success
            </Link>
            <Link href='/use-cases/developers'>
              Developers
            </Link>
          </HeaderMenuSmallDrawer>
          <div className='header-drawer-item'>
            <Link href='/privacy' className='button'>
              Privacy
            </Link>
          </div>
          <div className='header-drawer-item'>
            <Link href='/blog/company-news/a-very-important-announcement-from-squeaky/' className='button'>
              Pricing
            </Link>
          </div>
          <HeaderMenuSmallDrawer title='More' open={subMenuOpen === 'more'} toggleOpen={toggleSubMenuOpen('more')}>
            <Link href='/about-us'>
              About us
            </Link>
            <Link href='/blog'>
              Blog
            </Link>
            <Link href={publicRuntimeConfig.helpCenterUrl} target='_blank' rel='noreferrer'>
              Help centre
            </Link>
            <Link href='/contact-us'>
              Contact us
            </Link>
            <Link href='/book-demo'>
              Book demo
            </Link>
          </HeaderMenuSmallDrawer>
          <div className='actions'>
            <HeaderButtons user={user} />
          </div>
          <div className='social'>
            <Link href='https://twitter.com/squeakyai' aria-label='Twitter' target='_blank' rel='noreferrer'>
              <Icon name='twitter-fill' />
            </Link>
            <Link href='https://www.facebook.com/SqueakyAI' aria-label='Facebook' target='_blank' rel='noreferrer'>
              <Icon name='facebook-fill' />
            </Link>
            <Link href='https://www.linkedin.com/company/squeakyai' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
              <Icon name='linkedin-fill' />
            </Link>
          </div>

          <BasedInEurope />
        </div>
      )}
    </menu>
  );
};
