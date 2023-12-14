import type { BlogPost } from 'types/graphql';

export type Posts = {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
  selectedCategory: string;
}
