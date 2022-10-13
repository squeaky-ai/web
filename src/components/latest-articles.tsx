import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { Container } from 'components/container';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { useResize } from 'hooks/use-resize';
import type { BlogPost } from 'types/graphql';

interface Props {
  posts: BlogPost[];
}

export const LatestArticles: FC<Props> = ({ posts }) => {
  const router = useRouter();
  const [position, setPosition] = React.useState<number>(0);

  const { desktop, tablet } = useResize();

  const blogPosts = posts.filter(p => p.slug !== router.asPath.replace('/blog', ''));

  const columnCount = (() => {
    if (desktop) return 3;
    if (tablet) return 2;
    return 1;
  })();

  const shouldShow = (index: number) => {
    return index >= position && index <= position + (columnCount - 1);
  };

  const handleForward = () => {
    if (position !== 0) setPosition(position - 1);
  };

  const handleBackward = () => {
    if (position !== blogPosts.length - columnCount) setPosition(position + 1);
  };

  if (blogPosts.length === 0) {
    return null;
  }
  
  return (
    <footer className='latest-articles'>
      <Container className='lg centered'>
        <div className='title'>
          <h3>Latest articles</h3>
          <div className='actions'>
            <Button className='arrow' disabled={position === 0} onClick={handleForward}>
              <Icon name='arrow-left-line' />
            </Button>
            <Button className='arrow' disabled={position === blogPosts.length - columnCount} onClick={handleBackward}>
              <Icon name='arrow-right-line' />
            </Button>
          </div>
        </div>

        <div className='posts'>
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog${post.slug}`}>
              <a className={classnames('card post', { show: shouldShow(index) })}>
                <div className='image'>
                  <img src={post.metaImage} alt='Blog cover image' />
                </div>
                <h4>{post.title}</h4>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};
