import React from 'react';
import type { FC } from 'react';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Modal, ModalBody, ModalHeader, ModalContents, ModalFooter } from 'components/modal';
import { teamInviteResend } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';
import type { Site } from 'types/graphql';
import type { Team } from 'types/graphql';

interface Props {
  site: Site;
  team: Team;
}

export const ResendInvitation: FC<Props> = ({ site, team }) => {
  const toast = useToasts();
  const ref = React.useRef<Modal>();

  const openModal = () => {
    if (ref.current) ref.current.show();
  };

  const closeModal = () => {
    if (ref.current) ref.current.hide();
  };

  const resendInvitation = async () => {
    try {
      await teamInviteResend({ siteId: site.id, teamId: team.id });
      toast.add({ type: 'success', body: 'Invitation resent' });
      closeModal();
    } catch(error) {
      toast.add({ type: 'error', body: 'There was an unexpected error when sending your invitation. Please try again.' });
    }
  };

  return (
    <>
      <Button className='positive' onClick={openModal}>Resend Invitation</Button>

      <Modal ref={ref}>
        <ModalBody aria-labelledby='resend-invitation-title' aria-describedby='resend-invitation-description'>
          <ModalHeader>
            <p id='resend-invitation-title'><b>Resend Invitation</b></p>
            <Button type='button' onClick={closeModal}>
              <Icon name='close-line' />
            </Button>
          </ModalHeader>
          <ModalContents>
            <p id='resend-invitation-description'>Are you sure you wish to resend the invitation to {team.user.email}?</p>
          </ModalContents>
          <ModalFooter>
            <Button type='button' className='secondary-app' onClick={resendInvitation}>
              Yes, Resend Invite
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
