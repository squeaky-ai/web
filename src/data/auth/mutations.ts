import { gql } from '@apollo/client';

export const AUTH_SIGNUP_MUTATION = gql`
  mutation($input: AuthSignUpInput!) {
    authSignup(input: $input) {
      id
      email
      createdAt {
        iso8601
      }
    }
  }
`;

export const AUTH_CONFIRM_MUTATION = gql`
   mutation($input: AuthConfirmInput!) {
    authConfirm(input: $input) {
      id
      email
    }
  }
`;

export const AUTH_RECONFIRM_MUTATION = gql`
  mutation($input: AuthReconfirmInput!) {
    authReconfirm(input: $input) {
      message
    }
  }
`;

export const AUTH_PASSWORD_UPDATE_MUTATION = gql`
  mutation($input: AuthPasswordUpdateInput!) {
    authPasswordUpdate(input: $input) {
      id
      email
    }
  }
`;

export const AUTH_PASSWORD_RESET_MUTATION = gql`
  mutation($input: AuthPasswordResetInput!) {
    authPasswordReset(input: $input) {
      message
    }
  }
`;
