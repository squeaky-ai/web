import { gql } from '@apollo/client';

export const NPS_CREATE_MUTATION = gql`
  mutation NpsCreate($input: NpsCreateInput!) {
    npsCreate(input: $input) {
      message
    }
  }
`;
