import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import type { Consent } from 'types/graphql';
import type { SupportedLanguages } from 'types/translations';

interface UseConsent {
  loading: boolean;
  error: boolean;
  consent: Consent;
  locale: SupportedLanguages;
  setLocale: (locale: SupportedLanguages) => void;
}

const GET_CONSENT_QUERY = gql`
  query GetConsent($siteId: String!, $locale: String!) { 
    consent(siteId: $siteId) {
      id
      name
      consentMethod
      layout
      privacyPolicyUrl
      languages
      languagesDefault
      translations(userLocale: $locale)
    }
  }
`;

export const useConsent = (): UseConsent => {
  const router = useRouter();

  const [locale, setLocale] = React.useState<SupportedLanguages>(null);

  const { loading, error, data } = useQuery(GET_CONSENT_QUERY, {
    variables: {
      siteId: router.query.site_id as string,
      locale: locale || 'en',
    }
  });

  const fallback: Consent = {
    id: null,
    name: '',
    consentMethod: 'disabled',
    layout: 'bottom_left',
    privacyPolicyUrl: '',
    translations: '{}',
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
    consent: data?.consent || fallback,
    locale,
    setLocale,
  };
};
