import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { throttle } from 'lodash';
import { Logo } from 'components/logo';
import { Container } from 'components/container';
import { HeaderMenuLarge } from 'components/header-menu-large';
import { HeaderMenuSmall } from 'components/header-menu-small';
import { useUser } from 'hooks/use-user';
import { useRouter } from 'next/router';
import type { SubMenu } from 'types/common';

type ThemeOverrides = Record<string, 'blue' | 'mauve'>;

const themeOverrides: ThemeOverrides = {
  '/use-cases/marketing-and-conversion': 'blue',
  '/use-cases/customer-success': 'mauve',
};

export const Header: FC = () => {
  const router = useRouter();

  const { user } = useUser();

  const [open, setOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState<SubMenu>(null);

  const themeOverride = themeOverrides[router.route];
  const useLightLogo = ['blue', 'mauve'].includes(themeOverride) && !scrolled && !subMenuOpen;

  const toggleSubMenuOpen = (subMenu: SubMenu) => {
    return () => {
      setSubMenuOpen(subMenuOpen => subMenuOpen === subMenu ? null : subMenu);
    };
  };

  const handleScroll = throttle(() => {
    setScrolled(window.scrollY !== 0);
  }, 100);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setSubMenuOpen(null);
  }, [router.route]);

  return (
    <div className={classnames('header', themeOverride, { scrolled, open, 'sub-menu-open': subMenuOpen })}>
      <Container className='lg centered'>
        <Link href='/'>
          <a className='logo'>
            <Logo logo={useLightLogo && !scrolled ? 'main' : 'dark'} height={40} width={130} />
          </a>
        </Link>

        <HeaderMenuLarge
          user={user}
          subMenuOpen={subMenuOpen}
          toggleSubMenuOpen={toggleSubMenuOpen}
        />

        <HeaderMenuSmall
          user={user}
          open={open}
          setOpen={setOpen}
          subMenuOpen={subMenuOpen}
          toggleSubMenuOpen={toggleSubMenuOpen}
        />
      </Container>
    </div>
  );
};
