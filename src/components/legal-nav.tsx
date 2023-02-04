import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { PageTitleNav } from 'components/page-title';

type Tab = 'terms-of-service' | 'privacy-policy' | 'gdpr' | 'ccpa' | 'security';

type Tabs = { name: string; tab: Tab }[];

const tabs: Tabs = [
  {
    name: 'Terms Of Service',
    tab: 'terms-of-service',
  },
  {
    name: 'Privacy Policy',
    tab: 'privacy-policy',
  },
  {
    name: 'GDPR',
    tab: 'gdpr',
  },
  {
    name: 'CCPA',
    tab: 'ccpa',
  },
  {
    name: 'Security',
    tab: 'security',
  },
];

interface Props {
  page: Tab;
}

export const LegalNav: FC<Props> = ({ page }) => (
  <PageTitleNav tab={page}>
    {tabs.map(tab => (
      <Link key={tab.tab} href={`/legal/${tab.tab}`} className={classnames('item', { active: tab.tab === page })}>
        {tab.name}
      </Link>
    ))}
  </PageTitleNav>
);
