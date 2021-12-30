import { PageSideConfig, getLinkScriptResponse, Version, GetIdWebSdkComponent } from './index';

const createPublicTokenProvider = (apiUrl: string, apiKey: string) => async () => {
  if (!apiUrl) {
    throw new Error('Missing api url');
  }
  if (!apiKey) {
    throw new Error('Missing api key');
  }
  const result = await fetch(`${apiUrl}/sdk/v2/token`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-sdk-key': apiKey,
    },
  });
  return result.json();
};

function getScriptLink(apiUrl: string): Promise<getLinkScriptResponse> {
  return fetch(`${apiUrl}/sdk/v2/script-link`, {
    }).then((res) => res.json()).catch((err) => console.log(err));
}

function init (config: PageSideConfig, version: Version = 'v6'): Promise<GetIdWebSdkComponent> {
  const defaultLink = `https://cdn.getid.cloud/sdk/getid-web-sdk-${version}.min.js`;

  return new Promise((res, rej) => {
    getScriptLink(config.apiUrl).then(({ scriptLink = defaultLink }) => {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.src = scriptLink;
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
