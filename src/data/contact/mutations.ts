import { gql } from '@apollo/client';

export const CONTACT_MUTATION = gql`
  mutation Contact($firstName: String!, $lastName: String!, $email: String!, $subject: String!, $message: String!) {
    contact(input: { firstName: $firstName, lastName: $lastName, email: $email, subject: $subject, message: $message }) {
      message
    }
  }
`;

export const BOOK_DEMO_MUTATION = gql`
  mutation BookDemo($firstName: String!, $lastName: String!, $email: String!, $telephone: String!, $companyName: String!, $traffic: String!, $message: String!) {
    bookDemo(input: { firstName: $firstName, lastName: $lastName, email: $email, telephone: $telephone, companyName: $companyName, traffic: $traffic, message: $message }) {
      message
    }
  }
`;
