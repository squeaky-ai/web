import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Modal, ModalBody, ModalHeader, ModalContents, ModalFooter } from 'components/modal';
import { useToasts } from 'hooks/use-toasts';
import { sentimentDelete } from 'lib/api/graphql';
import type { FeedbackSentimentResponseItem } from 'types/graphql';

interface Props {
  response: FeedbackSentimentResponseItem;
  onClose: VoidFunction;
}

export const SentimentResponsesDelete: FC<Props> = ({ response, onClose }) => {
  const toasts = useToasts();
  const router = useRouter();

  const ref = React.useRef<Modal>();

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (ref.current) ref.current.show();
  };

  const closeModal = () => {
    if (ref.current) ref.current.hide();
  };

  const deleteResponse = async () => {
    try {
      await sentimentDelete({ sentimentId: response.id, siteId: router.query.site_id as string });
      closeModal();
      toasts.add({ type: 'success', body: 'Response deleted' });
    } catch {
      toasts.add({ type: 'error', body: 'There was an error deleteing your response. Please try again.' });
    }
  };

  return (
    <>
      <Button onClick={openModal}>
        <Icon name='delete-bin-line' /> Delete
      </Button>
            
      <Modal ref={ref} onClose={onClose}>
        <ModalBody aria-labelledby='delete-response-title' aria-describedby='delete-response-description'>
          <ModalHeader>
            <p id='delete-response-title'><b>Delete Response</b></p>
            <Button type='button' onClick={closeModal}>
              <Icon name='close-line' />
            </Button>
          </ModalHeader>
          <ModalContents>
            <p id='delete-response-description'>Are you sure you wish to delete this response?</p>
          </ModalContents>
          <ModalFooter>
            <Button type='button' className='tertiary-app' onClick={deleteResponse}>
              Delete Response
            </Button>
            <Button type='button' className='quaternary-app' onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};
