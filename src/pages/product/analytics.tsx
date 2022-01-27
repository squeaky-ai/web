import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductAnalytics: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Product - Analytics</title> 
    </Head>
  </>
);

export default ProductAnalytics;
export { getServerSideProps };
