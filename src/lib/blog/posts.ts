import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import markdown from 'markdown-it';
import { uniq } from 'lodash';
import { ServerSideProps, getUserFromContext } from 'lib/auth';
import { getTagsFromQueryParam, getCategoryFromPathParam } from 'lib/blog/helpers';
import type { Post, Posts } from 'types/blog';
import type { GetServerSideProps } from 'next';

let postsCache: Post[] = [];

export interface QueryPostsProps extends ServerSideProps {
  blog: Posts;
}

export interface GetPostsProps extends ServerSideProps {
  blog: { post: Post };
}

function resolveContentPath(p: string) {
  // I wonder how long this lasts before it's an issue
  const root = __dirname.split('.next')[0];
  return path.join(root, 'content', p);
}

async function listPosts(): Promise<Post[]> {
  if (postsCache.length) {
    // There's no need to do scan the files and parse
    // the markup on every request so we can cache it
    // for the life of the server. If this grows or 
    // starts to include image data it should go in redis
    return postsCache;
  }

  const path = resolveContentPath('posts');
  const files = await fs.readdir(path);

  const posts = files
    .filter(file => {
      return file.endsWith('.md');
    })
    .map(file => {
      const { data, content } = matter.read(resolveContentPath(`posts/${file}`));

      return {
        data,
        text: content.replaceAll('\n', ' ').replace(/[^a-zA-Z0-9\. ]/g, ''),
        html: markdown().render(content),
      } as Post;
    })
    .sort((a, b) => {
      // Sort by date descending. The dates are strings
      // because nextjs JSON serializes it when it passes
      // it as props
      return new Date(a.data.date).valueOf() - new Date(b.data.date).valueOf();
    });

  postsCache = posts;

  return posts;
}

async function filterPosts(posts: Post[], tags: string[], category: string | null, superuser: boolean) {
  return posts.filter(post => {
    const conditions: boolean[] = [];

    if (!superuser) {
      // Superusers can see draft posts but regular
      // users can't
      conditions.push(!post.data.draft);
    }

    if (category) {
      // If the category is in the query params it must
      // match the post categories exactly 
      conditions.push(post.data.category.toLowerCase() === category);
    }

    if (tags.length) {
      // Posts can have multiple tags, if any of them match
      // any of the ones in the query params then we show it
      conditions.push(post.data.tags.some(t => tags.includes(t)));
    }

    return conditions.every(a => a);
  });
}

async function getPostBySlug(slug: string, superuser: boolean) {
  // This isn't ideal, but it's cached so who cares
  const all = await listPosts();

  const post = all.find(post => post.data.slug === slug);

  if (!post) {
    return null;
  }

  if (post.data.draft && !superuser) {
    // Superusers can see draft posts but regular users can't
    return null;
  }

  return post;
}

export const queryPosts: GetServerSideProps = async (context) => {
  const { tags = [], category } = context.query;

  const all = await listPosts();
  const user = await getUserFromContext(context);
  
  // Query params will either be:
  // - a string if there's one: ?foo=bar => { foo: 'bar' }
  // - an array of strings if there's more than one: ?foo=bar&foo=baz { foo: ['bar', 'baz'] }
  const selectedTags = getTagsFromQueryParam(tags);
  const selectedCategory = getCategoryFromPathParam(category);

  const posts = await filterPosts(
    all,
    selectedTags,
    selectedCategory,
    user ? user.superuser : false,
  );

  return {
    props: {
      user,
      blog: {
        posts,
        // include the tags that were used in the filtering process
        // so that the front end can display which are currently
        // applied in the UI
        selectedTags,
        selectedCategory,
        tags: uniq(all.map(post => post.data.tags).flat()),
        categories:  uniq(all.map(post => post.data.category)),
      },
    },
  };
};

export const getPost: GetServerSideProps = async (context) => {
  const user = await getUserFromContext(context);

  const post = await getPostBySlug(
    `/${context.query.category}/${context.query.post}`,
    user ? user.superuser : false,
  );

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
