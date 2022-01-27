import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { HeaderButtons } from 'components/header-buttons';
import { HeaderMenuSmallDrawer } from 'components/header-menu-small-drawer';
import type { User } from 'types/graphql';
import type { SubMenu } from 'types/common';

const { publicRuntimeConfig } = getConfig();

interface Props {
  user: User;
  open: boolean;
  subMenuOpen: SubMenu;
  setOpen: (open: boolean) => void;
  toggleSubMenuOpen: (subMenu: SubMenu) => VoidFunction;
}

export const HeaderMenuSmall: FC<Props> = ({ user, open, subMenuOpen, setOpen, toggleSubMenuOpen }) => {

  return (
    <menu className='small'>
      <HeaderButtons user={user} />
      <Button className='hamburger' onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close-line' : 'menu-line'} />
      </Button>

      {open && (
        <div className='menu-drawer'>
          <HeaderMenuSmallDrawer title='Use Cases' open={subMenuOpen === 'use-cases'} toggleOpen={toggleSubMenuOpen('use-cases')}>
            <Link href='/use-cases/product-and-ux'>
              <a>Product &amp; UX</a>
            </Link>
            <Link href='/use-cases/marketing-and-conversion'>
              <a>Marketing &amp; Conversion</a>
            </Link>
            <Link href='/use-cases/customer-success'>
              <a>Customer Success</a>
            </Link>
          </HeaderMenuSmallDrawer>
          <HeaderMenuSmallDrawer title='Product' open={subMenuOpen === 'product'} toggleOpen={toggleSubMenuOpen('product')}>
            <Link href='/product/recordings'>
              <a>Recordings</a>
            </Link>
            <Link href='/product/analytics'>
              <a>Analytics</a>
            </Link>
            <Link href='/product/feedback'>
              <a>Feedback</a>
            </Link>
            <Link href='/product/heatmaps'>
              <a>Heatmaps</a>
            </Link> 
          </HeaderMenuSmallDrawer>
          <div className='header-drawer-item'>
            <Link href='/pricing'>
              <a className='button'>
                Pricing
              </a>
            </Link>
          </div>
          <HeaderMenuSmallDrawer title='More' open={subMenuOpen === 'more'} toggleOpen={toggleSubMenuOpen('more')}>
            <Link href='/about-us'>
              <a>About us</a>
            </Link>
            <Link href={publicRuntimeConfig.helpCenterUrl}>
              <a target='_blank' rel='noreferrer'>Help centre</a>
            </Link>
            <Link href='/legal/privacy-policy'>
              <a>Privacy &amp; security</a>
            </Link>
            <Link href='/contact-us'>
              <a>Contact us</a>
            </Link>
            <Link href='/book-demo'>
              <a>Book demo</a>
            </Link>
          </HeaderMenuSmallDrawer>
          <div className='actions'>
            <HeaderButtons user={user} />
          </div>
          <div className='social'>
            <Link href='#'>
              <a>
                <Icon name='twitter-fill' />
              </a>
            </Link>
            <Link href='#'>
              <a>
                <Icon name='facebook-fill' />
              </a>
            </Link>
            <Link href='#'>
              <a>
                <Icon name='linkedin-fill' />
              </a>
            </Link>
          </div>
        </div>
      )}
    </menu>
  );
};
