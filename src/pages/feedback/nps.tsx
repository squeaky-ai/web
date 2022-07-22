import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { range } from 'lib/utils';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { Radio } from 'components/radio';
import { TextArea } from 'components/textarea';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { createNps } from 'lib/api/graphql';
import { useFeedback } from 'hooks/use-feedback';
import { Replacements, t as translation } from 'lib/t';
import type { SqueakyPage } from 'types/page';

const steps = {
  START: 0,
  FOLLOW_UP: 1,
  CONTACT: 2,
  EMAIL: 3,
  CONFIRM: 4,
};

const NpsSchema = Yup.object().shape({
  score: Yup.string().required('Score is required'),
  comment: Yup.string(),
  contact: Yup.string(),
  email: Yup.string(),
});

const FeedbackNps: SqueakyPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [step, setStep] = React.useState<number>(0);

  const { feedback, visitor, loading } = useFeedback();

  const submitNps = async (values: Record<string, string>) => {
    const message = JSON.stringify({ 
      key: '__squeaky_submit_nps', 
      value: {}, 
    });

    window.parent.postMessage(message, '*');

    updateStep(steps.CONFIRM);

    await createNps({
      score: Number(values.score),
      comment: values.comment || null,
      contact: values.contact === '1',
      email: values.email || null,
      ...visitor,
    });
  };

  const updateStep = (step: number) => {
    const message = JSON.stringify({ 
      key: '__squeaky_set_step_nps', 
      value: { step }, 
    });

    window.parent.postMessage(message, '*');

    setStep(step);
  };

  const handleClose = () => {
    const message = JSON.stringify({ 
      key: '__squeaky_close_nps', 
      value: {} 
    });

    window.parent.postMessage(message, '*');
  };

  const t = (key: string, replacements?: Replacements) => translation(
    'feedback',
    key,
    replacements,
    feedback.npsLanguages,
    feedback.npsLanguagesDefault,
  );

  React.useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('style', `--nps-accent-color: ${feedback?.npsAccentColor};`);
    }
  }, [feedback?.npsAccentColor]);

  if (loading || !feedback.npsEnabled) {
    return null;
  }

  return (
    <>
      <div ref={ref} className='page feedback nps'>
        <Formik
          initialValues={{ score: null, comment: '', contact: '0', email: '' }}
          validationSchema={NpsSchema}
          onSubmit={(values, { setSubmitting }) => {
            (async () => {
              setSubmitting(false);
              submitNps(values);
            })();
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            submitForm,
            isSubmitting,
            values,
          }) => {
            const onScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event);

              if (!feedback.npsFollowUpEnabled) {
                setTimeout(() => submitForm(), 0);
                return;
              }

              if (!feedback.npsContactConsentEnabled) {
                return updateStep(steps.FOLLOW_UP);
              }

              updateStep(steps.CONTACT);
            };

            const onContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event);
              const enabled = event.target.value === '1';

              updateStep(enabled ? steps.EMAIL : steps.CONTACT);
            };
          
            return (
              <form className={`step-${step}`} onSubmit={handleSubmit}>
                <div className='ratings'>
                  <p className='title'>{t('how_likely_to_recommend', { name: feedback.npsPhrase })}</p>

                  <div className='likeliness'>
                    <div className='labels'>
                      <p>{t('not_likely')}</p>
                      <p>{t('extremely_likely')}</p>
                    </div>
                    <div className='values'>
                      {range(11).map(i => (
                        <Label key={i}>
                          <Input 
                            type='radio'
                            name='score' 
                            value={i} 
                            checked={values.score === i.toString()}  
                            onBlur={handleBlur}
                            onChange={onScoreChange}
                          />
                          <span>{i}</span>
                        </Label>
                      ))}
                    </div>
                  </div>
                  
                  {feedback.npsFollowUpEnabled && (
                    <div className='reason'>
                      <Label htmlFor='comment'>{t('what_is_the_main_reason')}</Label>
                      <TextArea 
                        placeholder='Please type here ...' 
                        name='comment' 
                        rows={2}
                        value={values.comment}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  
                  {feedback.npsContactConsentEnabled && (
                    <>
                      <div className='contact'>
                        <Label>{t('would_you_like_to_hear')}</Label>
                        <div className='radio-group'>
                          <Radio name='contact' value='1' checked={values.contact === '1'} onBlur={handleBlur} onChange={onContactChange}>
                            {t('yes')}
                          </Radio>
                          <Radio name='contact' value='0' checked={values.contact === '0'} onBlur={handleBlur} onChange={onContactChange}>
                            {t('no')}
                          </Radio>
                        </div>
                      </div>

                      <div className='details'>
                        <Label htmlFor='email'>{t('email_address')}</Label>
                        <Input
                          type='email'
                          name='email'
                          placeholder='e.g. jess@squeaky.ai' 
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}

                  <div className='footer'>
                    <div className='powered-by'>
                      <p>{t('powered_by')}</p>
                      <a href='https://squeaky.ai' target='_blank' rel='noreferrer'>
                        <Logo logo='dark' width={64} height={21} />
                      </a>
                    </div>

                    <Button type='submit' className='submit primary' disabled={isSubmitting}>
                      {t('submit')}
                    </Button>
                  </div>
                </div>

                <div className='confirm'>
                  <Icon name='checkbox-circle-line' />

                  <h4>{t('feedback_sent')}</h4>
                  <p>{t('thanks_for_sharing')}</p>

                  <Button className='close' type='button' onClick={handleClose}>
                    {t('close')}
                  </Button>
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </>
  );
};

FeedbackNps.getMetaData = () => ({
  title: 'Squeaky | Nps',
  description: 'Understand exactly how customers are using your website or web app, without invading their privacy.',
  index: false,
});

export default FeedbackNps;
