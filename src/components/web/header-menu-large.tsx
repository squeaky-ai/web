import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { HeaderDropdown } from 'components/web/header-dropdown';
import { HeaderMenu } from 'components/web/header-menu';
import { HeaderUseCases } from 'components/web/header-use-cases';
import { HeaderProduct } from 'components/web/header-product';
import { HeaderButtons } from 'components/web/header-buttons';
import type { User } from 'types/graphql';
import type { SubMenu } from 'types/common';

const { publicRuntimeConfig } = getConfig();

interface Props {
  user: User;
  subMenuOpen: SubMenu;
  toggleSubMenuOpen: (subMenu: SubMenu) => VoidFunction;
}

export const HeaderMenuLarge: FC<Props> = ({ subMenuOpen, user, toggleSubMenuOpen }) => {
  const router = useRouter();

  return (
    <menu className='large'>
      <HeaderMenu link='Use Cases' active={router.route.startsWith('/use-cases')} open={subMenuOpen === 'use-cases'} toggleOpen={toggleSubMenuOpen('use-cases')}>
        <HeaderUseCases />
      </HeaderMenu>

      <HeaderMenu link='Product' active={false} open={subMenuOpen === 'product'} toggleOpen={toggleSubMenuOpen('product')}>
        <HeaderProduct />
      </HeaderMenu>

      <Link href='/pricing'>
        <a className={classnames('link', { active: router.route === '/pricing' })}>
          <span>Pricing</span>
        </a>
      </Link>

      <HeaderDropdown link='More' active={false} open={subMenuOpen === 'more'} toggleOpen={toggleSubMenuOpen('more')}>
        <Link href='/about-us'>
          <a className='button'>
            About Us
          </a>
        </Link>
        <Link href={publicRuntimeConfig.helpCenterUrl}>
          <a target='_blank' rel='noreferrer' className='button'>
            Help centre
          </a>
        </Link>
        <Link href='/legal/privacy-policy'>
          <a className='button'>
            Privacy &amp; security
          </a>
        </Link>
        <Link href='/contact-us'>
          <a className='button'>
            Contact Us
          </a>
        </Link>

        <Link href='/book-demo'>
          <a className='button tertiary-web'>
            Book Demo
          </a>
        </Link>
      </HeaderDropdown>

      <HeaderButtons user={user} />
    </menu>
  );
};
