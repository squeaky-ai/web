import type { SupportedLanguages } from 'types/translations';

export type SentimentTranslationValues = {
  'feedback': string,
  'how_would_you_rate': string,
  'tell_us_about_your_experience': string,
  'send': string,
  'feedback_sent': string,
  'thank_you_for_sharing': string,
  'close': string,
  'powered_by': string,
};

export type SentimentTranslations = Record<
  SupportedLanguages, 
  SentimentTranslationValues
>;

export const sentimentTranslations: SentimentTranslations = {
  cs: {
    feedback: 'Zpětná vazba',
    how_would_you_rate: 'Jak byste ohodnotil Vaši zkušenost?',
    tell_us_about_your_experience: 'Popište Vaši zkušenost...',
    send: 'Odeslat',
    feedback_sent: 'Odesláno',
    thank_you_for_sharing: 'Děkujeme za Váš názor a ochotu zlepšit naši službu.',
    close: 'Zavřít',
    powered_by: 'Zajišťuje',
  },
  de: {
    feedback: 'Feedback',
    how_would_you_rate: 'Wie würden Sie Ihre Erfahrung bewerten?',
    tell_us_about_your_experience: 'Erzählen Sie uns von Ihrer Erfahrung...',
    send: 'Senden',
    feedback_sent: 'Feedback gesendet',
    thank_you_for_sharing: 'Vielen Dank für Ihr Feedback und Ihre Hilfe bei der Verbesserung unseres Services.',
    close: 'Schließen',
    powered_by: 'Unterstützt von Squeaky',
  },
  en: {
    feedback: 'Feedback',
    how_would_you_rate: 'How would you rate your experience?',
    tell_us_about_your_experience: 'Tell us about your experience...',
    send: 'Send',
    feedback_sent: 'Feedback sent',
    thank_you_for_sharing: 'Thank you for sharing your feedback and helping to make our service better.',
    close: 'Close',
    powered_by: 'Powered by',
  },
  es: {
    feedback: 'Feedback',
    how_would_you_rate: '¿Cómo calificarías tu experiencia?',
    tell_us_about_your_experience: 'Cuéntanos tu experiencia...',
    send: 'Enviar',
    feedback_sent: 'Enviar Observaciones',
    thank_you_for_sharing: 'Gracias por mandar tus observaciones y por ayudarnos a crear un mejor servicio.',
    close: 'Cerrar',
    powered_by: 'Desarrollado por',
  },
  fr: {
    feedback: 'Commentaires',
    how_would_you_rate: 'Comment évaluez-vous votre expérience?',
    tell_us_about_your_experience: 'Racontez-nous votre expérience...',
    send: 'Envoyer',
    feedback_sent: 'Commentaires envoyés',
    thank_you_for_sharing: 'Merci d\'avoir partagé vos commentaires avec nous pour nous permettre d\'améliorer notre service.',
    close: 'Fermer',
    powered_by: 'Powered by',
  },
  nl: {
    feedback: 'Feedback',
    how_would_you_rate: 'Hoe was je bezoek aan onze website?',
    tell_us_about_your_experience: 'Vertel ons meer over je ervaring...',
    send: 'Verstuur',
    feedback_sent: 'Feedback verzonden',
    thank_you_for_sharing: 'Dank! Door jouw feedback kunnen we onze service verbeteren.',
    close: 'Sluiten',
    powered_by: 'Powered by',
  },
  pl: {
    feedback: 'Feedback',
    how_would_you_rate: 'Jak oceniasz swoje doświadczenie?',
    tell_us_about_your_experience: 'Opowiedz nam o swoim doświadczeniu...',
    send: 'Wyślij',
    feedback_sent: 'Twoja opinia została wysłana',
    thank_you_for_sharing: 'Dziękujemy za podzielenie się opinią i pomoc w ulepszeniu naszych usług.',
    close: 'Zamknij',
    powered_by: 'Powered by',
  },
  se: {
    feedback: 'Feedback',
    how_would_you_rate: 'Hur skulle du betygsätta din erfarenhet?',
    tell_us_about_your_experience: 'Berätta om din erfarenhet...',
    send: 'Skicka',
    feedback_sent: 'Feedback skickat',
    thank_you_for_sharing: 'Tack för din feedback. Detta hjälpa oss att förbättra våran tjänst',
    close: 'Stäng',
    powered_by: 'Powered by',
  },
};
