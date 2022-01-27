import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Modal, ModalBody, ModalHeader, ModalContents, ModalFooter } from 'components/modal';
import { visitorDelete } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';
import type { Site } from 'types/graphql';
import { Message } from 'components/message';

interface Props {
  site: Site;
  visitorId: string;
  onClose?: VoidFunction;
  onDelete?: VoidFunction;
}

export const VisitorsDelete: FC<Props> = ({ site, visitorId, onClose, onDelete }) => {
  const toasts = useToasts();
  const ref = React.useRef<Modal>();

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (ref.current) ref.current.show();
  };

  const closeModal = () => {
    if (ref.current) ref.current.hide();
  };

  const handleDeleteClick = async () => {
    try {
      await visitorDelete({ 
        siteId: site.id,
        visitorId, 
      });
      
      if (onClose) closeModal();
      if (onDelete) onDelete();
      toasts.add({ type: 'success', body: 'Visitor deleted' });
    } catch {
      toasts.add({ type: 'error', body: 'There was an error deleteing the visitor. Please try again.' });
    }
  };

  return (
    <>
      <Button onClick={openModal} className='delete-visitor'>
        <Icon name='delete-bin-line' /> <span>Delete</span>
      </Button>
            
      <Modal ref={ref} onClose={onClose}>
        <ModalBody aria-labelledby='delete-visitor-title' aria-describedby='delete-visitor-description'>
          <ModalHeader>
            <p id='delete-visitor-title'><b>Delete Visitor</b></p>
            <Button type='button' onClick={closeModal}>
              <Icon name='close-line' />
            </Button>
          </ModalHeader>
          <ModalContents>
            <p id='delete-visitor-description'>Are you sure you wish to delete this visitor?</p>
            <Message
              type='error'
              message='This will also delete any historical recording or analytics data associated with this visitor.'
            />
          </ModalContents>
          <ModalFooter>
            <Button type='button' className='tertiary-app' onClick={handleDeleteClick}>
              Delete Visitor
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
