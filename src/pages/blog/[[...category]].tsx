import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Cta } from 'components/cta';
import { PageTitle } from 'components/page-title';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { QueryPostsProps } from 'lib/blog/posts';
import { toHumanDate } from 'lib/dates';
import { buildCategoryUrl } from 'lib/blog/helpers';
import { Label } from 'components/label';
import { Select, Option } from 'components/select';
import type { SqueakyPage } from 'types/page';
import { getStaticBlogPaths as getStaticPaths, getStaticBlogProps as getStaticProps } from 'lib/blog/posts';

const Blog: SqueakyPage<QueryPostsProps> = ({ blog }) => {
  const router = useRouter();
  
  const { categories, posts, selectedCategory } = blog;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value || null;
    const url = buildCategoryUrl(router, category);

    router.push(url);
  };

  return (
    <>
      <PageTitle
        title='The Squeaky Blog'
        subtitle={<>Articles about building great products. Tips and ideas about design and engineering. Updates on the Squeaky product.</>}
      />

      <Container className='lg centered posts'>
        <main>
          {posts.map(post => (
            <Card key={post.slug}>
              <Link href={`/blog${post.slug}`}>
                <div className='image'>
                  <img src={post.metaImage} alt='Blog cover image' />
                </div>
                <div className='content'>
                  <div className='overflow'>
                    <h4>
                      {post.title}
                    </h4>
                    <p className='meta'>
                      <span>
                        <span className='blog-author'>
                          <img src={post.author.image} height={24} width={24} alt='Image of the blog author' />
                        </span>
                        {post.author.name}
                      </span>
                      <span className='divider' />
                      <span>
                        {toHumanDate(post.createdAt.iso8601)}
                      </span>
                    </p>
                    <p className='description'>
                      {post.metaDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          ))}

          {posts.length === 0 && (
            <p>No posts matching your filters</p>
          )}
        </main>

        <aside>
          <div className='sidebar'>
            <h4>Categories</h4>

            <div className='categories'>
              <div className='large'>
                <Link href={buildCategoryUrl(router, null)} className={classnames('category', { selected: selectedCategory === '' })}>
                  All
                </Link>

                {categories.map(category => (
                  <Link href={buildCategoryUrl(router, category)} key={category} className={classnames('category', { selected: selectedCategory === category.toLowerCase() })}>
                    {category}
                  </Link>
                ))}
              </div>

              <div className='small'>
                <Label htmlFor='category'>Category</Label>
                <Select id='category' onChange={handleCategoryChange} defaultValue={selectedCategory}>
                  <Option value=''>
                    All
                  </Option>
                  {categories.map(category => (
                    <Option key={category} value={category.toLowerCase()}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </aside>
      </Container>

      <section className='get-started'>
        <Cta type='squiggle' title={<h3>If you&apos;re enjoying our articles, you&apos;ll love our product.</h3>} />
      </section>
    </>
  );
};

Blog.getMetaData = (props, router) => {
  if (router.asPath === '/blog') {
    return {
      title: 'The Squeaky Blog',
      description: 'Read the Squeaky blog to discover our insights and ideas on how to build great products, make marketing more human, and build better customer experiences.',
      index: true,
    }
  }

  return {
    title: `The Squeaky Blog | ${props.blog.categories[0]} Articles`,
    description: `We\'ve grouped all our blog posts about ${props.blog.categories[0]} in one place, so you can read the content that matters to you.`,
    index: true,
  };
};

export default Blog;

export { getStaticPaths };
export { getStaticProps };
