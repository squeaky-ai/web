import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductRecordings: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Product - Recordings</title> 
    </Head>
  </>
);

export default ProductRecordings;
export { getServerSideProps };
