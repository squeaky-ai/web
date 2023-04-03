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
      createdAt {
        iso8601
      }
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
