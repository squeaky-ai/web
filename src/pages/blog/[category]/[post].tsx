import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PageTitle } from 'components/page-title';
import { GetPostsProps, getPost as getServerSideProps } from 'lib/blog';

const BlogPost: NextPage<GetPostsProps> = ({ blog }) => {
  const { post } = blog;

  console.log(post);

  return (
    <>
      <Head>
        <title>Squeaky | Blog</title> 
      </Head>

      <PageTitle
        title='The Squeaky Blog'
        subtitle={<>Insights and ideas on how to build great products, make marketing more human, and customer experiences better.</>}
      />

      <p>Hello!</p>
    </>
  );
};

export default BlogPost;
export { getServerSideProps };
