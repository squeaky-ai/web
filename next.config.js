const { API_HOST, NODE_ENV } = process.env;

const IS_DEV = NODE_ENV !== 'production';

// In production all the assets are served from S3/
// Cloudfront, but in development they are loaded from
// disk
const ASSET_PREFIX = IS_DEV ? '' : 'https://cdn.squeaky.ai/web';

// In production we point to the squeaky.ai/api but in
// development we use a local running instance
const API_HOST_NAME = API_HOST || 'http://localhost:4000';

// All of the meta tags in _document.tsx need to point to the
// correct host as it will be no good having localhost in
// production!
const WEB_HOST_NAME = IS_DEV ? 'http://localhost:3000' : 'https://squeaky.ai';

module.exports = {
  basePath: '/web',
  assetPrefix: ASSET_PREFIX,
  publicRuntimeConfig: {
    apiHost: API_HOST_NAME,
    webHost: WEB_HOST_NAME,
    helpCenterUrl: 'https://squeaky.notion.site/Squeaky-Help-Centre-fc049a1822b94b7a8df362811c534d4b',
    helpCenterTrackingCodeUrl: 'https://squeaky.notion.site/Install-your-tracking-code-6ab27212bb5c434196f494ac43349b72',
  },
  async rewrites() {
    return IS_DEV ? [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:4000/api/:slug*',
        basePath: false,
      }
    ] : [];
  }
};
