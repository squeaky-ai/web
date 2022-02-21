import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { PageTitle } from 'components/page-title';
import { GetPostsProps, getPost as getServerSideProps } from 'lib/blog/posts';
import { Container } from 'components/container';

const BlogPost: NextPage<GetPostsProps> = ({ blog }) => {
  const { post } = blog;

  return (
    <>
      <Head>
        <title>Squeaky | Blog</title> 
      </Head>

      <PageTitle
        title='The Squeaky Blog'
        subtitle={<>Insights and ideas on how to build great products, make marketing more human, and customer experiences better.</>}
      />

      <Container className='md-lg centered'>
        <Link href='/blog'>
          <a>Back</a>
        </Link>

        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
};

export default BlogPost;
export { getServerSideProps };
