## GetID Web SDK Launcher
A light script for to start to use GetID 


### Introduction
This script is intended to start GetId Web SDK v6 on web a page. For a launch sdk v5 read
[sdk v5 README](https://github.com/vvorld/getid-launcher/tree/v5)


For the previous version read [LAUNCHER V1 documentation](https://github.com/vvorld/getid-launcher/blob/v1/README.md)
### How to use:

**Via npm**

1. I should install script in your project:
    
```bash
npm i getid-launcher
```

1. Import function into your client code:

```js 
import { init } from 'getid-launcher';
```


1. Compile SDK configuration object:
    You can get more information on https://github.com/vvorld/getid-web-sdk/tree/v6


1. Create element in DOM where SDK should be included:
```html
    <div id='getid-component'>
```

1. Call initialization WebSDK

``` js
    init(config);
```


**Via CDN**

```html
<script src='https://cdn.getid.cloud/sdk/getid-web-sdk-launcher-v6.min.js'></script>

<div id="targetContainer">
    All content here will be overwritten
</div>

<script>
const widget = window.getidWebSdk.init({
    apiUrl: 'https://your_api_url',
    sdkKey: 'sdk key from admin panel',
    containerId: "targetContainer",
    flowName: 'flow name from admin panel',
    onComplete: (data) => { console.log("everything is complete" + data)},
    onFail: ({ code, message}) => { console.log("something went wrong: " + message )},
});
</script>
```

### Examples
You can see a simple example in repository
https://github.com/vvorld/getid-launcher/tree/main/example

This example shows how use `launcher` in client side script (https://github.com/vvorld/getid-launcher/blob/main/example/client.js)


### For developers:

getid-launcher provides types for TypeScript and each new release of web sdk getid launcher should update existed versions by next command:

```
npm run update-versions
```

after updating the versions please increase version in package.json and build new version by next command:
```
npm run build
```

next you will need to publish updated version in npm registry by `npm publish`
and load the build into cdn by next command
```
babel-node ./tools/publish-lib.js
```