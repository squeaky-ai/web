import { getBlogPosts, getBlogPost } from 'lib/api/blog';
import type { Posts } from 'types/blog';
import type { BlogPost, BlogPosts } from 'types/graphql';
import type { GetStaticPaths, GetStaticProps } from 'next';

export interface QueryPostsProps {
  blog: Posts;
}

export interface GetPostsProps {
  blog: { 
    post: BlogPost;
    posts: BlogPost[];
  };
}

export const getStaticBlogPaths = (async () => {
  const results = await getBlogPosts<BlogPosts>();

  return {
    paths: [
      {
        params: {
          category: [''],
        },
      },
      ...results.categories.map(category => ({
        params: {
          category: [category.toLowerCase().replace(/ /g, '-')]
        },
      })),
    ],
    fallback: false,
  }
}) satisfies GetStaticPaths;

export const getStaticPostPaths = (async () => {
  const { posts } = await getBlogPosts<BlogPosts>();


  return {
    paths: posts.map(p => {
      const [, category, post] = p.slug.split('/');

      return {
        params: { category, post },
      };
    }),
    fallback: false,
  };

}) satisfies GetStaticPaths; 

export const getStaticBlogProps = (async (context) => {
  const { posts, categories, tags } = await getBlogPosts<BlogPosts>();

  const selectedCategory = context.params.category?.[0]?.replace(/-/g, ' ') || '';

  return {
    props: {
      blog: {
        posts,
        post: null,
        categories,
        tags,
        selectedCategory,
      },
    },
  };
}) satisfies GetStaticProps<QueryPostsProps>;

export const getStaticPostProps = (async (context) => {
  const { blogPost, blogPosts } = await getBlogPost<{ 
    blogPost: BlogPost,
    blogPosts: BlogPosts,
  }>(`/${context.params.category}/${context.params.post}`)

  return {
    props: {
      blog: {
        post: blogPost,
        posts: blogPosts?.posts || [],
      },
    },
  };
}) satisfies GetStaticProps<GetPostsProps>;
