import { gql, useQuery } from '@apollo/client';
import type { BlogPost, BlogPosts, User } from 'types/graphql';

interface UsePage {
  loading: boolean;
  error: boolean;
  user: User | null;
  latestBlogPost: BlogPost | null;
}

interface Response {
  user: User | null;
  blogPosts: BlogPosts
}

const QUERY = gql`
  query GetPage {
    user {
      id
      firstName
      lastName
      email
      superuser
      createdAt
    }
    blogPosts {
      posts {
        slug
        title
        updatedAt
      }
    }
  }
`;

const getLatestBlogPost = (data: Response): BlogPost | null => {
  try {
    if (!data) return null;

    const posts = data.blogPosts.posts;

    return [...posts].sort((a, b) => new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf())[0];
  } catch(error) {
    console.error(error);
    return null;
  }
};

export const usePage = (): UsePage => {
  const { data, error, loading } = useQuery<Response>(QUERY);

  return {
    loading,
    error: !!error,
    user: data?.user,
    latestBlogPost: getLatestBlogPost(data),
  };
};
