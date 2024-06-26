import React from 'react';
import * as Yup from 'yup';
import classnames from 'classnames';
import { range } from 'lib/utils';
import { Formik } from 'formik';
import { Icon } from 'components/icon';
import { Logo } from 'components/logo';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { Rating } from 'components/ratings';
import { TextArea } from 'components/textarea';
import { Button } from 'components/button';
import { Select, Option } from 'components/select';
import { createSentiment } from 'lib/api/graphql';
import { useFeedback } from 'hooks/use-feedback';
import { useTranslations } from 'hooks/use-translations';
import { SupportedLanguages } from 'types/translations';
import type { SqueakyPage } from 'types/page';

const steps = {
  START: 0,
  COMMENT: 1,
  CONFIRM: 2,
};

const SentimentSchema = Yup.object().shape({
  score: Yup.string().required('Score is required'),
  comment: Yup.string(),
});

const FeedbackSentiment: SqueakyPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [step, setStep] = React.useState<number>(0);
  const [locale, setLocale] = React.useState<SupportedLanguages>(null);

  const { feedback, visitor, loading, demo } = useFeedback();

  const { t } = useTranslations(locale, 'sentiment');

  const handleClose = () => {
    const message = JSON.stringify({ 
      key: '__squeaky_close_sentiment', 
      value: {} 
    });

    window.parent.postMessage(message, '*');
  };

  const submitSentiment = async (values: Record<string, string>) => {
    setStep(steps.CONFIRM);

    if (demo) return;

    await createSentiment({
      score: Number(values.score),
      comment: values.comment || null,
      ...visitor,
    });
  };

  const onLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as SupportedLanguages);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('style', `--sentiment-accent-color: ${feedback?.sentimentAccentColor};`);
    }
  }, [loading, feedback?.sentimentAccentColor]);

  React.useEffect(() => {
    const userLocale = navigator.language.split('-')[0];

    if (!locale && feedback.npsLanguages.includes(userLocale)) {
      setLocale(userLocale as SupportedLanguages);
    }
  }, [feedback?.npsLanguages]);

  if (loading || (!demo && !feedback.sentimentEnabled)) {
    return null;
  }

  return (
    <>
      <div ref={ref} className='page feedback sentiment'>
        <Formik
          initialValues={{ score: null, comment: '' }}
          validationSchema={SentimentSchema}
          onSubmit={(values, { setSubmitting }) => {
            (async () => {
              setSubmitting(false);
              submitSentiment(values);
            })();
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
          }) => (
            <form className={`step-${step}`} onSubmit={handleSubmit}>
              <p className='title'>{t('how_would_you_rate')}</p>

              <div className='ratings'>
                {range(5).map(i => (
                  <Label key={i} className='rating'>
                    <Input 
                      type='radio' 
                      name='score' 
                      value={i}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event);
                        setStep(steps.COMMENT);
                      }}
                    />
                    <div className='image'>
                      <Rating rating={i} height={32} width={32} />
                    </div>
                  </Label>
                ))}
              </div>

              <TextArea 
                className='comment'
                name='comment'
                value={values.comment}
                placeholder={t('tell_us_about_your_experience')}
                rows={2}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <div className='footer'>
                <div className={classnames('powered-by', { hide: feedback.sentimentHideLogo })}>
                  <p>{t('powered_by')}</p>
                  <a href='https://squeaky.ai' target='_blank' rel='noreferrer'>
                    <Logo logo='dark' width={64} height={21} />
                  </a>
                </div>

                {step === steps.START && feedback.sentimentLanguages.length > 1 && (
                  <div className='locale'>
                    <Icon name='translate' className='translation-icon' />
                    <Select value={locale || feedback.sentimentLanguagesDefault} onChange={onLocaleChange}>
                      {feedback.sentimentLanguages.map(sentimentLanguage => (
                        <Option key={sentimentLanguage} value={sentimentLanguage}>
                          {sentimentLanguage}
                        </Option>
                      ))}
                    </Select>
                  </div>
                )}

                <Button type='submit' className='primary' disabled={isSubmitting}>
                  {t('send')}
                </Button>
              </div>

              <div className='confirm'>
                <Icon name='checkbox-circle-line' />

                <h4>{t('feedback_sent')}</h4>

                <p>{t('thank_you_for_sharing')}</p>

                <Button className='close' type='button' onClick={handleClose}>
                  {t('close')}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

FeedbackSentiment.getMetaData = () => ({
  title: 'Squeaky | Feedback',
  description: 'Understand exactly how customers are using your website or web app, without invading their privacy.',
  index: false,
});

export default FeedbackSentiment;
