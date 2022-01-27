import { gql } from '@apollo/client';

export const TEAM_INVITE_ACCEPT_MUTATION = gql`
  mutation TeamInviteAccept($input: TeamInviteAcceptInput!) {
    teamInviteAccept(input: $input) {
      id
      role
      status
      user {
        id
        firstName
        lastName
        fullName
        email
      }
    }
  }
`;
