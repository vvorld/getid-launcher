!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(((e="undefined"!=typeof globalThis?globalThis:e||self)["getid-launcher"]=e["getid-launcher"]||{},e["getid-launcher"].js={}))}(this,(function(e){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function n(e,n,t,i){return new(t||(t=Promise))((function(o,r){function d(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(d,c)}s((i=i.apply(e,n||[])).next())}))}let t=(e,i,o)=>n(void 0,void 0,void 0,(function*(){let r={responseCode:400};try{const d={"x-web-sdk-launcher-version":"3.1.0"},c=new URL(`${e}/sdk/v2/script-link`);i&&c.searchParams.append("flowName",i),o&&c.searchParams.append("experimentalKey",o),r=yield fetch(c.toString(),{headers:d}).then((e=>e.json())),r.scriptLink&&(t=()=>n(void 0,void 0,void 0,(function*(){return r})))}catch(e){console.error(e)}return r}));e.createPublicTokenProvider=(e,t)=>()=>n(void 0,void 0,void 0,(function*(){if(!e)throw new Error("Missing api url");if(!t)throw new Error("Missing api key");return(yield fetch(`${e}/sdk/v2/token`,{method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-sdk-key":t}})).json()})),e.init=function(e){return new Promise(((n,i)=>{t(e.apiUrl,e.flowName,e.experimentalKey).then((({scriptLink:t="https://cdn.getid.cloud/sdk/getid-web-sdk-v6.min.js"})=>{t=t.indexOf("")>=0?t:t.replace(".min.js",".min.js");const o=document.createElement("script");o.setAttribute("async",""),o.src=t,document.getElementsByTagName("body")[0].appendChild(o),o.onload=()=>{window.getidWebSdk&&window.getidWebSdk.init(e).then((e=>n(e))).catch((e=>i(e)))},o.onerror=e=>i(e)})).catch((e=>{console.log(e),i(e)}))}))},Object.defineProperty(e,"__esModule",{value:!0})}));