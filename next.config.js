const { API_HOST, NODE_ENV } = process.env;

const IS_DEV = NODE_ENV !== 'production';

const API_HOST_NAME = IS_DEV ? 'http://localhost:4000' : 'https://app.squeaky.ai';

const WEB_HOST_NAME = IS_DEV ? 'http://localhost:3000' : 'https://squeaky.ai';

module.exports = {
  publicRuntimeConfig: {
    apiHost: API_HOST_NAME,
    webHost: WEB_HOST_NAME,
    helpCenterUrl: 'https://squeaky.notion.site/Squeaky-Help-Centre-fc049a1822b94b7a8df362811c534d4b',
    helpCenterTrackingCodeUrl: 'https://squeaky.notion.site/Install-your-tracking-code-6ab27212bb5c434196f494ac43349b72',
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${API_HOST_NAME}/api/:slug*`,
        basePath: false,
      }
    ]
  }
};
