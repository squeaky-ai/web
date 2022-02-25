import { camelCase } from 'lodash';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
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

export const getUserFromContext = async (context: GetServerSidePropsContext) => {
  const { headers, cookies } = context.req;

  return cookies.session ? await getUser(headers.cookie) : null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromContext(context);

  return {
    props: { user }
  };
};
