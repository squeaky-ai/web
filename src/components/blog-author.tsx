import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';

import chris from '../../public/stallions/chris.png';
import lewis from '../../public/stallions/lewis.png';

interface Props {
  author: string;
}

const Avatar: FC<Props> = (props) => {
  switch(props.author) {
    case 'chris.png':
      return <Image src={chris} height={24} width={24} alt='Chris' unoptimized priority />
    case 'lewis.png':
      return <Image src={lewis} height={24} width={24} alt='Lewis' unoptimized priority />
    default:
      return null;
  }
};

export const BlogAuthor: FC<Props> = ({ author }) => (
  <span className='blog-author'>
    <Avatar author={author} />
  </span>
);
