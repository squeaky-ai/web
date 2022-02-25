import { gql } from '@apollo/client';

export const NPS_CREATE_MUTATION = gql`
  mutation NpsCreate($input: NpsCreateInput!) {
    npsCreate(input: $input) {
      message
    }
  }
`;

export const SENTIMENT_CREATE_MUTATION = gql`
  mutation SentimentCreate($input: SentimentCreateInput!) {
    sentimentCreate(input: $input) {
      message
    }
  }
`;
