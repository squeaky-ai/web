import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import classnames from 'classnames';
import { truncate } from 'lodash';
import { useRouter } from 'next/router';
import { PageTitle } from 'components/page-title';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { QueryPostsProps, queryPosts as getServerSideProps } from 'lib/blog';
import { toHumanDate } from 'lib/dates';
import { buildCategoryUrl, buildTagsUrl } from 'lib/blog/helpers';

const Blog: NextPage<QueryPostsProps> = ({ blog }) => {
  const router = useRouter();
  
  const { tags, categories, posts, selectedCategory, selectedTags } = blog;

  return (
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
              <Link href={`/blog${post.data.slug}`}>
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
            <Link href={buildCategoryUrl(router, null)}>
              <a className={classnames('category', { selected: selectedCategory === null })}>
                All
              </a>
            </Link>

            {categories.map(category => (
              <Link href={buildCategoryUrl(router, category)} key={category}>
                <a className={classnames('category', { selected: selectedCategory === category })}>
                  {category}
                </a>
              </Link>
            ))}
          </div>
          
          <h4>Tags</h4>
          
          <div className='tags'>
            {tags.map(tag => (
              <Link href={buildTagsUrl(router, tag)} key={tag}>
                <a className={classnames('tag', { selected: selectedTags.includes(tag) })}>
                  {tag}
                </a>
              </Link>
            ))}
          </div>
        </aside>
      </Container>
    </>
  );
};

export default Blog;
export { getServerSideProps };
