import React from 'react';
import type { FC } from 'react';

type PlatformType = 'wordpress' | 'shopify' | 'wix' | 'webflow' | 'magento' | 'drupal';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  platform: PlatformType;
}

export const Platform: FC<Props> = ({ platform, ...props }) => {
  return <img src={`/platforms/${platform}.png`} {...props} alt='Platform logo' />;
};
