import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductFeedback: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Product - Feedback</title> 
    </Head>
  </>
);

export default ProductFeedback;
export { getServerSideProps };
