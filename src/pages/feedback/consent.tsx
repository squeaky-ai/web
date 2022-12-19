import React from 'react';
import classnames from 'classnames';
import { Icon } from 'components/icon';
import { Select, Option } from 'components/select';
import { useConsent } from 'hooks/use-consent';
import { Button } from 'components/button';
import { useTranslations } from 'hooks/use-translations';
import type { SqueakyPage } from 'types/page';
import type { SupportedLanguages } from 'types/translations';

const FeedbackConsent: SqueakyPage = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [expand, setExpand] = React.useState<boolean>(false);

  const toggleExpand = () => setExpand(!expand);

  const { loading, error, consent, locale, setLocale } = useConsent();

  const { t } = useTranslations(locale, 'consent');

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      handleSetHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(ref.current);
  }, []);

  const onLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as SupportedLanguages);
  };

  const handleConsent = () => {
    const message = JSON.stringify({ 
      key: '__squeaky_accept_consent', 
      value: {} 
    });

    window.parent.postMessage(message, '*');
  };

  const handleReject = () => {
    const message = JSON.stringify({ 
      key: '__squeaky_reject_consent', 
      value: {} 
    });

    window.parent.postMessage(message, '*');
  };

  const handleSetHeight = (height: number) => {
    const message = JSON.stringify({ 
      key: '__squeaky_set_height_consent', 
      value: { height: height + 48 } 
    });

    window.parent.postMessage(message, '*');
  };

  return (
    <div ref={ref} className='page feedback consent'>
      {!loading && !error && (
        <>
          <h5>{t('privacy_friendly_analytics')}</h5>
          <p>{t('we_use_squeaky', { name: consent.name })}</p>
          <p dangerouslySetInnerHTML={{ __html: t('set_consent_preferemces', { privacy_policy_url: consent.privacyPolicyUrl }) }}></p>

          {consent.languages.length > 1 && (
            <div className='locale'>
              <Icon name='translate' className='translation-icon' />
              <Select value={locale || consent.languagesDefault} onChange={onLocaleChange}>
                {consent.languages.map(languages => (
                  <Option key={languages} value={languages}>
                    {languages}
                  </Option>
                ))}
              </Select>
            </div>
          )}

          <Button type='button' className={classnames('link', { expand })} onClick={toggleExpand}>
            {t('what_makes_squeaky_different')}
            <Icon name='arrow-drop-down-line' />
          </Button>

          {expand && (
            <ul>
              <li>{t('no_cookies')}</li>
              <li>{t('never_sold')}</li>
              <li>{t('data_capture_features')}</li>
              <li>{t('visitors_are_anonymous')}</li>
              <li>{t('data_in_eu')}</li>
            </ul>
          )}

          <div className='actions'>
            <Button className='primary' onClick={handleConsent}>
              {t('accept')}
            </Button>
            <Button className='secondary' onClick={handleReject}>
              {t('reject')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

FeedbackConsent.getMetaData = () => ({
  title: 'Squeaky | Consent',
  description: 'Understand exactly how customers are using your website or web app, without invading their privacy.',
  index: false,
});

export default FeedbackConsent;
