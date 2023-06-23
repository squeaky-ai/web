import { ServerSideProps, getUserFromContext } from 'lib/auth';
import { getChangelogPosts, getChangelogPost } from 'lib/api/changelog';
import type { GetServerSideProps } from 'next';
import type { ChangelogPost } from 'types/graphql';

export interface GetPostsProps extends ServerSideProps {
  changelog: ChangelogPost[];
}

export interface GetPostProps extends ServerSideProps {
  changelog: ChangelogPost | null;
}


export const queryPosts: GetServerSideProps = async (context) => {
  const { headers } = context.req;

  const user = await getUserFromContext(context);

  const changelog = await getChangelogPosts<ChangelogPost[]>(headers.cookie);

  return {
    props: {
      user,
      changelog,
    },
  };
};

export const getPost: GetServerSideProps = async (context) => {
  const { headers } = context.req;

  const user = await getUserFromContext(context);

  const changelog = await getChangelogPost<ChangelogPost | null>(
    headers.cookie,
    `/${context.query.post}`,
  );

  return {
    props: {
      user,
      changelog,
    },
    // This will trigger the proper 404 page so we don't need
    // to faff around with status codes or rendering anything
    // special on the /posts/... page
    notFound: !changelog,
  }
};
