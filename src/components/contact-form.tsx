import React from 'react';
import type { FC } from 'react';
import { Card } from 'components/card';
import { Container } from 'components/container';
import { Icon } from 'components/icon';

interface Props {
  aside: React.ReactNode;
  form: React.ReactNode;
  submitted: boolean;
  submittedTitle: string;
  submittedMessage: string;
}

const Submitted: FC<Pick<Props, 'submittedTitle' | 'submittedMessage'>> = ({ submittedTitle, submittedMessage }) => (
  <div className='submitted'>
    <Icon name='information-line' />
    <h4>{submittedTitle}</h4>
    <p className='large'>{submittedMessage}</p>
  </div>
);

export const ContactForm: FC<Props> = ({ aside, form, submitted, submittedTitle, submittedMessage }) => {
  return (
    <div className='contact-form'>
      <Container className='md-lg centered'>
        <Card>
          <aside>
            {aside}
          </aside>
          {submitted
            ? <Submitted submittedTitle={submittedTitle} submittedMessage={submittedMessage} />
            : form
          }
        </Card>
      </Container>
    </div>
  );
};
