export type PostData = {
  title: string;
  tags: string[];
  author: Author;
  category: string;
  summary: string;
  date: string;
  draft: boolean;
  metaImage: string;
  metaDescription: string;
  slug: string;
}

export type Post = {
  data: PostData;
  text: string;
  html: string;
}

export type Author = {
  name: string;
  image: string;
}

export type Posts = {
  posts: Post[];
  categories: string[];
  tags: string[];
  selectedTags: string[];
  selectedCategory: string;
}
