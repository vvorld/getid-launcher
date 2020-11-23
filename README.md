## GetID Web SDK Launcher
A light script for to start to use GetID 


### Introduction
This script is intended to start GetId Web SDK on a page.


### How to use

1. I should install script init your project:
    
    ```bash
    npm i getid-launcher
    ```

1. Import function into your client code:

    ```js 
    import { init } from 'getid-launcher';
    ```

    or

    ```js
    const { init } = require('getid-launcher');
    ```

1. Compile SDK configuration object:
    You can get more information on https://github.com/vvorld/getid-web-sdk

    Example: 
    ``` js 
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
                ],
            },
            {
                component: 'DocumentPhoto',
            },
            {
                component: 'Selfie',
            },
            {
                component: 'ThankYou',
            },
        ],
        onFail: (e) => console.error(e),
        onSuccess: (e) => console.log('Success:', e),
    };
    ```
1. Create element in DOM where SDK should be included:
    ```html
        <div id='getid-componen'>

1. Call initialization WebSDK

    ``` js
        init('getid-component', 'Qm64AQyks8dmkcNb', config);
    ```


### Examples
You can see a simple example in repository
https://github.com/vvorld/getid-launcher/tree/main/example

This example shows how use `laucher` in client side script (https://github.com/vvorld/getid-launcher/blob/main/example/client.js)


