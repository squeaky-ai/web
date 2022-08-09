const { API_HOST, NODE_ENV } = process.env;

const IS_DEV = NODE_ENV !== 'production';

// In production all the assets are served from S3/
// Cloudfront, but in development they are loaded from
// disk
const ASSET_PREFIX = IS_DEV ? '' : 'https://cdn.squeaky.ai/web';

// In production we point to the squeaky.ai/api but in
// development we use a local running instance
const API_HOST_NAME = API_HOST || 'http://localhost:3333';

// All of the meta tags in _document.tsx need to point to the
// correct host as it will be no good having localhost in
// production!
const WEB_HOST_NAME = IS_DEV ? 'http://localhost:3333' : 'https://squeaky.ai';

module.exports = {
  assetPrefix: ASSET_PREFIX,
  crossOrigin: 'anonymous',
  strictMode: true,
  publicRuntimeConfig: {
    dev: IS_DEV,
    apiHost: API_HOST_NAME,
    webHost: WEB_HOST_NAME,
    helpCenterUrl: 'https://squeaky.notion.site/Squeaky-Help-Centre-fc049a1822b94b7a8df362811c534d4b',
    helpCenterTrackingCodeUrl: 'https://squeaky.notion.site/Install-your-tracking-code-6ab27212bb5c434196f494ac43349b72',
  },
  async rewrites() {
    return IS_DEV 
      ? [
        {
          source: '/api/:slug*',
          destination: 'http://localhost:3333/api/:slug*',
          basePath: false,
        }
      ] 
      // Because Lewis is an idiot and forgot about spaces
      : [
        {
          source: '/blog/product%20updates',
          destination: '/blog/product-updates',
        },
        {
          source: '/blog/product%20updates/product-update-q2-2022',
          destination: '/blog/product-updates/product-update-q2-2022',
        }
      ];
  }
};
