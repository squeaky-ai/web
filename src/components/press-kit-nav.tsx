import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { PageTitleNav } from 'components/page-title';
import { debounce } from 'lib/utils';

type Tab = 'name' | 'logo' | 'colors' | 'screenshots' | 'contact';

type Tabs = { name: string; tab: Tab }[];

const tabs: Tabs = [
  {
    name: 'Our name',
    tab: 'name',
  },
  {
    name: 'The Squeaky logo',
    tab: 'logo',
  },
  {
    name: 'Brand colours',
    tab: 'colors',
  },
  {
    name: 'Product screenshots',
    tab: 'screenshots',
  },
  {
    name: 'Contact details',
    tab: 'contact',
  },
];

export const PressKitNav: FC = () => {
  const [tab, setTab] = React.useState<Tab>('name');

  const handleTabClick = (tab: Tab) => () => {
    setTab(tab);

    const section = document.getElementById(tab);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = debounce(() => {
    const scroll = window.scrollY;

    const match = [...tabs].reverse().find(t => {
      const element = document.getElementById(t.tab);
      return element?.offsetTop <= scroll;
    });

    setTab(match?.tab || 'name');
  }, 50);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <PageTitleNav>
      {tabs.map(t => (
        <Link key={t.tab} href={`#${t.tab}`} className={classnames('item', { active: t.tab === tab })} onClick={handleTabClick(t.tab)}>
          {t.name}
        </Link>
      ))}
    </PageTitleNav>
  );
};
