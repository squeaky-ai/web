import React from 'react';
import type { FC } from 'react';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { Modal, ModalBody, ModalHeader, ModalContents, ModalFooter } from 'components/modal';
import { recordingsDelete } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';

interface Props {
  siteId: string;
  recordingIds: string[];
  onCompleted: VoidFunction;
  onClose: VoidFunction;
}

export const RecordingsDelete: FC<Props> = ({ recordingIds, siteId, onCompleted, onClose }) => {
  const ref = React.useRef<Modal>();
  const toasts = useToasts();

  const openModal = () => {
    if (ref.current) ref.current.show();
  };

  const closeModal = () => {
    if (ref.current) ref.current.hide();
  };

  const deleteRecordings = async () => {
    try {
      onCompleted();

      await recordingsDelete({
        siteId,
        recordingIds,
      });

      closeModal();

      toasts.add({ type: 'success', body: 'Recordings deleted successfully' });
    } catch {
      toasts.add({ type: 'error', body: 'There was an issue deleting the recordings' });
    }
  };

  return (
    <>
      <Button className='link tertiary-app' onClick={openModal}>Delete recordings</Button>

      <Modal ref={ref} onClose={onClose}>
        <ModalBody aria-labelledby='delete-recordings-title' aria-describedby='delete-recordings-description'>
          <ModalHeader>
            <p id='delete-recordings-title'><b>Delete Recordings</b></p>
            <Button type='button' onClick={closeModal}>
              <Icon name='close-line' />
            </Button>
          </ModalHeader>
          <ModalContents>
            <p id='delete-recordings-description'>Are you sure you wish to permanently delete all {recordingIds.length} recordings?</p>
            <p>This will remove the session recordings, but their analytics data will remain.</p>
          </ModalContents>
          <ModalFooter>
            <Button type='button' className='tertiary-app' onClick={deleteRecordings}>
              Delete Recordings
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
