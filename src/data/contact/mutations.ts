import { gql } from '@apollo/client';

export const CONTACT_MUTATION = gql`
  mutation Contact($input: ContactInput!) {
    contact(input: $input) {
      message
    }
  }
`;

export const BOOK_DEMO_MUTATION = gql`
  mutation BookDemo($input: ContactDemoInput!) {
    bookDemo(input: $input) {
      message
    }
  }
`;
