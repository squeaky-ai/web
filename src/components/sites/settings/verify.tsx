import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { Button } from 'components/button';
import { Icon } from 'components/icon';
import { verifySite } from 'lib/api/graphql';
import { useToasts } from 'hooks/use-toasts';
import type { Site } from 'types/graphql';

const { publicRuntimeConfig } = getConfig();

interface Props {
  site: Site;
}

export const Verify: FC<Props> = ({ site }) => {
  const toast = useToasts();
  const [failed, setFailed] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const siteVerify = async () => {
    setLoading(true);

    const { verifiedAt } = await verifySite({ siteId: site.id });

    if (!verifiedAt) {
      setFailed(true);
      toast.add({ type: 'error', body: 'The tracking code could not be found' });
    } else {
      setFailed(false);
      toast.add({ type: 'success', body: 'Your tracking code is verified and active.' });
    }

    setLoading(false);
  };

  return (
    <>
      {failed && (
        <div className='message error verification-failed'>
          <p className='heading'><Icon name='error-warning-line' /> <b>We were unable to verify your installation</b></p>
          <p>However, there&apos;s no need to worry!</p>
          <ul>
            <li>Firstly, please ensure you&apos;ve correctly copied the code above into the <code className='code'>&lt;head&gt;</code> section of your HTML and you&apos;ve published the changes to the web. If you need help with this step, please see our <Link href={publicRuntimeConfig.helpCenterTrackingCodeUrl}><a target='_blank' rel='noreferrer'>installation guides</a></Link>.</li>
            <li>Providing you&apos;ve successfully completed the step above, <b>we will automatically verify your installation</b> the moment your website&apos;s first session recording is received. This typically takes up to 30 minutes, but we&apos;ll email you the moment your first recording arrives.</li>
          </ul>
          <p>For more information, please check the <Link href={`${publicRuntimeConfig.helpCenterTrackingCodeUrl}#878428e23c96428a8defd1b2c171a7a4`}><a target='_blank' rel='noreferrer'>troubleshooting page</a></Link> in our help centre</p>
        </div>  
      )}

      <Button className='primary-app' onClick={siteVerify}>
        {loading 
          ? 'Verifying ...' 
          : site.verifiedAt ? 'Check Installation' : 'Verify Installation'
        }
      </Button>
    </>
  );
};
