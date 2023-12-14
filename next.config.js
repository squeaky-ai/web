const { NODE_ENV } = process.env;

const IS_DEV = NODE_ENV !== 'production';

const WEB_HOST_NAME = IS_DEV ? 'http://squeaky.test' : 'https://squeaky.ai';

const APP_HOST_NAME = IS_DEV ? 'http://app.squeaky.test' : 'https://app.squeaky.ai';

const API_HOST_NAME = IS_DEV ? 'http://api.squeaky.test' : 'https://api.squeaky.ai';

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  publicRuntimeConfig: {
    dev: IS_DEV,
    apiHost: API_HOST_NAME,
    webHost: WEB_HOST_NAME,
    appHost: APP_HOST_NAME,
    helpCenterUrl: 'https://squeaky.notion.site/Squeaky-Help-Centre-fc049a1822b94b7a8df362811c534d4b',
    helpCenterTrackingCodeUrl: 'https://squeaky.notion.site/Install-your-tracking-code-6ab27212bb5c434196f494ac43349b72',
  },
  trailingSlash: true,
};
