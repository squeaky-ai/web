import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Modal, ModalBody, ModalHeader, ModalContents, ModalFooter } from 'components/modal';
import { teamDelete } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';
import type { Site } from 'types/graphql';
import type { Team } from 'types/graphql';

interface Props {
  site: Site;
  team: Team;
}

export const DeleteTeam: FC<Props> = ({ site, team }) => {
  const toast = useToasts();
  const ref = React.useRef<Modal>();

  const openModal = () => {
    if (ref.current) ref.current.show();
  };

  const closeModal = () => {
    if (ref.current) ref.current.hide();
  };

  const deleteTeam = async () => {
    try {
      await teamDelete({ siteId: site.id, teamId: team.id });
      toast.add({ type: 'success', body: 'User removed successfully' });
      closeModal();
    } catch(error) {
      toast.add({ type: 'error', body: 'There was an unexpected error when removing your user. Please try again.' });
    }
  };

  return (
    <>
      <Button className='negative' onClick={openModal}>Remove</Button>

      <Modal ref={ref}>
        <ModalBody aria-labelledby='delete-team-title' aria-describedby='delete-team-description'>
          <ModalHeader>
            <p id='delete-team-title'><b>Remove User</b></p>
            <Button type='button' onClick={closeModal}>
              <Icon name='close-line' />
            </Button>
          </ModalHeader>
          <ModalContents>
            <p id='delete-team-description'>Are you sure you wish to remove {team.user.fullName} from your site?</p>
            <p>If {team.user.firstName} has created any video notes or other similar content it will be relabeled as &apos;Removed User&apos;.</p>
          </ModalContents>
          <ModalFooter>
            <Button type='button' className='tertiary-app' onClick={deleteTeam}>
              Yes, Remove User
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
