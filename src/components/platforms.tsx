import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { Card } from 'components/card';
import { Platform } from 'components/platform';
import { Container } from 'components/container';

const { publicRuntimeConfig } = getConfig();

export const Platforms: FC = () => (
  <Container className='platforms centered lg'>
    <div>
      <h3>Compatible with the platforms you&apos;re already using</h3>
      <p>Whether you are using a CMS or you hand-coded your website or app from scratch, our installation guides will have you up and running in no time.</p>
      <Link href={publicRuntimeConfig.helpCenterTrackingCodeUrl} target='_blank' rel='noreferrer'>
        See Installation Guides
      </Link>
    </div>
    <Card>
      <div>
        <Platform platform='wordpress' height={64} width={64} />
      </div>
      <div>
        <Platform platform='shopify' height={64} width={64} />
      </div>
      <div>
        <Platform platform='wix' height={64} width={64} />
      </div>
      <div>
        <Platform platform='drupal' height={64} width={64} />
      </div>
      <div>
        <Platform platform='magento' height={64} width={64} />
      </div>
      <div>
        <Platform platform='webflow' height={64} width={64} />
      </div>
    </Card>
  </Container>
);
