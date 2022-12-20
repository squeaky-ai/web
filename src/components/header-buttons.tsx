import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { useResize } from 'hooks/use-resize';
import type { User } from 'types/graphql';

interface Props {
  user: User;
}

export const HeaderButtons: FC<Props> = ({ user }) => {
  const { desktop } = useResize();

  return (
    <>
      {user && (
        desktop
          ? (
            <>
              <Link href='/book-demo' className='button primary'>
                Book a demo
              </Link>
              <a href='/app/sites' className='button secondary auth'>
                Go To App
              </a>
            </>
          )
          : (
            <>
              <a href='/app/sites' className='button primary auth'>
                Go To App
              </a>
            </>
          )
      )}

      {!user && (
        <>
          <Link href='/auth/signup' className='button primary'>
            Get Started Free
          </Link>

          <Link href='/auth/login' className='button secondary auth'>
            Log In
          </Link>
        </>
      )}
    </>
  );
};
