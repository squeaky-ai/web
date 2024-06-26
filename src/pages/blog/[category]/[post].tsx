import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Container } from 'components/container';
import { Icon } from 'components/icon';
import { LatestArticles } from 'components/latest-articles';
import { toHumanDate } from 'lib/dates';
import { GetPostsProps, getStaticPostPaths as getStaticPaths, getStaticPostProps as getStaticProps } from 'lib/blog/posts';
import type { SqueakyPage } from 'types/page';

const BlogPost: SqueakyPage<GetPostsProps> = ({ blog }) => {
  const { post, posts } = blog;

  const toTextSlug = (text: string) => text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z-]/g, '');

  // The html needs to be escaped
  const content = post.body
    .replace(/\\n/g, '')
    .replace(/\\"/g, '"');

  // Extract the content of all of the h2 tags
  // to build a list of links to them. This is used
  // for the "what we'll cover" bit at the top
  const headings = content.match(/<h2>([^<]+)<\/h2>/g)?.map(line => {
    const text = line.replace('<h2>', '').replace('</h2>', '').trim();

    return { text, slug: toTextSlug(text) };
  }) || [];

  // Add ids to all of the h2 tags so the "what we'll cover"
  // stuff can link properly
  const html = content.replace(/<h2>([^<]+)<\/h2>/g, (_tag, string) => {
    return `<h2 id="${toTextSlug(string)}">${string}</h2>`;
  });

  return (
    <>
      <section className='blog-header'>
        <Container className='lg centered'>
          <div className='title'>
            <div className='breadcrumbs'>
              <Link href='/blog'>Blog</Link> / <Link href={`/blog/${post.category.toLowerCase()}`}>{post.category}</Link> / Article
            </div>

            <h1>{post.title}</h1>

            <p className='meta'>
              <span>
                <span className='blog-author'>
                  <img src={post.author.image} height={24} width={24} alt='Image of the blog author' />
                </span>
                {post.author.name}
              </span>
              <span className='divider' />
              <span>
                Last updated: <b>{toHumanDate(post.updatedAt.iso8601)}</b>
              </span>
            </p>

            <div className='tags'>
              {post.tags.map(tag => (
                <span className='tag' key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className='image'>
            <img src={post.metaImage} alt='Blog cover image' />
          </div>
        </Container>
      </section>

      <Container className='centered blog-body'>
        {post.coveringEnabled && (
          <>
            {headings.length > 0 && (
              <div className='covering'>
                <p>
                  <Icon name='information-line' />
                  <b>What we&apos;ll cover</b>
                </p>
                <ul>
                  {headings.map(heading => (
                    <li key={heading.slug}>
                      <a href={`#${heading.slug}`}>
                        {heading.text}
                      </a>  
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      <LatestArticles posts={posts} />

      {post.scripts.map(script => (
        <Script src={script} key={script} />
      ))}
    </>
  );
};

BlogPost.getMetaData = (props) => ({
  title: props.blog.post.title,
  description: props.blog.post.metaDescription,
  index: true,
  author: props.blog.post.author.name,
  image: props.blog.post.metaImage,
});

export default BlogPost;
export { getStaticPaths };
export { getStaticProps };
