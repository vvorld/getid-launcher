import { init } from 'getid-launcher';

const config = {
  apiUrl: 'https://example.sb.getid.dev',
  flow: [
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
  ],
};

function onFailCallback(e) {
  console.error(e);
}
init('getid-component', 'Qm64AQyks8dmkcNb', config, { onFail: onFailCallback });
