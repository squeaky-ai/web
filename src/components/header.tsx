import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Icon } from 'components/icon';
import { Logo } from 'components/logo';
import { Container } from 'components/container';
import { HeaderMenuLarge } from 'components/header-menu-large';
import { HeaderMenuSmall } from 'components/header-menu-small';
import { useRouter } from 'next/router';
import { throttle } from 'lib/utils';
import type { SubMenu } from 'types/common';
import type { BlogPost, User } from 'types/graphql';

interface Props {
  user: User;
  loading: boolean;
  latestBlogPost: BlogPost | null;
}

type ThemeOverrides = Record<string, 'blue' | 'mauve' | 'mauve-dark' | 'white'>;

const themeOverrides: ThemeOverrides = {
  '/use-cases/marketing-and-conversion': 'blue',
  '/use-cases/developers': 'blue',
  '/use-cases/customer-success': 'mauve',
  '/about-us': 'mauve',
  '/blog/[[...category]]': 'mauve',
  '/blog/[category]/[post]': 'white',
  '/programs/partners': 'mauve-dark',
  '/programs/startups': 'mauve-dark',
};

export const Header: FC<Props> = ({ user, loading, latestBlogPost }) => {
  const router = useRouter();

  const ref = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState<SubMenu>(null);

  const themeOverride = themeOverrides[router.route];
  const useLightLogo = ['blue', 'mauve', 'mauve-dark'].includes(themeOverride) && !scrolled && !subMenuOpen && !open;
  const isCurrentBlogPost = router.asPath.replace('/blog', '') === latestBlogPost?.slug;

  const handleOpen = (subMenu: SubMenu) => {
    return () => setSubMenuOpen(subMenu);
  };

  const handleScroll = throttle(() => {
    setScrolled(window.scrollY !== 0);
  }, 100);

  const handleClick = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (ref.current && !ref.current.contains(element)) {
      setSubMenuOpen(null);
    }
  };

  const handleMouseLeave = () => {
    setSubMenuOpen(null);
  };

  const truncate = (text: string, size: number) => {
    return text.length > size
      ? `${text.slice(0, size)}...`
      : text;
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setSubMenuOpen(null);
  }, [router.route]);

  return (
    <>
       <div className={classnames('header-strip', themeOverride)}>
        {!loading && (
          <Container className='lg centered'>
            {latestBlogPost && (
              <Link href={`/blog${latestBlogPost.slug}`} className={classnames('blog-link', { hidden: isCurrentBlogPost })}>
                <span>Latest Post</span>: {truncate(latestBlogPost.title, 60)} <Icon name='arrow-right-line' />
              </Link>
            )}
            {!latestBlogPost && <span />}
            <menu>
              <Link href='/contact-us'>
                <Icon name='mail-line' /> Contact us
              </Link>
              {user
                ? (
                  <a href='/app/sites'><Icon name='account-circle-line' /> Go to account</a>
                ) : (
                  <Link href='/auth/login'>
                    <Icon name='account-circle-line' /> Log in
                  </Link>
                )
              }
              
            </menu>
          </Container>
        )}
      </div>
      <div ref={ref} className={classnames('header', themeOverride, { scrolled, open, 'sub-menu-open': subMenuOpen })} onMouseLeave={handleMouseLeave}>
        <Container className='lg centered'>
          <Link href='/' className='logo'>
            <Logo logo={useLightLogo && !scrolled ? 'main' : 'dark'} height={40} width={130} />
          </Link>

          <HeaderMenuLarge
            user={user}
            subMenuOpen={subMenuOpen}
            handleOpen={handleOpen}
          />

          <HeaderMenuSmall
            user={user}
            open={open}
            setOpen={setOpen}
            subMenuOpen={subMenuOpen}
            handleOpen={handleOpen}
          />
        </Container>
      </div>
    </>
  );
};
