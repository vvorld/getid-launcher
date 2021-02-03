const createPublicTokenProvider = (apiUrl, apiKey) => () => {
  if (!apiUrl) {
    throw new Error('Missing api url');
  }
  if (!apiKey) {
    throw new Error('Missing api key');
  }
  return fetch(`${apiUrl}/sdk/v1/token`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      apiKey,
    },
  }).then((res) => res.json());
};

const defaultLink = 'https://cdn.getid.cloud/sdk/getid-web-sdk-v6.min.js';

function getScriptLink(apiUrl) {
  try {
    return fetch(`${apiUrl}/sdk/v1/script-link`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then((res) => res.json());
  } catch (e) {
    return { };
  }
}

const init = (containerId, sdkKey, originCfg, ...args) => {
  const cfg = {
    containerId,
    sdkKey,
    ...originCfg,
    ...args,
  };

  getScriptLink(cfg.apiUrl).then(({ scriptLink = defaultLink }) => {
    const script = document.createElement('script');
    script.setAttribute('async', '');
    const { origin, pathname } = new URL(scriptLink);
    const updatedPath = pathname.split('/');
    updatedPath.splice(updatedPath.length - 1, 1, 'getid-web-sdk-v6.min.js');
    const { href } = new URL(updatedPath.join('/'), origin);
    script.src = href;
    document.getElementsByTagName('body')[0].appendChild(script);
    script.onload = () => {
      if (window.getidWebSdk) {
        window.getidWebSdk.init(
          cfg
        );
      }
    };
  });
};

export { init, createPublicTokenProvider };
