import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import type { Feedback } from 'types/graphql';

interface UsePlans {
  loading: boolean;
  error: boolean;
  feedback: Feedback;
  visitor: VisitorParams;
}

interface VisitorParams {
  siteId: string;
  visitorId: string;
  sessionId: string;
}

const QUERY = gql`
  query GetFeedback($siteId: String!) {
    feedback(siteId: $siteId) {
      npsEnabled
      npsAccentColor
      npsSchedule
      npsPhrase
      npsFollowUpEnabled
      npsContactConsentEnabled
      npsLayout
      sentimentEnabled
      sentimentAccentColor
      sentimentExcludedPages
      sentimentLayout
    }
  }
`;

export const useFeedback = (): UsePlans => {
  const router = useRouter();

  const visitor: VisitorParams = {
    siteId: '' + router.query.site_id,
    visitorId: '' + router.query.visitor_id,
    sessionId: '' + router.query.session_id,
  };

  const { data, error, loading } = useQuery<{ feedback: Feedback }>(QUERY, {
    variables: visitor,
  });

  const fallback: Feedback = {
    id: null,
    npsEnabled: false,
    sentimentEnabled: false,
    sentimentExcludedPages: [],
  };

  return {
    loading,
    error: !!error,
    feedback: data ? data.feedback : fallback,
    visitor,
  };
};
