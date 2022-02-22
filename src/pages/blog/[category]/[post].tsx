import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Container } from 'components/container';
import { GetPostsProps, getPost as getServerSideProps } from 'lib/blog/posts';
import { toHumanDate } from 'lib/dates';

const BlogPost: NextPage<GetPostsProps> = ({ blog }) => {
  const { post } = blog;

  return (
    <>
      <Head>
        <title>Squeaky | Blog | {post.data.title}</title> 
      </Head>

      <section className='blog-header'>
        <Container className='lg centered'>
          <div className='title'>
            <div className='breadcrumbs'>
              <Link href='/blog'><a>Blog</a></Link> / <Link href={`/blog/${post.data.category.toLowerCase()}`}><a>{post.data.category}</a></Link> / Article
            </div>

            <h1>{post.data.title}</h1>

            <p className='meta'>
              <img src={post.data.author.image} height={24} width={24} alt='Image of the blog author' />
              {post.data.author.name}
              <span className='divider' />
              Last updated: <b>{toHumanDate(post.data.date)}</b>
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

export default BlogPost;
export { getServerSideProps };
