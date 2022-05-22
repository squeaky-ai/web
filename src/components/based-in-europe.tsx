import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Icon } from 'components/icon';

import eu from '../../public/eu.svg';
import euDark from '../../public/eu-dark.svg';

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
      <span className='flag'>
        <Image src={eu} width={28} height={20} alt='EU Flag' />
      </span>
      <span className='flag dark'>
        <Image src={euDark} width={28} height={20} alt='EU Flag' />
      </span>
      <p>Based in Europe <Icon name='heart-fill' /></p>
    </div>
  );
};
