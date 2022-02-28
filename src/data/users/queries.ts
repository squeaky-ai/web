import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query User {
    user {
      id
      firstName
      lastName
      fullName
      email
      superuser
    }
  }
`;

export const USER_INVITATION_QUERY = gql`
  query UserInvitation($token: String!) {
    userInvitation(token: $token) {
      email
      hasPending
    }
  }
`;
