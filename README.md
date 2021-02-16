## GetID Web SDK Launcher
A light script for to start to use GetID 


### Introduction
This script is intended to start GetId Web SDK v6 on web a page. For a launch sdk v5 read
[sdk v5 README](https://github.com/vvorld/getid-launcher/tree/v5)


### How to use

1. I should install script in your project:
    
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

    ```
1. Create element in DOM where SDK should be included:
    ```html
        <div id='getid-component'>

1. Call initialization WebSDK

    ``` js
        init(config);
    ```


### Examples
You can see a simple example in repository
https://github.com/vvorld/getid-launcher/tree/main/example

This example shows how use `launcher` in client side script (https://github.com/vvorld/getid-launcher/blob/main/example/client.js)


