import React from 'react';
import type { FC } from 'react';
import getConfig from 'next/config';
import Script from 'next/script';
import type { User as UserType } from 'types/graphql';
import { usePoll } from 'hooks/use-poll';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();

const { dev = false } = publicRuntimeConfig;

interface Props {
  user: UserType;
  children: React.ReactNode;
}

export const User: FC<Props> = ({ children, user }) => {
  const router = useRouter();

  const isFeedback = router.pathname.startsWith('/feedback');

  const loaded = usePoll(() => {
    return window.hasOwnProperty('squeaky');
  });

  React.useEffect(() => {
    if (!user || !loaded) return;

    const { id, firstName, lastName, email, superuser, createdAt } = user;

    window.squeaky.identify(id, {
      'name': `${firstName} ${lastName}`,
      'email': email,
      'superuser': superuser ? 'Yes' : 'No',
      'created': new Date(createdAt).toLocaleDateString(),
    });
  }, [loaded]);

  if (isFeedback) {
    return <>{children}</>;
  }

  return (
    <>
      <Script
        id='intercom-settings'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: `
          window.intercomSettings = {
            api_base: 'https://api-iam.intercom.io',
            app_id: 'opustw9o',
          };
        `}} 
      />
      <Script 
        id='squeaky-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: dev ? '' : `
          (function(s,q,e,a,u,k,y){
            s._sqSettings={site_id:'2918cf0f-42aa-499d-a4da-d362bd1011ed'};
            u=q.getElementsByTagName('head')[0];
            k=q.createElement('script');
            k.src=e+s._sqSettings.site_id;
            u.appendChild(k);
          })(window,document,'https://cdn.squeaky.ai/g/0.4.0/script.js?');
        `}}
      />
      <Script
        id='intercom-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: dev ? '' : `
          // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/opustw9o'
          (function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', w.intercomSettings); } else { var d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/opustw9o'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (document.readyState === 'complete') { l(); } else if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })();
        `}} 
      />
      {children}
    </>
  );
};