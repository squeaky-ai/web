import React from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { range } from 'lodash';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { Label } from 'components/label';
import { TextArea } from 'components/textarea';
import { Logo } from 'components/logo';
import { Radio } from 'components/radio';
import { Input } from 'components/input';
import type { Feedback } from 'types/graphql';

interface Props {
  feedback: Omit<Feedback, 'id' | 'npsEnabled' | 'sentimentEnabled' | 'sentimentExcludedPages'>;
}

export const NpsPreview: FC<Props> = ({ feedback }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [page, setPage] = React.useState<number>(1);
  const [show, setShow] = React.useState<boolean>(false);
  const [contact, setContact] = React.useState<boolean>(false);

  const toggleShow = () => {
    setPage(0);
    setShow(!show);
  };

  const handleRatingChange = () => {
    if (page !== 0) return;

    setPage(feedback.npsFollowUpEnabled ? 1 : 2);
  };

  const handleNextPage = () => {
    if (page === 1 && !feedback.npsContactConsentEnabled) {
      return setPage(2);
    }

    if (page === 1 && !contact) {
      return setPage(2);
    }

    setPage(page + 1);
  };

  const handleClose = () => {
    setShow(false);
    setPage(0);
    setContact(false);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('style', `--nps-accent-color:${feedback.npsAccentColor};`);
    }
  });

  return (
    <>
      <Button type='button' className='icon secondary' onClick={toggleShow}>
        <Icon name='eye-line' />
        {show ? 'Hide' : 'Preview'}
      </Button>

      {show && (
        <div ref={ref} className={classnames('nps-preview', { boxed: feedback.npsLayout === 'boxed' })}>
          <div className='nps-wrapper'>
            <Button type='button' className='close' onClick={toggleShow}>
              <Icon name='close-line' />
            </Button>

            {page < 2 && (
              <div className={`page-${page}`}>
                <p className='heading'>How likely is it that you would recommend {feedback.npsPhrase} to a friend or colleague?</p>

                <div className='labels'>
                  <span>Not likely</span>
                  <span>Extremely likely</span>
                </div>

                <div className='options'>
                  {range(0, 10).map(i => (
                    <Label key={i} onClick={handleRatingChange}>
                      <input type='radio' name='rating' value={i} />
                      <span className='rating'>{i}</span>
                    </Label>
                  ))}
                </div>

                <div className='reason'>
                  <Label>What&apos;s the main reason for your score?</Label>
                  <TextArea placeholder='Please type here ...' />
                </div>
                
                {feedback.npsContactConsentEnabled && (
                  <div className='respond'>
                    <Label>Would you like to hear back from us regarding your feedback?</Label>
                    <div className='radio-group'>
                      <Radio name='contact' checked={contact} onChange={() => setContact(true)}>
                        Yes
                      </Radio>
                      <Radio name='contact' checked={!contact} onChange={() => setContact(false)}>
                        No
                      </Radio>
                    </div>
                  </div>
                )}

                {contact && (
                  <div className='email'>
                    <Label>Email address</Label>
                    <Input placeholder='e.g. jess@squeaky.ai' />
                  </div>
                )}

                <div className='footer'>
                  <p>
                    Powered by
                    <span className='logo'>
                      <Logo logo='dark' height={20} width={64} />
                    </span>
                  </p>
                  <Button type='button' className='primary-app' onClick={handleNextPage}>
                    Submit
                  </Button>
                </div>
              </div>
            )}

            {page === 2 && (
              <div className='page-2'>
                <Icon name='checkbox-circle-line' />
                <h4>Feedback sent</h4>
                <p>Thank you for sharing your feedback and helping to make our service better.</p>
                <Button type='button' className='secondary' onClick={handleClose}>
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
