import { PageSideConfig, getLinkScriptResponse, Version, GetIdWebSdkComponent } from './index';
import { latestVersion } from './latest-version';

const createPublicTokenProvider = (apiUrl: string, apiKey: string) => async () => {
  if (!apiUrl) {
    throw new Error('Missing api url');
  }
  if (!apiKey) {
    throw new Error('Missing api key');
  }
  const result = await fetch(`${apiUrl}/sdk/v1/token`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      apiKey,
    },
  });
  return result.json();
};

const defaultLink = 'https://cdn.getid.cloud/sdk/getid-web-sdk-v6.min.js';

function getScriptLink(apiUrl: string): Promise<getLinkScriptResponse> {
  return fetch(`${apiUrl}/sdk/v1/script-link`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then((res) => res.json()).catch((err) => console.log(err));
}

function init (config: PageSideConfig, version: Version = 'v6'): Promise<GetIdWebSdkComponent> {
  return new Promise((res, rej) => {
    getScriptLink(config.apiUrl).then(({ scriptLink = defaultLink }) => {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      const { origin, pathname } = new URL(scriptLink);
      const updatedPath = pathname.split('/');
      updatedPath.splice(updatedPath.length - 1, 1, `getid-web-sdk-${version}.min.js`);
      const { href } = new URL(updatedPath.join('/'), origin);
      script.src = href;
      document.getElementsByTagName('body')[0].appendChild(script);
      script.onload = () => {
        if (window.getidWebSdk) {
          window.getidWebSdk.init(
            config
          ).then((result) => res(result));
        }
      };
      script.onerror = (err) => rej(err);
    }).catch((err) => {
      console.log(err);
      rej(err);
    });
  });
}

export { init, createPublicTokenProvider };
