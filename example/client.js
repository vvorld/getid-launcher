import { init } from 'getid-launcher';

// Element Id where the widget will be rendered into
const containerId = 'getid-component'
//SdkKey (you can find this key on settings page in your sandbox)
const sdkKey = 'yourSdkKey'
// Url of your sandbox
const apiUrl = 'https://example.com'

const config = {
  apiUrl,
  sdkKey,
  onFail: (code) => console.log(code),
  onComplete: (result) => console.log(result),
  profile: [
    { value: 'Jon', category: 'First name' },
    { value: 'Dow', category: 'Last name' },
    { value: '1111-11-11', category: 'Date of expiry' },
  ],
  containerId,
  flowName: 'sdk-v6',
  locale: 'ru',
  metadata: {
    externalId: 'qwerty',
    labels: {
      test1: 123,
      test2: 'qwertyuio'
    }
  },
  mode: 'popup',
}
  
init(config);
