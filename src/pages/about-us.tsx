import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ServerSideProps, getServerSideProps } from 'lib/auth';

const AboutUs: NextPage<ServerSideProps> = () => (
  <>
    <Head>
      <title>Squeaky | About Us</title> 
    </Head>
  </>
);

export default AboutUs;
export { getServerSideProps };
