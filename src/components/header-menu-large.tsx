import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { HeaderDropdown } from 'components/header-dropdown';
import { HeaderMenu } from 'components/header-menu';
import { HeaderUseCases } from 'components/header-use-cases';
import { HeaderProduct } from 'components/header-product';
import { HeaderButtons } from 'components/header-buttons';
import { BasedInEurope } from 'components/based-in-europe';
import type { User } from 'types/graphql';
import type { SubMenu } from 'types/common';

const { publicRuntimeConfig } = getConfig();

interface Props {
  user: User;
  subMenuOpen: SubMenu;
  handleOpen: (subMenu: SubMenu) => VoidFunction;
}

export const HeaderMenuLarge: FC<Props> = ({ subMenuOpen, user, handleOpen }) => {
  const router = useRouter();

  const handleClose = () => handleOpen(null)();

  return (
    <menu className='large'>
      <HeaderMenu link='Product' active={false} open={subMenuOpen === 'product'} handleOpen={handleOpen('product')}>
        <HeaderProduct />
      </HeaderMenu>

      <HeaderMenu link='Use Cases' active={router.route.startsWith('/use-cases')} open={subMenuOpen === 'use-cases'} handleOpen={handleOpen('use-cases')}>
        <HeaderUseCases />
      </HeaderMenu>

      <Link href='/privacy' className={classnames('link', { active: router.route === '/privacy' })}>
        <span>Privacy</span>
      </Link>

      <Link href='/blog/company-news/a-very-important-announcement-from-squeaky/' className={classnames('link', { active: router.route === '/pricing' })}>
        <span>Pricing</span>
      </Link>

      <HeaderDropdown link='More' active={false} open={subMenuOpen === 'more'} handleOpen={handleOpen('more')} handleClose={handleClose}>
        <Link href='/about-us' className='button'>
          About Us
        </Link>
        <Link href='/blog' className='button'>
          Blog
        </Link>
        <Link href={publicRuntimeConfig.helpCenterUrl} target='_blank' rel='noreferrer' className='button'>
          Help centre
        </Link>
        <Link href='/contact-us' className='button'>
          Contact Us
        </Link>

        <Link href='/book-demo' className='button tertiary'>
          Book Demo
        </Link>
      </HeaderDropdown>

      <HeaderButtons user={user} />

      <BasedInEurope />
    </menu>
  );
};
