import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import hljs from 'highlight.js';
import { ServerSideProps, getServerSideProps } from 'lib/auth';
import { Code } from 'components/code';
import { Container } from 'components/container';

const FindingBugsByBeingOurOwnCustomer: NextPage<ServerSideProps> = () => {
  React.useEffect(() => {
    document.querySelectorAll('pre code').forEach((element) => {
      hljs.highlightElement(element as HTMLElement);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Squeaky - Engineering - (2022-01-31) Finding Bugs By Being Our Own Customer</title>
      </Head>

      <Container className='md-lg centered blog'>
        <p className='date'>2022-01-31</p>
        <h1>Finding Bugs By Being Our Own Customer</h1>

        <p>We use Squeaky on Squeaky as way to find bugs in our own software (as well as a way of getting analytics data anonymously).</p>

        <p>Recently I switched our website from Wordpress to Next.js to simply our infrastructure and increase performance. Shortly after switching the stacks, I noticed that our recordings were missing all their CSS and images after a few hours. We&apos;d never had any issues like this with the previous setup, and we hadn&apos;t received any feedback about this happening to anyone else.</p>

        <p>Plenty of our users use React and Next.js, so the issue couldn&apos;t have been that. I started looking at the differences between the way the CSS was served and it clicked that we now serve all our assets from our CDN (using <span className='code'>assetPrefix</span> in <span className='code'>next.config.js</span>).</p>

        <p>Most people are using a build pipeline for their assets such as Webpack, which usually creates a unique bundle for each deployment. In order to make sure that the recordings continue to play back correctly after that file has changed or deleted, we take a snapshot of the CSS that&apos;s loaded and bundle it along with the recording data.</p>

        <p>After debugging some of our recordings, I noticed that the asset data was not being bundled, and it was falling back to trying to load the stylesheet from our CDN, which had since changed. I isolated the code responsible for fetching the styles and tried it out against the new site. It looks a little something like this:</p>

        <Code lang='typescript'>
  {`try {
  return Array.from(document.styleSheets).map(s => s.cssRules);
} catch(error) {
  // handle gracefully
}`}
        </Code>

        <p>Immediately it threw this exception:</p>

        <Code lang='text'>
  {`Unable to access cssRules property DOMException: "CSSStyleSheet.cssRules getter: Not allowed to access cross-origin stylesheet"`}
        </Code>

        <p><b>I hate CORS</b>.</p>

        <p>The solution was to update our CDN to return the <span className='code'>Access-Control-Allow-Origin</span> header, and to update our <span className='code'>next.config.js</span> to include <span className='code'>crossOrigin: &apos;anonymous&apos;</span>. After deploying the changes I checked if I could access <span className='code'>cssRules</span> on the stylesheet and it returned the data as expected.</p>

        <p>It&apos;s a good job we found this bug first! If any of our users run into this issue, the two solutions are:</p>

        <ol>
          <li>Serve the assets from the same domain</li>
          <li>Enable CORS if the assets are from another domain (from a CDN for example)</li>
        </ol>

        <div className='signoff'>
          <p>Thanks for reading</p>
          <p>Lewis</p>
        </div>
        
      </Container>
    </>
  );
};

export default FindingBugsByBeingOurOwnCustomer;
export { getServerSideProps };
