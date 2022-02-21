export type PostData = {
  title: string;
  tags: string[];
  author: Author;
  category: string;
  date: string;
  status: Status;
  metaDescription: string;
  slug: string;
}

export type Post = {
  data: PostData;
  content: string;
}

export type Status = 'draft' | 'active';

export type Author = {
  name: string;
  image: string | null;
}

export type Posts = {
  posts: Post[];
  categories: string[];
  tags: string[];
  selectedTags: string[];
  selectedCategory: string;
}
