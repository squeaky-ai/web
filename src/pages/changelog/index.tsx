import React from 'react';
import Link from 'next/link';
import { Cta } from 'components/cta';
import { PageTitle } from 'components/page-title';
import { Container } from 'components/container';
import { getCategoryCounts } from 'lib/changelog/helpers';
import { GetPostsProps, queryPosts as getServerSideProps } from 'lib/changelog/posts';
import type { SqueakyPage } from 'types/page';

const Changelog: SqueakyPage<GetPostsProps> = ({ changelog }) => (
  <>
    <PageTitle
      title='Squeaky Changelog'
      subtitle={<>Regular updates on changes and improvements to the Squeaky product and technology.</>}
    />

    <Container className='lg centered posts'>
      <main>
        {changelog.map(post => {
          const counts = getCategoryCounts(post.body);

          return (
            <div className='changelog-entry' key={post.id}>
              <div className='dashes' />
              <div className='dot' />
              <Link href={`/changelog${post.slug}`}>
                {post.title}
              </Link>
              <p>
                {counts.map((x, i) => (
                  <React.Fragment key={i}>
                    {x}
                    {i !== counts.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
        )}

        {changelog.length === 0 && (
          <p className='no-results'>No results</p>
        )}
      </main>
    </Container>

    <section className='get-started'>
      <Cta type='squiggle' title={<h3>If you&apos;re enjoying our changes, you&apos;ll love our product.</h3>} />
    </section>
  </>
);

Changelog.getMetaData = () => ({
  title: 'The Squeaky Changelog',
  description: 'Regular updates on changes and improvements to the Squeaky product and technology.',
  index: true,
});

export default Changelog;
export { getServerSideProps };
