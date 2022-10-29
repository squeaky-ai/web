import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

interface Props {
  image: React.ReactNode;
  title: string;
  subtitle?: string;
  body: React.ReactNode;
  linkHref?: string;
  linkText?: string;
  flip?: boolean;
  buttonType?: 'primary' | 'secondary' | 'secondary-marine';
}

export const SideBySide: FC<Props> = ({ title, subtitle, body, linkHref, linkText, image, flip, buttonType }) => (
  <div className={classnames('side-by-side', { flip })}>
    <div className='image'>
      {subtitle ? <h6>{subtitle}</h6> : null}
      {image}
    </div>
    <div className='content'>
      {subtitle ? <h6>{subtitle}</h6> : null}
      <h3>{title}</h3>
      {body}
      {linkHref && linkText && (
        <div className={classnames('link', { hidden: !linkText })}>
          <Link href={linkHref}>
            <a className={`button ${buttonType || 'primary'}`}>
              {linkText}
            </a>
          </Link>
        </div>
      )}
    </div>
  </div>
);
