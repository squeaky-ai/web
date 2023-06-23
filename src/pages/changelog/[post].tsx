import React from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { Cta } from 'components/cta';
import { GetPostProps, getPost as getServerSideProps } from 'lib/changelog/posts';
import type { SqueakyPage } from 'types/page';

const ChangelogPost: SqueakyPage<GetPostProps> = ({ changelog }) => {
  // The html needs to be escaped
  const content = changelog.body
    .replace(/\\n/g, '')
    .replace(/\\"/g, '"');

  return (
    <>
      <section className='changelog-header'>
        <Container className='lg centered'>
          <div className='title'>
            <div className='breadcrumbs'>
              <Link href='/changelog'>Changelog</Link>
            </div>

            <h1>{changelog.title}</h1>

            <p className='meta'>
              <span>
                <span className='changelog-author'>
                  <img src={changelog.author.image} height={24} width={24} alt='Image of the changelog author' />
                </span>
                {changelog.author.name}
              </span>
            </p>
          </div>
        </Container>
      </section>

      <Container className='centered blog-body'>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </Container>

      <section className='get-started'>
        <Cta type='squiggle' title={<h3>If you&apos;re enjoying our changes, you&apos;ll love our product.</h3>} />
      </section>
    </>
  );
};

ChangelogPost.getMetaData = (props) => ({
  title: props.changelog.title,
  description: props.changelog.metaDescription,
  index: true,
  author: props.changelog.author.name,
  image: props.changelog.metaImage,
});

export default ChangelogPost;
export { getServerSideProps };
