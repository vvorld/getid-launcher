declare const init: (config: PageSideConfig) => void;

interface Profile {
  category: string,
  value: string
}

interface Metadata {
  externalId: string,
  labels: object,
}

interface PageSideConfig {
  apiUrl: string,
  sdkKey: string,
  jwt: string,
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
  init: (config: object) => void
}

declare global {
  interface Window {
    getidWebSdk: GetidWebSdk
  }
}

export { PageSideConfig, getLinkScriptResponse, init };
