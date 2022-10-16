
import getConfig from 'next/config';
import { getPartnerName, session } from 'lib/api/auth';
import type { User } from 'types/graphql';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export interface ServerSideProps {
  user: User | null;
}

const { publicRuntimeConfig } = getConfig();

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

export const getSignupPartnerData: GetServerSideProps = async (context) => {
  const slug = context.resolvedUrl === '/auth/signup'
    ? null
    : context.resolvedUrl.replace('/auth/signup/', '');

  if (slug) {
    const partnerName = await getPartnerName(slug);

    // Someone has tried a partner page that does not exist
    // so redirect them to the regular signup page
    if (!partnerName) {
      return {
        redirect: {
          destination: `${publicRuntimeConfig.webHost}/auth/signup`,
          permanent: false,
        },
      };
    }

    return { props: { partner: true, partnerName } };
  }

  // It's not a partner page, move along
  return { props: { partner: false } };
};
