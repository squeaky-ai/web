export enum SupportedLanguages {
  English = 'en',
  Czech = 'cs',
  Dutch = 'nl',
  German = 'de',
  French = 'fr',
  Swedish = 'se',
  Spanish = 'es',
}

export const countryNames: Record<SupportedLanguages, string> = {
  en: 'English',
  cs: 'Czech',
  de: 'German',
  nl: 'Dutch',
  fr: 'French (France)',
  se: 'Swedish',
  es: 'Spanish (Spain)',
};
