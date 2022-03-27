import { ServerSideProps, getUserFromContext } from 'lib/auth';
import { getTagsFromQueryParam, getCategoryFromPathParam } from 'lib/blog/helpers';
import { getBlogPosts, getBlogPost } from 'lib/api/blog';
import type { Posts } from 'types/blog';
import type { GetServerSideProps } from 'next';
import type { BlogPost, BlogPosts } from 'types/graphql';

export interface QueryPostsProps extends ServerSideProps {
  blog: Posts;
}

export interface GetPostsProps extends ServerSideProps {
  blog: { post: BlogPost };
}

export const queryPosts: GetServerSideProps = async (context) => {
  const { headers } = context.req;
  const { tags = [], category } = context.query;

  const user = await getUserFromContext(context);
  
  // Query params will either be:
  // - a string if there's one: ?foo=bar => { foo: 'bar' }
  // - an array of strings if there's more than one: ?foo=bar&foo=baz { foo: ['bar', 'baz'] }
  const selectedTags = getTagsFromQueryParam(tags);
  const selectedCategory = getCategoryFromPathParam(category);

  const results = await getBlogPosts<BlogPosts>(headers.cookie, selectedCategory, selectedTags);

  return {
    props: {
      user,
      blog: {
        posts: results.posts,
        // include the tags that were used in the filtering process
        // so that the front end can display which are currently
        // applied in the UI
        selectedTags,
        selectedCategory,
        tags: results.tags,
        categories: results.categories,
      },
    },
  };
};

export const getPost: GetServerSideProps = async (context) => {
  const { headers } = context.req;

  const user = await getUserFromContext(context);
  const post = await getBlogPost<BlogPost>(headers.cookie, `/${context.query.category}/${context.query.post}`)

  return {
    props: {
      user,
      blog: { post },
    },
    // This will trigger the proper 404 page so we don't need
    // to faff around with status codes or rendering anything
    // special on the /posts/... page
    notFound: !post,
  }
};
