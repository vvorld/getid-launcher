# Checkin.com and GetID Web SDK Launcher
A light script that will initiate and launch the GetID WebSDK when triggered. The files are also hosted on CDN and can be used directly as web links.


## Documentation
This script start the GetId Web SDK on a web page. 
The product documentation is moved from this repository and made available on:
### [WebSDK - Getting Started](https://checkin.com/get_started/index.html)


## Product information
More product information is available on [Checkin.com](https://checkin.com) 

## Adding the launcher
A simple way to use the launcher is by adding the online CDN-link as described in the [documentation](https://checkin.com/get_started/integration-examples.html#1-load-the-sdk).

### Build into project
It is also possible to embed this launcher by installing it to your projects directly. 

**NPM install**
    
```bash
npm i getid-launcher --save
```

**Import into your client code**

```js 
import { init } from 'getid-launcher';
```

