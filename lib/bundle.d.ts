type Version = 'v6.0.1-non-polyfills'
  | 'v6.1.0-non-polyfills'
  | 'v6.10.0-non-polyfills'
  | 'v6.10.1-non-polyfills'
  | 'v6.10.2-non-polyfills'
  | 'v6.11.0-non-polyfills'
  | 'v6.2.0-non-polyfills'
  | 'v6.2.1-non-polyfills'
  | 'v6.3.0-non-polyfills'
  | 'v6.3.1-non-polyfills'
  | 'v6.3.2-non-polyfills'
  | 'v6.3.3-non-polyfills'
  | 'v6.3.4-non-polyfills'
  | 'v6.3.9-non-polyfills'
  | 'v6.4.0-non-polyfills'
  | 'v6.4.1-non-polyfills'
  | 'v6.4.2-non-polyfills'
  | 'v6.4.3-non-polyfills'
  | 'v6.4.4-non-polyfills'
  | 'v6.4.5-non-polyfills'
  | 'v6.5.0-non-polyfills'
  | 'v6.5.1-non-polyfills'
  | 'v6.6.0-non-polyfills'
  | 'v6.6.1-non-polyfills'
  | 'v6.7.0-non-polyfills'
  | 'v6.7.1-non-polyfills'
  | 'v6.8.0-non-polyfills'
  | 'v6.8.1-non-polyfills'
  | 'v6.8.2-non-polyfills'
  | 'v6.8.3-non-polyfills'
  | 'v6.9.0-non-polyfills'
  | 'v6.9.1-non-polyfills'
  | 'v6.9.2-non-polyfills'
  | 'v6-non-polyfills'
  | 'v6.11.1-rc-non-polyfills'
  | 'v6.0.0'
  | 'v6.0.1'
  | 'v6.0.2'
  | 'v6.0.3'
  | 'v6.1.0'
  | 'v6.2.0'
  | 'v6.2.1'
  | 'v6.3.0'
  | 'v6.3.1'
  | 'v6.3.2'
  | 'v6.3.3'
  | 'v6.3.4'
  | 'v6.3.9'
  | 'v6.4.0'
  | 'v6.4.1'
  | 'v6.4.2'
  | 'v6.4.3'
  | 'v6.4.4'
  | 'v6.4.5'
  | 'v6.5.0'
  | 'v6.5.1'
  | 'v6.6.0'
  | 'v6.6.1'
  | 'v6.7.0'
  | 'v6.7.1'
  | 'v6.8.0'
  | 'v6.8.1'
  | 'v6.8.2'
  | 'v6.8.3'
  | 'v6.9.0'
  | 'v6.9.1'
  | 'v6.9.2'
  | 'v6.10.0'
  | 'v6.10.1'
  | 'v6.10.2'
  | 'v6.11.0'
  | 'v6.11.1-rc'
  | 'v6'

type GetIdWebSdkComponent = {
  unmount: () => void;
  changeThemeMode: (theme: 'dark' | 'light') => void;
}
declare const init: (config: PageSideConfig, version?: Version) => Promise<GetIdWebSdkComponent>;

type Category = 'First name' | 'Last name' | 'Date of birth' | 'Address' | 'Date of expiry' | 'Date of issue' | 'Document number' | 'Gender' | 'Nationality' | 'Personal number'

interface ProfileFormCustom {
  category: Category,
  value: string
  contentType: 'string' | 'country' | 'date' | 'boolean'
}

interface ProfileForm {
  category: Category,
  value: string
}

interface Metadata {
  externalId: string,
  labels?: {
    [labelName: string]: string
  }
}
interface JwtAuthorization extends MainPageSideConfig{
  jwt: string,
}

interface SdkKyeAuthorization extends MainPageSideConfig{
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

type PoaParsedAddress = {
  /**
   * Alpha3 code format is acceptable
   */
  country: string;
  city?: string;
  postcode: string;
  addressLine: string;
};

type FatalErrorCode =
  | 'fail_to_load_translations'
  | 'apiurl_mismatch'
  | 'token_mismatch'
  | 'browser_not_supported'
  | 'no_camera'
  | 'token_expired'

type ErrorCode =
  | 'internal'
  | 'sdkkey_invalid'
  | 'configuration_not_found'
  | 'token_malformed'
  | 'schema_mismatch'
  | 'api_version_mismatch'
  | 'token_invalid'
  | 'token_expired'
  | 'customerid_exists'
  | 'camera_not_allowed'
  | 'camera_generic'
  | 'file_type'
  | 'verification_fail'
  | 'bad_request'
  | 'server_unavailable'
  | FatalErrorCode

interface MainPageSideConfig {
  apiUrl: string,
  containerId: string,
  flowName: string,
  metadata?: Metadata,
  mode?: 'popup' | 'inline',
  onBack?: () => void,
  onFail?: (err: {code: ErrorCode | string, message: string}) => void,
  onComplete?: (result: {applicationId: string, responseCode: number}) => void,
  onVerificationComplete?: OnVerificationComplete,
  acceptableDocuments?: AcceptableDocuments,
  onFatalError?: (code: FatalErrorCode) => void
  profile?: Array<ProfileForm | ProfileFormCustom>
  locale?: string,
  customerId?: string,
  injectCSS?: string,
  dictionary?: string,
  htmlProperties?: {
    disableSwitchDevice: boolean,
  },
  styles?: {
    [variableName: string]: string
  }
  themeMode?: 'dark' | 'light'
  address?: PoaParsedAddress,
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

export { GetIdWebSdkComponent, PageSideConfig, PoaParsedAddress, Version, getLinkScriptResponse, init };
