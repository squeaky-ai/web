import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import type { Feedback, SiteSessionSettings } from 'types/graphql';

interface UsePlans {
  loading: boolean;
  error: boolean;
  feedback: Feedback;
  demo: boolean;
  visitor: VisitorParams;
}

interface VisitorParams {
  siteId: string;
  visitorId: string;
  sessionId: string;
}

const QUERY = gql`
  query GetFeedback($siteId: String!) {
    siteSessionSettings(siteId: $siteId) {
      feedback {
        npsEnabled
        npsAccentColor
        npsSchedule
        npsPhrase
        npsFollowUpEnabled
        npsContactConsentEnabled
        npsLayout
        npsLanguages
        npsLanguagesDefault
        npsHideLogo
        sentimentEnabled
        sentimentAccentColor
        sentimentExcludedPages
        sentimentLayout
        sentimentHideLogo
        sentimentLanguages
        sentimentLanguagesDefault
      }
    }
  }
`;

const getThemeOverrides = (overrides?: string): Partial<Feedback> => {
  if (!overrides) return {};

  try {
    return JSON.parse(decodeURI(overrides));
  } catch (error) {
    console.error('Feedback overrides JSON is invalid: ', error);
    return {};
  };
};

export const useFeedback = (): UsePlans => {
  const router = useRouter();

  const visitor: VisitorParams = {
    siteId: '' + router.query.site_id,
    visitorId: '' + router.query.visitor_id,
    sessionId: '' + router.query.session_id,
  };

  const { data, error, loading } = useQuery<{ siteSessionSettings: SiteSessionSettings }>(QUERY, {
    variables: {
      siteId: '' + router.query.site_id,
    },
  });

  const fallback: Feedback = {
    id: null,
    npsEnabled: false,
    npsExcludedPages: [],
    npsHideLogo: false,
    npsLanguages: ['en'],
    npsLanguagesDefault: 'en',
    sentimentDevices: [],
    sentimentHideLogo: false,
    sentimentEnabled: false,
    sentimentExcludedPages: [],
    sentimentLanguages: ['en'],
    sentimentLanguagesDefault: 'en',
  };

  const feedback = data?.siteSessionSettings?.feedback || fallback;
  const overrides = getThemeOverrides(router.query.theme_overrides as string);

  return {
    loading,
    visitor,
    error: !!error,
    demo: router.query.demo === 'true',
    feedback: { ...feedback, ...overrides },
  };
};
