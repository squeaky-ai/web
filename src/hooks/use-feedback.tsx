import { gql, useQuery } from '@apollo/client';
import type { Feedback, SiteSessionSettings } from 'types/graphql';
import { useQueryParams } from './use-query-params';

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
  const [query, skip] = useQueryParams();

  const visitor: VisitorParams = {
    siteId: '' + query.site_id,
    visitorId: '' + query.visitor_id,
    sessionId: '' + query.session_id,
  };

  const { data, error, loading } = useQuery<{ siteSessionSettings: SiteSessionSettings }>(QUERY, {
    variables: {
      siteId: '' + query.site_id,
    },
    skip,
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
  const overrides = getThemeOverrides(query.theme_overrides as string);

  return {
    loading,
    visitor,
    error: !!error,
    demo: query.demo === 'true',
    feedback: { ...feedback, ...overrides },
  };
};
