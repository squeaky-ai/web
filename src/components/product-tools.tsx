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
          body='Learn from your customers by including NPS® and Sentiment surveys anywhere in your website or app.'
          link='/product/feedback'
        />
      );
    case 'analytics':
      return (
        <ThreeTextGridItem
          title='Analytics'
          body='Our privacy-friendly analytics tool offers you straightforward access to the precise and meaningful data you need.'
          link='/product/analytics'
        />
      );
    case 'recordings':
      return (
        <ThreeTextGridItem
          title='Recordings'
          body='It&apos;s never been easier to understand your users, thanks to our seamless session recording and playback.'
          link='/product/recordings'
        />
      );
    case 'heatmaps':
      return (
        <ThreeTextGridItem
          title='Heatmaps'
          body='Discover which content matters most to your visitors, and where your business could be performing better.'
          link='/product/heatmaps'
        />
      );
    case 'journeys':
      return (
        <ThreeTextGridItem
          title='Journeys'
          body='Improve your user journeys by discovering the exact routes your visitors take around your site.'
          link='/product/journeys'
        />
      );  
    case 'events':
      return (
        <ThreeTextGridItem
          title='Events'
          body='Track and compare any activity on your site, including page visits, button clicks, or any custom event you like.'
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
      <h2>Five more incredible tools included in every Squeaky plan.</h2>
      <p>We&apos;ve built a customer experience platform designed to paint the full picture of your customer experience. There&apos;s no need to pay for multiple tools or spend time figuring out how to fit them together.</p>
      <div className='image'>
        <Illustration illustration='illustration-8' width={598} height={395} />
      </div>
    </div>
    <ThreeTextGrid>
      {options.map(o => <GridItem key={o} option={o} /> )}
    </ThreeTextGrid>
  </Container>
);
