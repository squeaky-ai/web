import type { SupportedLanguages } from 'types/translations';

export type FeedbackTranslationValues = {
  'how_likely_to_recommend': string,
  'not_likely': string,
  'extremely_likely': string,
  'what_is_the_main_reason': string,
  'would_you_like_to_hear': string,
  'yes': string,
  'no': string,
  'email_address': string,
  'submit': string,
  'feedback_sent': string,
  'thanks_for_sharing': string,
  'close': string,
  'powered_by': string,
  'please_type': string,
};

export type FeedbackTranslations = Record<
  SupportedLanguages, 
  FeedbackTranslationValues
>;

export const feedbackTranslations: FeedbackTranslations = {
  cs: {
    how_likely_to_recommend: 'Doporučili byste %{name} známým nebo kolegům?',
    not_likely: 'Určitě ne',
    extremely_likely: 'Určitě ano',
    what_is_the_main_reason: 'Jaký je důvod Vašeho hodnocení?',
    would_you_like_to_hear: 'Měli byste zájem o to, abychom se Vám ozvali ohledně Vašeho skóre?',
    yes: 'Ano',
    no: 'Ne',
    email_address: 'E-mailová adresa',
    submit: 'Odeslat',
    feedback_sent: 'Odesláno',
    thanks_for_sharing: 'Děkujeme za váš názor a vaši ochotu udělat naši službu lepší.',
    close: 'Zavřít',
    powered_by: 'Tento web pohání',
    please_type: 'Zadejte zde...',  
  },
  de: {
    how_likely_to_recommend: 'Wie wahrscheinlich ist es, dass Sie %{name} einem Freund oder Kollegen empfehlen würden?',
    not_likely: 'Unwahrscheinlich',
    extremely_likely: 'Sehr wahrscheinlich',
    what_is_the_main_reason: 'Was ist der Hauptgrund zu Ihrer Bewertung?',
    would_you_like_to_hear: 'Möchten Sie von uns eine Rückmeldung zu Ihrem Feedback erhalten?',
    yes: 'Ja',
    no: 'Nein',
    email_address: 'E-Mail Adresse',
    submit: 'Abschicken',
    feedback_sent: 'Feedback gesendet',
    thanks_for_sharing: 'Vielen Dank für Ihr Feedback und Ihre Hilfe bei der Verbesserung unseres Services.',
    close: 'Schließen',
    powered_by: 'Unterstützt von Squeaky',
    please_type: 'Bitte hier eingeben…',
  },
  en: {
    how_likely_to_recommend: 'How likely is it that you would recommend %{name} to a friend or colleague?',
    not_likely: 'Not likely',
    extremely_likely: 'Extremely likely',
    what_is_the_main_reason: 'What\'s the main reason for your score?',
    would_you_like_to_hear: 'Would you like to hear back from us regarding your feedback?',
    yes: 'Yes',
    no: 'No',
    email_address: 'Email address',
    submit: 'Submit',
    feedback_sent: 'Feedback sent',
    thanks_for_sharing: 'Thank you for sharing your feedback and helping to make our service better.',
    close: 'Close',
    powered_by: 'Powered by',
    please_type: 'Please type here...',
  },
  es: {
    how_likely_to_recommend: 'Cómo de probable es que recomiendes %{name} a un amigo or compañero?',
    not_likely: 'No es probable',
    extremely_likely: 'Muy probable',
    what_is_the_main_reason: 'Cuál es la razón principal de tu valoración?',
    would_you_like_to_hear: 'Podemos ponernos en contacto contigo con respecto a la valoración dada?',
    yes: 'Sí',
    no: 'No',
    email_address: 'Correo electrónico',
    submit: 'Enviar',
    feedback_sent: 'Enviar Observaciones',
    thanks_for_sharing: 'Gracias por mandar tus observaciones y por ayudarnos a crear un mejor servicio.',
    close: 'Cerrar',
    powered_by: 'Desarrollado por',
    please_type: 'Por favor escriba aquí...',
  },
  fr: {
    how_likely_to_recommend: 'Quelle est la probabilité que vous recommandiez %{name} à un ami ou collègue?',
    not_likely: 'Peu probable',
    extremely_likely: 'Extrêmement probable',
    what_is_the_main_reason: 'Quelle est la raison principale de votre score?',
    would_you_like_to_hear: 'Souhaitez-vous que nous prenions contact avec vous suite à votre retour d\',information?',
    yes: 'Oui',
    no: 'Non',
    email_address: 'Courriel',
    submit: 'Valider',
    feedback_sent: 'Commentaires envoyés',
    thanks_for_sharing: 'Merci d\'avoir partagé vos commentaires avec nous pour nous permettre d\'améliorer notre service.',
    close: 'Fermer',
    powered_by: 'Powered by',
    please_type: 'Écrivez ici…',
  },
  nl: {
    how_likely_to_recommend: 'Hoe aannemelijk is het dat je %{name} zou aanbevelen bij vrienden of collega\',s?',
    not_likely: 'Niet aannemelijk',
    extremely_likely: 'Zeer aannemelijk',
    what_is_the_main_reason: 'Wat is de belangrijkste reden voor je score?',
    would_you_like_to_hear: 'Wil je dat wij contact met je opnemen naar aanleiding van deze feedback?',
    yes: 'Ja',
    no: 'Nee',
    email_address: 'E-mailadres',
    submit: 'Indienen',
    feedback_sent: 'Feedback verzonden',
    thanks_for_sharing: 'Dank! Door jouw feedback kunnen we onze service verbeteren.',
    close: 'Sluiten',
    powered_by: 'Powered by',
    please_type: 'Typ hier…',
  },
  pl: {
    how_likely_to_recommend: 'Jak bardzo prawdopodobne jest, że polecisz %{name} swoim znajomym?',
    not_likely: 'Zdecydowanie nie polecę',
    extremely_likely: 'Zdecydowanie polecę',
    what_is_the_main_reason: 'Co w największym stopniu wpłynęło na Twoją ocenę?',
    would_you_like_to_hear: 'Czy chciałbyś usłyszeć od nas informację zwrotną dotyczącą Twojej opinii?',
    yes: 'Tak',
    no: 'Nie',
    email_address: 'Adres e-mail',
    submit: 'Wyślij',
    feedback_sent: 'Twoja opinia została wysłana',
    thanks_for_sharing: 'Dziękujemy za podzielenie się opinią i pomoc w ulepszeniu naszych usług.',
    close: 'Zamknij',
    powered_by: 'Powered by',
    please_type: 'Napisz wiadomość…',  
  },
  se: {
    how_likely_to_recommend: 'Hur troligt är det att du skulle rekommendera %{name} till en vän eller kollega',
    not_likely: 'Inte troligt',
    extremely_likely: 'Väldigt troligt',
    what_is_the_main_reason: 'Vad är den främsta anledningen till din poängsättning',
    would_you_like_to_hear: 'Vill du höra tillbaka från oss angående din feedback',
    yes: 'Ja',
    no: 'Nej',
    email_address: 'E-postadress',
    submit: 'Skicka',
    feedback_sent: 'Feedback skickat',
    thanks_for_sharing: 'Tack för din feedback. Detta hjälpa oss att förbättra våran tjänst',
    close: 'Stäng',
    powered_by: 'Powered by',
    please_type: 'Skriv här…',  
  },
};