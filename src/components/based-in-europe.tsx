import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Icon } from 'components/icon';

import eu from '../../public/eu.svg';

export const BasedInEurope: FC = () => {
  const show = (() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return tz.includes('Europe');
    } catch {
      return false;
    }
  })();

  if (!show) return null;

  return (
    <div className='based-in-europe'>
      <Image src={eu} width={28} height={20} alt='EU Flag' />
      <p>Based in Europe <Icon name='heart-fill' /></p>
    </div>
  );
};
