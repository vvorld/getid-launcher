import { PageSideConfig, getLinkScriptResponse, GetIdWebSdkComponent } from './index';
import { version as packageVersion } from '../package.json';

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

let getScriptLink = async (apiUrl: string, flowName?: string, experimentalKey?: string): Promise<getLinkScriptResponse> => {
  let result: getLinkScriptResponse = { responseCode: 400 };
  try {
    const headers = { 'x-web-sdk-launcher-version': packageVersion };
    const url = new URL(`${apiUrl}/sdk/v2/script-link`);
    if (flowName) {
      url.searchParams.append('flowName', flowName);
    }
    if (experimentalKey) {
      url.searchParams.append('experimentalKey', experimentalKey);
    }
    result = await fetch(url.toString(), { headers }).then((res) => res.json());
    if (result.scriptLink) {
      getScriptLink = async () => result;
    }
  } catch (err) {
    console.error(err);
  }
  return result;
};

export function prepareScriptLink(scriptLink: string, { fallbackVersion, scriptSuffix, versionSuffix, defaultLink }: {
  fallbackVersion: string,
  scriptSuffix: string,
  versionSuffix: string,
  defaultLink: string,
  }) {
  if (!scriptLink) {
    return defaultLink;
  }
  const regExp = /(v[0-9]+(?:\.[0-9]+(?:\.[0-9]+)?)?)(-rc)?\.min.js/;

  const [, version = fallbackVersion, isRc = false] = scriptLink.match(regExp) || [];

  return scriptLink.replace(regExp, `${version}${versionSuffix}${isRc ? '-rc' : ''}${scriptSuffix}.min.js`);
}

function init(config: PageSideConfig): Promise<GetIdWebSdkComponent> {
  const fallbackVersion = process.env.FALLBACK_SDK_VERSION || 'v6';
  const scriptSuffix = process.env.SCRIPT_NAME_SUFFIX || '';
  const versionSuffix = process.env.VERSION_SUFFIX || '';
  const defaultLink = `https://cdn.getid.cloud/sdk/getid-web-sdk-${fallbackVersion}${versionSuffix}${scriptSuffix}.min.js`;

  return new Promise((res, rej) => {
    getScriptLink(config.apiUrl, config.flowName, config.experimentalKey).then(({ scriptLink = '' }) => {
      scriptLink = prepareScriptLink(scriptLink, {
        fallbackVersion,
        scriptSuffix,
        versionSuffix,
        defaultLink,
      });

      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.src = scriptLink;
      document.getElementsByTagName('body')[0].appendChild(script);
      script.onload = () => {
        if (window.getidWebSdk) {
          window.getidWebSdk.init(
            config
          ).then((result) => res(result))
          .catch((err) => rej(err));
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
