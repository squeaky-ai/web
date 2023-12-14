import React from 'react';
import { gql, useQuery } from '@apollo/client';
import type { Consent } from 'types/graphql';
import type { SupportedLanguages } from 'types/translations';
import { useQueryParams } from './use-query-params';

interface UseConsent {
  loading: boolean;
  error: boolean;
  consent: Consent;
  locale: SupportedLanguages;
  setLocale: (locale: SupportedLanguages) => void;
}

const GET_CONSENT_QUERY = gql`
  query GetConsent($siteId: String!) {
    siteSessionSettings(siteId: $siteId) {
      consent {
        id
        name
        consentMethod
        layout
        privacyPolicyUrl
        languages
        languagesDefault
      }
    }
  }
`;

export const useConsent = (): UseConsent => {
  const [query, skip] = useQueryParams();

  const [locale, setLocale] = React.useState<SupportedLanguages>(null);

  const { loading, error, data } = useQuery(GET_CONSENT_QUERY, {
    variables: {
      siteId: query.site_id as string,
    },
    skip
  });

  const fallback: Consent = {
    id: null,
    name: '',
    consentMethod: 'disabled',
    layout: 'bottom_left',
    privacyPolicyUrl: '',
    languages: ['en'],
    languagesDefault: 'en',
  };

  React.useEffect(() => {
    const userLocale = navigator.language.split('-')[0];

    if (!locale && data?.consent && data.consent.languages.includes(userLocale)) {
      setLocale(userLocale as SupportedLanguages);
    }
  }, [data?.consent?.languages]);

  return {
    loading,
    error: !!error,
    consent: data?.siteSessionSettings?.consent || fallback,
    locale,
    setLocale,
  };
};
