import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { truncate } from 'lodash';
import { PageTitle } from 'components/page-title';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { QueryPostsProps, queryPosts as getServerSideProps } from 'lib/blog'; 
import { toHumanDate } from 'lib/dates';

const Blog: NextPage<QueryPostsProps> = ({ tags, categories, posts }) => (
  <>
    <Head>
      <title>Squeaky | Blog</title> 
    </Head>

    <PageTitle
      title='The Squeaky Blog'
      subtitle={<>Insights and ideas on how to build great products, make marketing more human, and customer experiences better.</>}
    />

    <Container className='lg centered posts'>
      <main>
        {posts.map(post => (
          <Card key={post.data.slug}>
            <Link href='#'>
              <a>
                <div className='image'>

                </div>
                <div className='content'>
                  <h4>
                    {post.data.title}
                  </h4>
                  <p className='meta'>
                    {post.data.author.name}
                    <span className='divider' />
                    {toHumanDate(post.data.date)}
                  </p>
                  <p className='description'>
                    {truncate(post.content, { length: 160 })}
                  </p>
                </div>
              </a>
            </Link>
          </Card>
        ))}
      </main>

      <aside>
        <h4>Categories</h4>

        <div className='categories'>
          <Link href='#'>
            <a className='category'>
              All
            </a>
          </Link>

          {categories.map(category => (
            <Link href='#' key={category}>
              <a className='category'>
                {category}
              </a>
            </Link>
          ))}
        </div>
        
        <h4>Tags</h4>
        
        <div className='tags'>
          {tags.map(tag => (
            <Link href='#' key={tag}>
              <a className='tag'>
                {tag}
              </a>
            </Link>
          ))}
        </div>
      </aside>
    </Container>
  </>
);

export default Blog;
export { getServerSideProps };
