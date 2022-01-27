import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import type { User } from 'types/graphql';

interface Props {
  user: User;
}

export const HeaderButtons: FC<Props> = ({ user }) => (
  <>
    {user && (
      <Link href='/app/sites'>
        <a className='button primary'>
          Go To App
        </a>
      </Link>
    )}

    {!user && (
      <>
        <Link href='/auth/signup'>
          <a className='button primary'>
            Get Started Free
          </a>
        </Link>

        <Link href='/auth/signup'>
          <a className='button secondary'>
            Log In
          </a>
        </Link>
      </>
    )}
  </>
);
