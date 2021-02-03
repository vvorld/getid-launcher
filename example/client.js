import { init } from 'getid-launcher';

// Element Id where the widget will be rendered into
const containerId = 'getid-component'
//SdkKey (you can find this key on settings page in your sandbox)
const sdkKey = 'yourSdkKey'
// Url of your sandbox
const apiUrl = 'https://example.com'

const config = {
  flowName: 'sdk-v6',
  apiUrl,
  metadata: {},
  containerId,
  locale: 'en',
  profile: [{
    value: 'Jon',
    category: 'First name',
  }, {
    value: 'Dow',
    category: 'Last name',
  }],
  onComplete({ id }) {
    alert(id);
  },
  onFail(error) {
    console.log(error);
  },
  onSortDocuments(country, documents) {
    const desiredCountries = ['cz', 'ee'];
    const desiredDocuments = ['id-card', 'passport', 'driving-licence', 'residence-permit'];

    if (desiredCountries.includes(country)) return desiredDocuments;

    return [];
  },
};
  
init(containerId, sdkKey,  config);
