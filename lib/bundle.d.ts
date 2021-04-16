declare const init: (config: PageSideConfig, version?: Version) => void;

interface Profile {
  category: string,
  value: string
}

interface Metadata {
  externalId: string,
  labels: object,
}
interface JwtAuthorization extends  MainPageSideConfig{
  jwt: string,
}

interface SdkKyeAuthorization extends  MainPageSideConfig{
  sdkKey: string,
}

type PageSideConfig = JwtAuthorization | SdkKyeAuthorization;

interface MainPageSideConfig {
  apiUrl: string,
  containerId: string,
  flowName: string,
  metadata?: Metadata,
  mode?: 'popup' | 'inline',
  onFail?: (code: string) => void,
  onComplete?: (result: {applicationId: string, responseCode: number}) => void,
  profile?: Profile[],
  locale?: string,
  customerId?: string,
  injectCSS?: string, 
}

interface getLinkScriptResponse {
  responseCode: 400 | 200
  message?: string,
  scriptLink?: string,
}

interface GetidWebSdk {
  init: (config: PageSideConfig) => void
}

declare global {
  interface Window {
    getidWebSdk: GetidWebSdk
  }
}

type Version = 
  'v6' |
  'v6.0.0' |
  'v6.0.3' |
  'v6.1.0' |
  'v6.1.0-non-polyfills'

export { PageSideConfig, Version, getLinkScriptResponse, init };
