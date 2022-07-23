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
  query GetFeedback($siteId: String!, $locale: String!) {
    feedback(siteId: $siteId) {
      npsEnabled
      npsAccentColor
      npsSchedule
      npsPhrase
      npsFollowUpEnabled
      npsContactConsentEnabled
      npsLayout
      npsLanguages
      npsLanguagesDefault
      npsTranslations(userLocale: $locale)
      sentimentEnabled
      sentimentAccentColor
      sentimentExcludedPages
      sentimentLayout
    }
  }
`;

export const useFeedback = (): UsePlans => {
  const router = useRouter();

  const locale = (() => {
    try {
      return navigator.language.split('-')[0];
    } catch {
      return 'en';
    }
  })();

  const visitor: VisitorParams = {
    siteId: '' + router.query.site_id,
    visitorId: '' + router.query.visitor_id,
    sessionId: '' + router.query.session_id,
  };

  const { data, error, loading } = useQuery<{ feedback: Feedback }>(QUERY, {
    variables: {
      siteId: '' + router.query.site_id,
      locale,
    },
  });

  const fallback: Feedback = {
    id: null,
    npsEnabled: false,
    sentimentEnabled: false,
    sentimentExcludedPages: [],
    npsExcludedPages: [],
    npsTranslations: '{}',
    sentimentDevices: [],
    npsLanguages: ['en'],
    npsLanguagesDefault: 'en',
  };

  return {
    loading,
    error: !!error,
    feedback: data?.feedback || fallback,
    visitor,
  };
};
