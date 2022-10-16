import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/button';
import { Icon } from './icon';

interface Props {
  partnerName: string;
}

export const PartnerFooter: FC<Props> = ({ partnerName }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className='partner-footer'>
      <div className={classnames('partner-benefits', { open })}>
        <Button className='close' onClick={toggleOpen}>
          <Icon name='close-line' />
        </Button>
        <p>Some of the great reasons to join via a Squeaky business partner:</p>
        <ul>
          <li><Icon name='check-line' /> You already work with our partners, and they know the tools you and your business need most</li>
          <li><Icon name='check-line' /> Partners help you discover how to get the most from your Squeaky analytics data</li>
          <li><Icon name='check-line' /> We only partner with companies that have a track record helping their clients succeed </li>
          <li><Icon name='check-line' /> Our partners are the first to hear about special offers, including deals exclusive to partner sites</li>
        </ul>
      </div>
      <p>This Squeaky sign up page is for clients of our amazing partner <span>{partnerName}</span>. <Button className='link' onClick={toggleOpen}>Discover the benefits of joining through a partner</Button></p>
    </div>
  );
};
