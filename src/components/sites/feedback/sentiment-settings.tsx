import React from 'react';
import type { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Icon } from 'components/icon';
import { Toggle } from 'components/toggle';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';
import { useFeedback } from 'hooks/use-feedback';
import { feedbackUpdate } from 'lib/api/graphql';
import { Radio } from 'components/radio';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { Container } from 'components/container';
import { HEX_REGEX } from 'data/common/constants';
import { SentimentPreview } from 'components/sites/feedback/sentiment-preview';
import { useToasts } from 'hooks/use-toasts';
import type { FeedbackUpdateInput } from 'types/graphql';
import type { Site } from 'types/graphql';
import { SentimentPages } from 'components/sites/feedback/sentiment-pages';

interface Props {
  site: Site;
}

const DEFAULT_COLORS = ['#0768C1', '#F96155', '#8249FB', '#001A39'];

const SentimentSchema = Yup.object().shape({
  sentimentAccentColor: Yup.string().matches(HEX_REGEX, 'Accent color is requied'),
  sentimentExcludedPages: Yup.array(),
  sentimentLayout: Yup.string().oneOf(['right_middle', 'right_bottom', 'left_middle', 'left_bottom'], 'Please select a layout type'),
});

export const SentimentSettings: FC<Props> = ({ site }) => {
  const toasts = useToasts();
  const { loading, error, feedback } = useFeedback();

  const onUpdate = async (input: Partial<FeedbackUpdateInput>): Promise<void> => {
    await feedbackUpdate({
      siteId: site.id,
      ...input,
    });
  };

  const onToggleEnableSentiment = async () => {
    await onUpdate({ sentimentEnabled: !feedback.sentimentEnabled });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className='sentiment-settings'>
      <Toggle checked={feedback.sentimentEnabled} onChange={onToggleEnableSentiment}>
        Use Sentiment Survey
      </Toggle>

      {feedback.sentimentEnabled && (
        <Container className='md'>
          <Formik
            initialValues={{ 
              sentimentAccentColor: feedback.sentimentAccentColor || '#0768C1', 
              sentimentExcludedPages: feedback.sentimentExcludedPages || [],
              sentimentLayout: feedback.sentimentLayout || 'right_middle',
            }}
            validationSchema={SentimentSchema}
            onSubmit={(values, { setSubmitting }) => {
              (async () => {
                const params: Pick<
                  FeedbackUpdateInput, 
                  'sentimentAccentColor' | 
                  'sentimentExcludedPages' | 
                  'sentimentLayout'
                > = {
                  sentimentAccentColor: values.sentimentAccentColor,
                  sentimentExcludedPages: values.sentimentExcludedPages,
                  sentimentLayout: values.sentimentLayout,
                };
                
                try {
                  await onUpdate(params);
                  toasts.add({ type: 'success', body: 'Sentiment settings updated successfully' });
                } catch {
                  toasts.add({ type: 'error', body: 'There was an issue updating the settings' });
                } finally {
                  setSubmitting(false);
                }
              })();
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              errors,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>
                <h4>Accent colour</h4>

                <p>Set an accent colour for the survey by using the preset colours below, or defining your own custom colour by checking the box and enter a hex code.</p>

                <div className='colors'>
                  <Radio 
                    name='sentimentAccentColor'
                    className='color-radio' 
                    value='#0768C1' 
                    checked={values.sentimentAccentColor === '#0768C1'}
                    onChange={handleChange}
                  >
                    <div className='color blue'>
                      <Icon name='check-line' />
                    </div>
                  </Radio>
                  <Radio 
                    name='sentimentAccentColor'
                    className='color-radio' 
                    value='#F96155' 
                    checked={values.sentimentAccentColor === '#F96155'}
                    onChange={handleChange}
                  >
                    <div className='color rose'>
                      <Icon name='check-line' />
                    </div>
                  </Radio>
                  <Radio
                    name='sentimentAccentColor'
                    className='color-radio' 
                    value='#8249FB' 
                    checked={values.sentimentAccentColor === '#8249FB'}
                    onChange={handleChange}
                  >
                    <div className='color purple'>
                      <Icon name='check-line' />
                    </div>
                  </Radio>
                  <Radio
                    name='sentimentAccentColor'
                    className='color-radio' 
                    value='#001A39' 
                    checked={values.sentimentAccentColor === '#001A39'}
                    onChange={handleChange}
                  >
                    <div className='color gray'>
                      <Icon name='check-line' />
                    </div>
                  </Radio>

                  <p>- or - </p>

                  <Radio 
                    readOnly
                    checked={!DEFAULT_COLORS.includes(values.sentimentAccentColor)}
                  />
                  <Input 
                    name='sentimentAccentColor'
                    className='hex'
                    placeholder='e.g. #32D05F' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={DEFAULT_COLORS.includes(values.sentimentAccentColor) ? '' : values.sentimentAccentColor}
                    invalid={touched.sentimentAccentColor && !!errors.sentimentAccentColor}
                  />
                </div>

                <h4>Visibility</h4>

                <p>By default <b>your feedback widget will display on all pages</b> of your site, if you&apos;d like to hide the widget on any specific pages you can check the boxes for them below.</p>

                <p><b>Hide feedback widget on:</b></p>

                <SentimentPages 
                  value={values.sentimentExcludedPages}
                  onChange={handleChange}
                />

                <h4>Position</h4>

                <p>Use the options below to determine where the feedback widget is positioned on the page.</p>

                <div className='radio-group'>
                  <Radio
                    name='sentimentLayout'
                    value='right_middle'
                    onChange={handleChange}
                    checked={values.sentimentLayout === 'right_middle'}
                  >
                    Right middle
                  </Radio>
                  <Radio
                    name='sentimentLayout'
                    value='right_bottom'
                    onChange={handleChange}
                    checked={values.sentimentLayout === 'right_bottom'}
                  >
                    Right bottom
                  </Radio>
                  <Radio
                    name='sentimentLayout'
                    value='left_middle'
                    onChange={handleChange}
                    checked={values.sentimentLayout === 'left_middle'}
                  >
                    Left middle
                  </Radio>
                  <Radio
                    name='sentimentLayout'
                    value='left_bottom'
                    onChange={handleChange}
                    checked={values.sentimentLayout === 'left_bottom'}
                  >
                    Left bottom
                  </Radio>
                </div>

                <div className='actions'>
                  <Button disabled={isSubmitting || !isValid} type='submit' className='primary-app'>
                    Save Changes
                  </Button>

                  <SentimentPreview feedback={values} />
                </div>
              </form>
            )}
          </Formik>
        </Container>
      )}
    </div>
  );
};
