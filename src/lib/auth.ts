import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { session } from 'lib/api/auth';
import type { User } from 'types/graphql';

export interface ServerSideProps {
  user: User | null;
}

export const getUserFromContext = async (context: GetServerSidePropsContext): Promise<User | null> => {
  const { headers, cookies } = context.req;

  return cookies.session ? await session(headers.cookie) : null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromContext(context);

  return {
    props: { user }
  };
};
