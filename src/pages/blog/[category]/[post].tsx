import React from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { GetPostsProps, getPost as getServerSideProps } from 'lib/blog/posts';
import { toHumanDate } from 'lib/dates';
import type { SqueakyPage } from 'types/page';

const BlogPost: SqueakyPage<GetPostsProps> = ({ blog }) => {
  const { post } = blog;

  return (
    <>
      <section className='blog-header'>
        <Container className='lg centered'>
          <div className='title'>
            <div className='breadcrumbs'>
              <Link href='/blog'><a>Blog</a></Link> / <Link href={`/blog/${post.data.category.toLowerCase()}`}><a>{post.data.category}</a></Link> / Article
            </div>

            <h1>{post.data.title}</h1>

            <p className='meta'>
              <span>
                <span className='blog-author'>
                  <img src={post.data.author.image} height={24} width={24} alt='Image of the blog author' />
                </span>
                {post.data.author.name}
              </span>
              <span className='divider' />
              <span>
                Last updated: <b>{toHumanDate(post.data.date)}</b>
              </span>
            </p>

            <div className='tags'>
              {post.data.tags.map(tag => (
                <span className='tag' key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className='image'>
            <img src={post.data.metaImage} alt='Blog cover image' />
          </div>
        </Container>
      </section>

      <Container className='md centered blog-body'>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
};

BlogPost.getMetaData = (props) => ({
  title: `Squeaky | Blog | ${props.blog.post.data.title}`,
  description: props.blog.post.data.metaDescription,
  index: true,
});

export default BlogPost;
export { getServerSideProps };
