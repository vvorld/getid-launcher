
type GetIdWebSdkComponent = {
  unmount: () => void;
  changeThemeMode: (theme: 'dark' | 'light') => void;
}
declare const init: (config: PageSideConfig, version?: Version) => Promise<GetIdWebSdkComponent>;



interface Profile {
  category: string,
  value: string
}

interface Metadata {
  externalId: string,
  labels?: {
    [labelName: string]: string
  }
}
interface JwtAuthorization extends  MainPageSideConfig{
  jwt: string,
}

interface SdkKyeAuthorization extends  MainPageSideConfig{
  sdkKey: string,
}

type PageSideConfig = JwtAuthorization | SdkKyeAuthorization;

type OnVerificationComplete = ((x: {[key: string]: any}) => void) | null

type AcceptableDocuments = ((x: CountryDocumentTypes[]) => CountryDocumentTypes[]) | null

type CountryDocumentTypes = {
  country: string,
  documentTypes: SupportedDocumentType[]
}

type SupportedDocumentType = 'passport' | 'id-card, driving-licence' | 'residence-permit' | 'voter-card' | 'tax-card' | 'address-card'

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
  dictionary?: string,
  onVerificationComplete?: OnVerificationComplete,
  acceptableDocuments?: AcceptableDocuments,
  htmlProperties?: {
    disableSwitchDevice: boolean,
  },
  styles: {
    [variableName: string]: string
  }
}

interface getLinkScriptResponse {
  responseCode: 400 | 200
  message?: string,
  scriptLink?: string,
}

interface GetidWebSdk {
  init: (config: PageSideConfig) => Promise<GetIdWebSdkComponent>
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
  'v6.1.0-non-polyfills' |
  '6.2.0' |
  '6.2.0-non-polyfills' |
  '6.2.1' |
  '6.2.1-non-polyfills' |
  '6.3.0' |
  '6.3.0-non-polyfills' |
  '6.3.1' |
  '6.3.1-non-polyfills' |
  '6.3.2' |
  '6.3.2-non-polyfills' |
  '6.4.0' |
  '6.4.0-non-polyfills' |
  '6.9.2' |
  '6.9.2-non-polyfills'




export { 
  PageSideConfig, getLinkScriptResponse, init, Version, GetIdWebSdkComponent
};
