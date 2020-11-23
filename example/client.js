//const { init } = require('getid-launcher');

import { init } from 'getid-launcher';



function onFailCallback(e) {
  console.error(e);
}
function onSuccesCallback(e) {
  console.log(e);
}

// Element Id where the widget will be rendered into
const elementID = 'getid-component'
//SdkKey
const token = 'Qm64AQyks8dmkcNb'
// Url of your sandbox
const apiUrl = 'https://example.sb.getid.dev'

const flow = [
    {
      component: 'Form',
      fields: [
        {
          label: 'First Name',
          type: 'text',
          name: 'First name',
          required: false,
          value: '',
        },
        {
          label: 'Last Name',
          type: 'text',
          name: 'Last name',
          required: false,
        },
        {
          label: 'Date Of Birth',
          type: 'date',
          name: 'Date of birth',
          required: false,
        },
        {
          label: 'I have read and understand <a href="https://getid.ee">Terms of use</a> of GetID&nbspOÜ.',
          type: 'consent',
          name: 'privacy',
        },
      ],
    },
    {
      component: 'DocumentPhoto',
      showRules: true,
      interactive: true,
      enableCheckPhoto: true,
    },
    {
      component: 'Selfie',
      showRules: false,
      enableCheckPhoto: true,
    },
    {
      component: 'ThankYou',
    },
  ]
  
init(elementID, token,  {
  flow,
  onFail: onFailCallback,
  onSucces: onSuccesCallback
});
