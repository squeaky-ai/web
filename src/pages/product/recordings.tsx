import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ProductHeader } from 'components/product-header';

const ProductRecordings: NextPage = () => (
  <>
    <Head>
      <title>Squeaky - Product - Recordings</title> 
    </Head>

    <ProductHeader
      title='See what your customers see'
      subtitle='Recordings'
      body={
        <>
          Capture pixel-perfect session recordings that help you understand the experience of your customers without compromising their privacy.
          <ul>
            <li>Watch customers in-the-wild</li>
            <li>Reproduce and resolve customer issues</li>
            <li>Optimise conversion rates</li>
          </ul>
        </>
      }
    />
  </>
);

export default ProductRecordings;
