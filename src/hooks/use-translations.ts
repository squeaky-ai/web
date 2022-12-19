import { SupportedLanguages } from 'types/translations';
import { ConsentTranslations, ConsentTranslationValues, consentTranslations } from 'translations/consent';
import { NpsTranslations, NpsTranslationValues, npsTranslations } from 'translations/nps';
import { SentimentTranslations, SentimentTranslationValues, sentimentTranslations } from 'translations/sentiment';

type Translations = ConsentTranslations | NpsTranslations | SentimentTranslations;
type TranslationsType = 'consent' | 'nps' | 'sentiment';

type TranslationResponse<T> = 
  T extends 'consent'   ? ConsentTranslationValues :
  T extends 'nps'       ? NpsTranslationValues :
  T extends 'sentiment' ? SentimentTranslationValues :
  never;

interface UseTranslations<T> {
  translations: TranslationResponse<T>,
  t: (key: keyof TranslationResponse<T>, replacements?: Record<string, string>) => string;
}

const getTranslationsForType = (type: TranslationsType): Translations => {
  switch(type) {
    case 'consent':
      return consentTranslations;
    case 'nps':
      return npsTranslations;
    case 'sentiment':
      return sentimentTranslations;
  }
};

export const useTranslations = <T extends TranslationsType>(
  locale: SupportedLanguages,
  type: T,
): UseTranslations<T> => {
  const allLocaleTranslations = getTranslationsForType(type);
  const translations = (allLocaleTranslations[locale] || allLocaleTranslations['en']) as TranslationResponse<T>

  const getTranslation = (
    key: keyof TranslationResponse<T>,
    replacements?: Record<string, string>
  ): string => {
    let value = translations[key] as string;

    if (replacements) {
      Object.entries(replacements).forEach(([key, val]) => {
        value = value.replaceAll(`%{${key}}`, val);
      });
    }

    return value;
  };

  return {
    translations,
    t: getTranslation,
  };
};
