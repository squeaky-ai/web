import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { uniq, without } from 'lodash';
import { useRouter } from 'next/router';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { SidebarAccount } from 'components/app/sidebar-account';
import { SidebarNested } from 'components/app/sidebar-nested';
import { Logo } from 'components/logo';
import { Breakpoints } from 'data/common/constants';
import { Preferences, Preference } from 'lib/preferences';
import { SidebarLogout } from 'components/app/sidebar-logout';
import { SidebarCollapse } from 'components/app/sidebar-collapse';

export const Sidebar: FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const router = useRouter();

  const [open, setOpen] = React.useState<boolean>(true);
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [position, setPosition] = React.useState<'left' | 'right'>('left');

  const path = router.asPath;
  const pathname = router.pathname;
  const siteId = router.query.site_id as string;
  const isMobile = () => window.innerWidth < Breakpoints.TABLET;

  const toggleOpen = () => {
    setOpen(!open);

    if (!isMobile()) {
      Preferences.setBoolean(Preference.SIDEBAR_CLOSED, open);
    }
  };

  const expand = (name: string) => {
    setExpanded(e => uniq([...e, name]));
  };

  const collapse = (name: string) => {
    setExpanded(e => without(e, name));
  };

  const setDefaultActive = (name: string, path: string) => {
    const active = pathname.startsWith(path);
    active ? expand(name) : collapse(name);
  };

  const closeIfMenuIsClosed = () => {
    // This is a hack to make sure the state
    // is not stale. The closure stores the value
    // when it's defined which is going to be wrong
    setOpen(open => {
      if (!open) setExpanded([]);
      return open;
    });
  };

  const onBodyClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      closeIfMenuIsClosed();
    }
  };

  React.useEffect(() => {
    setPosition(path.startsWith('/app/sites/') ? 'right' : 'left');

    if (isMobile()) {
      setOpen(false);
    }

    closeIfMenuIsClosed();

    setDefaultActive('feedback', '/app/sites/[site_id]/feedback');
    setDefaultActive('settings', '/app/sites/[site_id]/settings');
  }, [path]);

  React.useEffect(() => {
    const closed = Preferences.getBoolean(Preference.SIDEBAR_CLOSED) || isMobile();
    if (closed) setOpen(false);

    document.addEventListener('click', onBodyClick);

    return () => document.removeEventListener('click', onBodyClick, true);
  }, []);

  return (
    <aside ref={ref} id='app-sidebar' className={classnames({ open })}>
      <Link href='/app/sites'>
        <a className='logo large'>
          <Logo logo='main' alt='Logo' height={32} width={103} />
        </a>
      </Link>
      <Link href='/app/sites'>
        <a className='logo small'>
          <Logo logo='small' alt='Logo' height={32} width={24} />
        </a>
      </Link>
      <menu className={position}>
        <div className='slider'>
          <div className='nav left'>
            <Link href='/app/sites'>
              <a className={classnames('link', { active: path.startsWith('/app/sites') })} data-label='All Sites'>
                <Icon name='window-line' />
                <span>All Sites</span>
              </a>
            </Link>
          </div>
          <div className='nav right'>
            <Link href={`/app/sites/${siteId}/dashboard`}>
              <a className={classnames('link', { active: path.startsWith(`/app/sites/${siteId}/dashboard`) })} data-label='Dashboard'>
                <Icon name='dashboard-3-line' />
                <span>Dashboard</span>
              </a>
            </Link>
            <Divider />
            <Link href={`/app/sites/${siteId}/visitors`}>
              <a className={classnames('link', { active: path.startsWith(`/app/sites/${siteId}/visitors`) })} data-label='Visitors'>
                <Icon name='group-line' />
                <span>Visitors</span>
              </a>
            </Link>
            <Link href={`/app/sites/${siteId}/recordings`}>
              <a className={classnames('link', { active: path.startsWith(`/app/sites/${siteId}/recordings`) })} data-label='Recordings'>
                <Icon name='vidicon-line' />
                <span>Recordings</span>
              </a>
            </Link>
            <Divider />
            <Link href={`/app/sites/${siteId}/analytics`}>
              <a className={classnames('link', { active: path.startsWith(`/app/sites/${siteId}/analytics`) })} data-label='Analytics'>
                <Icon name='line-chart-line' />
                <span>Analytics</span>
              </a>
            </Link>
            <SidebarNested 
              name='Feedback'
              icon='user-voice-line'
              collapse={() => collapse('feedback')}
              expand={() => expand('feedback')}
              expanded={expanded.includes('feedback')}
            >
              <Link href={`/app/sites/${siteId}/feedback/nps`}>
                <a className={classnames('button', { active: path.startsWith(`/app/sites/${siteId}/feedback/nps`) })}>
                  NPS®
                </a>
              </Link>
              <Link href={`/app/sites/${siteId}/feedback/sentiment`}>
                <a className={classnames('button', { active: path.startsWith(`/app/sites/${siteId}/feedback/sentiment`) })}>
                  Sentiment
                </a>
              </Link>
            </SidebarNested>
            <Link href={`/app/sites/${siteId}/heatmaps`}>
              <a className={classnames('link', { active: path.startsWith(`/app/sites/${siteId}/heatmaps`) })} data-label='Heatmaps'>
                <Icon name='fire-line' />
                <span>Heatmaps</span>
              </a>
            </Link>
            <Divider />
            <SidebarNested 
              name='Settings'
              icon='settings-3-line'
              collapse={() => collapse('settings')}
              expand={() => expand('settings')}
              expanded={expanded.includes('settings')}
            >
              <Link href={`/app/sites/${siteId}/settings/details`}>
                <a className={classnames('button', { active: path.startsWith(`/app/sites/${siteId}/settings/details`) })}>
                  Site
                </a>
              </Link>
              <Link href={`/app/sites/${siteId}/settings/team`}>
                <a className={classnames('button', { active: path.startsWith(`/app/sites/${siteId}/settings/team`) })}>
                  Team
                </a>
              </Link>
              <Link href={`/app/sites/${siteId}/settings/subscription`}>
                <a className={classnames('button', { active: path.startsWith(`/app/sites/${siteId}/settings/subscription`) })} data-label='Subscription'>
                  Subscription
                </a>
              </Link>
            </SidebarNested>
          </div>
        </div>
      </menu>
      <Button className='menu-toggle' onClick={toggleOpen}>
        {open ? <Icon name='close-line' /> : <Icon name='menu-line' />}
      </Button>
      <div className='feedback'>
        <p>Send feedback to:</p>
        <a href='mailto:hello@squeaky.ai'>hello@squeaky.ai</a>
      </div>
      <footer>
        <SidebarAccount path={path} />
        <SidebarLogout />
        <SidebarCollapse open={open} toggleOpen={toggleOpen} />
      </footer>
    </aside>
  );
};
 