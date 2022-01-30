import React from 'react';
import type { FC } from 'react';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';

export const ProductTools: FC = () => (
  <Container className='product-tools centered lg'>
    <div className='tools-grid'>
      <h2>Three more incredible tools included in every Squeaky plan.</h2>
      <p>We&apos;ve build a customer experience platform designed to paint the full picture of your customer experience. There&apos;s no need to pay for multiple tools or spend time figuring out how to fit them together.</p>
      <div className='image'>
        <Illustration illustration='illustration-20' width={598} height={395} />
      </div>
    </div>
    <ThreeTextGrid>
      <ThreeTextGridItem
        title='Recordings'
        body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
        link='/product/recordings'
      />
      <ThreeTextGridItem
        title='Feedback'
        body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
        link='/product/feedback'
      />
      <ThreeTextGridItem
        title='Heatmaps'
        body='Discover which content matters most to your visitors, and where your business could be performing better.'
        link='/product/heatmaps'
      />
    </ThreeTextGrid>
  </Container>
);
