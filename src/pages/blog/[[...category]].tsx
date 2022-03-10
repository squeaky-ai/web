import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Cta } from 'components/cta';
import { PageTitle } from 'components/page-title';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { QueryPostsProps, queryPosts as getServerSideProps } from 'lib/blog/posts';
import { toHumanDate } from 'lib/dates';
import { buildCategoryUrl, buildTagUrl, buildTagsUrl } from 'lib/blog/helpers';
import { Button } from 'components/button';
import { Label } from 'components/label';
import { Select, Option } from 'components/select';
import { MultiSelect } from 'components/multi-select';
import type { Post } from 'types/blog';
import type { SqueakyPage } from 'types/page';

const Blog: SqueakyPage<QueryPostsProps> = ({ blog }) => {
  const router = useRouter();
  
  const { tags, categories, posts, selectedCategory, selectedTags } = blog;

  const onDraftClick = (post: Post) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    window.open(post.editLink, '_blank');
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value || null;
    const url = buildCategoryUrl(router, category);

    router.push(url);
  };

  const handleTagChange = (tags: string[]) => {
    const url = buildTagsUrl(router, tags);

    router.push(url);
  };

  return (
    <>
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
                    <img src={post.data.metaImage} alt='Blog cover image' />
                  </div>
                  <div className='content'>
                    <div className='overflow'>
                      <h4>
                        {post.data.title}
                      </h4>
                      <p className='meta'>
                        <span>
                          <span className='blog-author'>
                            <img src={post.data.author.image} height={24} width={24} alt='Image of the blog author' />
                          </span>
                          {post.data.author.name}
                        </span>
                        <span className='divider' />
                        <span>
                          {post.data.draft
                            ? <Button className='draft link' onClick={onDraftClick(post)}>Draft</Button>
                            : toHumanDate(post.data.date)
                          }
                        </span>
                      </p>
                      <p className='description'>
                        {post.data.summary}
                      </p>
                    </div>
                  </div>
                </a>
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
                <Link href={buildCategoryUrl(router, null)}>
                  <a className={classnames('category', { selected: selectedCategory === null })}>
                    All
                  </a>
                </Link>

                {categories.map(category => (
                  <Link href={buildCategoryUrl(router, category)} key={category}>
                    <a className={classnames('category', { selected: selectedCategory === category.toLowerCase() })}>
                      {category}
                    </a>
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
            
            <h4>Tags</h4>
            
            <div className='tags'>
              <div className='large'>
                {tags.map(tag => (
                  <Link href={buildTagUrl(router, tag)} key={tag}>
                    <a className={classnames('tag', { selected: selectedTags.includes(tag) })}>
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>

              <div className='small'>
                <Label htmlFor='tags'>Tags</Label>
                
                <MultiSelect
                  options={tags}
                  defaultSelected={selectedTags}
                  onUpdate={handleTagChange}
                />
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
  const description = router.asPath === '/blog'
    ? 'Read the Squeaky blog to discover our insights and ideas on how to build great products, make marketing more human, and build better customer experiences.'
    : `We\'ve grouped all our blog posts about ${props.blog.categories[0]} in one place, so you can read the content that matters to you.`;

  return {
    title: 'Squeaky | Blog',
    description,
    index: true,
  };
};

export default Blog;
export { getServerSideProps };
