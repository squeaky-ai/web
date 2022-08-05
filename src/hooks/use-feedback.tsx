import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import type { Feedback } from 'types/graphql';
import type { SupportedLanguages } from 'types/translations';

interface Props {
  locale?: SupportedLanguages;
}

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
      npsHideLogo
      sentimentEnabled
      sentimentAccentColor
      sentimentExcludedPages
      sentimentLayout
      sentimentHideLogo
    }
  }
`;

export const useFeedback = (props: Props): UsePlans => {
  const router = useRouter();

  const visitor: VisitorParams = {
    siteId: '' + router.query.site_id,
    visitorId: '' + router.query.visitor_id,
    sessionId: '' + router.query.session_id,
  };

  const { data, error, loading } = useQuery<{ feedback: Feedback }>(QUERY, {
    variables: {
      siteId: '' + router.query.site_id,
      locale: props.locale || 'en',
    },
  });

  const fallback: Feedback = {
    id: null,
    npsEnabled: false,
    npsExcludedPages: [],
    npsTranslations: '{}',
    npsHideLogo: false,
    npsLanguages: ['en'],
    npsLanguagesDefault: 'en',
    sentimentDevices: [],
    sentimentHideLogo: false,
    sentimentEnabled: false,
    sentimentExcludedPages: [],
  };

  return {
    loading,
    error: !!error,
    feedback: data?.feedback || fallback,
    visitor,
  };
};
