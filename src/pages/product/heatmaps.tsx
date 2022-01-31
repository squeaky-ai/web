import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const ProductHeatmaps: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky - Product - Heatmaps</title> 
    </Head>
  </>
);

export default ProductHeatmaps;
export { getServerSideProps };
