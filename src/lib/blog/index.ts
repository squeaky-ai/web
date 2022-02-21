import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { uniq } from 'lodash';
import type { GetServerSideProps } from 'next';
import { ServerSideProps, getUserFromContext } from 'lib/auth';
import { getStringQueryParam, getArrayQueryParam } from 'lib/blog/helpers';
import type { Post, Posts } from 'types/blog';

export interface QueryPostsProps extends ServerSideProps {
  blog: Posts;
}

export interface GetPostsProps extends ServerSideProps {
  blog: { post: Post };
}

function resolveContentPath(p: string) {
  const root = __dirname.split('.next')[0];
  return path.join(root, 'content', p);
}

async function listPosts(): Promise<Post[]> {
  const path = resolveContentPath('posts');
  const files = await fs.readdir(path);

  return files.map(file => {
    const { data, content } = matter.read(resolveContentPath(`posts/${file}`));

    return { data, content } as Post;
  });
}

async function getFilteredPosts(tags: string[], category: string | null) {
  const all = await listPosts();

  return all.filter(post => {
    const conditions: boolean[] = [
      post.data.status !== 'draft',
    ];

    if (category) {
      conditions.push(post.data.category === category);
    }

    if (tags.length) {
      conditions.push(post.data.tags.some(t => tags.includes(t)));
    }

    return conditions.every(a => a);
  });
}

async function getPostBySlug(slug: string) {
  const all = await listPosts();

  return all.find(post => post.data.slug === slug);
}

export const queryPosts: GetServerSideProps = async (context) => {
  const { tags = [], category } = context.query;
  const user = await getUserFromContext(context);

  const selectedTags = getArrayQueryParam(tags);
  const selectedCategory = getStringQueryParam(category);

  const posts = await getFilteredPosts(
    selectedTags,
    selectedCategory,
  );

  return {
    props: {
      user,
      blog: {
        posts,
        selectedTags,
        selectedCategory,
        tags: uniq(posts.map(post => post.data.tags).flat()),
        categories:  uniq(posts.map(post => post.data.category)),
      },
    },
  };
};

export const getPost: GetServerSideProps = async (context) => {
  const user = await getUserFromContext(context);
  const post = await getPostBySlug(`/${context.query.category}/${context.query.post}`);

  return {
    props: {
      user,
      blog: { post },
    },
  }
};
