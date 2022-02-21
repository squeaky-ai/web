import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { uniq } from 'lodash';
import type { GetServerSideProps } from 'next';
import type { Post, Posts } from 'types/blog';

export type QueryPostsProps = Posts;

function resolveContentPath(p: string) {
  return path.join(__dirname, '..', '..', '..', 'content', p);
}

function getStringQueryParam(param: string | string[]): string | null {
  if (!param) return null;

  return Array.isArray(param) ? param.join('') : param;
}

function getArrayQueryParam(param: string | string[]): string[] {
  if (!param) return [];

  return Array.isArray(param) ? param : [param]
}

async function listPosts(): Promise<Post[]> {
  const path = resolveContentPath('posts');
  const files = await fs.readdir(path);

  return files.map(file => {
    const { data, content } = matter.read(resolveContentPath(`posts/${file}`));

    return { data, content } as Post;
  });
}

async function getFilteredPosts(category: string | null, tags: string[]) {
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

export const queryPosts: GetServerSideProps = async (context) => {
  const { tags = [], category } = context.query;

  const posts = await getFilteredPosts(
    getStringQueryParam(category), 
    getArrayQueryParam(tags),
  );

  return {
    props: {
      posts,
      tags: uniq(posts.map(post => post.data.tags).flat()),
      categories:  uniq(posts.map(post => post.data.category)),
    }
  };
};
