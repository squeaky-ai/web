import { gql, useQuery } from '@apollo/client';
import type { BlogPost, BlogPosts } from 'types/graphql';

interface UsePage {
  loading: boolean;
  error: boolean;
  blogPosts: BlogPost[];
}

interface Response {
  blogPosts: BlogPosts
}

const QUERY = gql`
  query GetBlogPosts {
    blogPosts {
      posts {
        id
        slug
        title
        metaImage
        updatedAt
      }
    }
  }
`;

export const useBlogPosts = (): UsePage => {
  const { data, error, loading } = useQuery<Response>(QUERY);

  return {
    loading,
    error: !!error,
    blogPosts: data?.blogPosts?.posts || [],
  };
};
