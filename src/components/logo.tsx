import React from 'react';
import type { FC } from 'react';

type Logo = 'main' | 'small' | 'dark';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  logo: Logo;
}

export const Logo: FC<Props> = ({ logo, ...props }) => {
  return <img src={`/logo${logo === 'main' ? '' : `-${logo}`}.svg`} {...props} alt='Squeaky logo' />;
};
