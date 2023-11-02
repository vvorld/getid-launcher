import { prepareScriptLink } from './launcher';

const options = {
  fallbackVersion: 'v7',
  scriptSuffix: '',
  versionSuffix: '',
  defaultLink: 'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js',
};
const scriptSuffix = '-non-polyfills';
const versionSuffix = '-kl';

const optionsWithScriptSuffix = {
  ...options,
  scriptSuffix,
};

const optionsWithSuffixes = {
  ...options,
  scriptSuffix,
  versionSuffix,
};

describe('scriptLink w/o suffixes', () => {
  it('should return defaultLink if scriptLink is falsy', () => {
    const result = prepareScriptLink(null, options);
    expect(result).toEqual('https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js');
  });

  it('should return same version v7', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js'
    );
  });

  it('should return same version v7.12', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.min.js'
    );
  });

  it('should return same version v7.12.13', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13.min.js'
    );
  });

  it('should return same version v7 RC', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-rc.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-rc.min.js'
    );
  });

  it('should return same version v7.12 RC', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12-rc.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12-rc.min.js'
    );
  });

  it('should return same version v7.12.13 RC', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13-rc.min.js';
    const result = prepareScriptLink(scriptLink, options);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13-rc.min.js'
    );
  });
});

describe('scriptLink with scriptSuffix', () => {
  it('should return defaultLink if scriptLink is falsy', () => {
    const result = prepareScriptLink(null, options);
    expect(result).toEqual('https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js');
  });

  it('should add scriptSuffix v7 rc version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-rc-non-polyfills.min.js'
    );
  });

  it('should add scriptSuffix v7 version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-non-polyfills.min.js'
    );
  });

  it('should add scriptSuffix v7.13 version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13-non-polyfills.min.js'
    );
  });

  it('should add scriptSuffix v7.13 rc version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13-rc-non-polyfills.min.js'
    );
  });

  it('should add scriptSuffix v7.13.5 version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13.5.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13.5-non-polyfills.min.js'
    );
  });
  it('should add scriptSuffix v7.13.5 rc version', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13.5-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithScriptSuffix);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.13.5-rc-non-polyfills.min.js'
    );
  });
});

describe('scriptLink with suffixes', () => {
  it('should return defaultLink if scriptLink is falsy', () => {
    const result = prepareScriptLink(null, options);
    expect(result).toEqual('https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js');
  });

  it('should add suffixes to v7', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-kl-non-polyfills.min.js'
    );
  });
  it('should add suffixes to v7 rc', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-kl-rc-non-polyfills.min.js'
    );
  });
  it('should add suffixes to v7.12', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12-kl-non-polyfills.min.js'
    );
  });
  it('should add suffixes to v7.12 rc', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12-kl-rc-non-polyfills.min.js'
    );
  });
  it('should add suffixes to v7.12.13', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13-kl-non-polyfills.min.js'
    );
  });
  it('should add suffixes to v7.12.13 rc', () => {
    const scriptLink =
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13-rc.min.js';
    const result = prepareScriptLink(scriptLink, optionsWithSuffixes);
    expect(result).toEqual(
      'https://cdn.getid.cloud/sdk/getid-web-sdk-v7.12.13-kl-rc-non-polyfills.min.js'
    );
  });
});

describe('other cases', () => {
  const prVersion = 'https://cdn.getid.cloud/sdk/getid-web-sdk-v7-pr-456.min.js';
  it('should leave pr version as is', () => {
    const result = prepareScriptLink(prVersion, options);
    expect(result).toEqual(prVersion);
  });
  it('should leave pr version as is when scriptSuffix is present', () => {
    const result = prepareScriptLink(prVersion, optionsWithScriptSuffix);
    expect(result).toEqual(prVersion);
  });
  it('should leave pr version as is when all suffixes are present', () => {
    const result = prepareScriptLink(prVersion, optionsWithSuffixes);
    expect(result).toEqual(prVersion);
  });
});
