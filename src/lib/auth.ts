import { camelCase } from 'lodash';
import type { GetServerSideProps } from 'next';
import { session } from 'lib/api/auth';
import type { User } from 'types/graphql';

export interface ServerSideProps {
  user: User | null;
}

const getUser = async (cookie: string): Promise<User | null> => {
  const user = await session(cookie);
  if (!user) return null;

  return Object.entries(user).reduce((acc, [k, v]) => {
    const key = camelCase(k) as keyof User;
    return { ...acc, [key]: v };
  }, {} as User);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { headers, cookies } = context.req;

  const user = cookies.session ? await getUser(headers.cookie) : null;

  return {
    props: { user }
  };
};
