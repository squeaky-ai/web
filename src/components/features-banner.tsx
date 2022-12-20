import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';

export const FeaturesBanner: FC = () => (
  <div className='features-banner'>
    <p>There&apos;s plenty more great features across our platform</p>
    <Link href='/features' className='button primary'>
      All Squeaky Features
    </Link>
  </div>
);
