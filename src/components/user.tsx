import React from 'react';
import type { FC } from 'react';
import getConfig from 'next/config';
import Script from 'next/script';
import type { User as UserType } from 'types/graphql';
import { usePoll } from 'hooks/use-poll';

const { publicRuntimeConfig } = getConfig();

const { dev = false } = publicRuntimeConfig;

interface Props {
  user: UserType;
}

export const User: FC<Props> = ({ children, user }) => {
  const loaded = usePoll(() => {
    return window.hasOwnProperty('squeaky');
  });

  React.useEffect(() => {
    if (!user || !loaded) return;

    const { id, firstName, lastName, email, superuser, createdAt } = user;

    window.squeaky.identify(id, {
      'first_name': firstName,
      'last_name': lastName,
      'email': email,
      'superuser': superuser ? 'Yes' : 'No',
      'created_at': new Date(createdAt).toLocaleDateString(),
    });
  }, [loaded]);

  return (
    <>
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
      {children}
    </>
  );
};