import React from 'react';
import type { FC } from 'react';
import { Container } from 'components/container';
import { Illustration } from 'components/illustration';
import { ThreeTextGrid, ThreeTextGridItem } from 'components/three-text-grid';

type ProductOptions = 'analytics' | 'recordings' | 'feedback' | 'heatmaps' | 'journeys' | 'events';

interface Props {
  options: ProductOptions[];
}

const GridItem = (props: { option: ProductOptions }) => {
  switch(props.option) {
    case 'feedback':
      return (
        <ThreeTextGridItem
          title='Feedback'
          body={<p>Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.</p>}
          link='/product/feedback'
        />
      );
    case 'analytics':
      return (
        <ThreeTextGridItem
          title='Analytics'
          body={<p>Our privacy-friendly analytics tool offers you straightforward access to the precise and meaningful data you need.</p>}
          link='/product/analytics'
        />
      );
    case 'recordings':
      return (
        <ThreeTextGridItem
          title='Recordings'
          body={<p>It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.</p>}
          link='/product/recordings'
        />
      );
    case 'heatmaps':
      return (
        <ThreeTextGridItem
          title='Heatmaps'
          body={<p>Discover which content matters most to your visitors, and where your business could be performing better.</p>}
          link='/product/heatmaps'
        />
      );
    case 'journeys':
      return (
        <ThreeTextGridItem
          title='Journeys'
          body={<p>Improve your user journeys by discovering the exact routes your visitors take around your site.</p>}
          link='/product/journeys'
        />
      );  
    case 'events':
      return (
        <ThreeTextGridItem
          title='Events'
          body={<p>Track and compare any activity on your site, including page visits, button clicks, or any custom event you like.</p>}
          link='/product/event-tracking'
        />
      );
    default:
      return null;
  }
};

export const ProductTools: FC<Props> = ({ options }) => (
  <Container className='product-tools centered lg'>
    <div className='tools-grid'>
      <h2>Five more incredible features in the Squeaky toolkit.</h2>
      <p>We&apos;ve built an analytics platform designed to paint the full picture of your customer experience. There&apos;s no need to pay for multiple tools or spend time figuring out how to fit them together.</p>
      <div className='image'>
        <Illustration illustration='illustration-8' width={598} height={395} />
      </div>
    </div>
    <ThreeTextGrid>
      {options.map(o => <GridItem key={o} option={o} /> )}
    </ThreeTextGrid>
  </Container>
);
