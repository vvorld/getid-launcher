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
***************************************************************************** */function n(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{d(i.next(e))}catch(e){r(e)}}function s(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}d((i=i.apply(e,n||[])).next())}))}e.createPublicTokenProvider=(e,t)=>()=>n(void 0,void 0,void 0,(function*(){if(!e)throw new Error("Missing api url");if(!t)throw new Error("Missing api key");return(yield fetch(`${e}/sdk/v1/token`,{method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",apiKey:t}})).json()})),e.init=function(e,n="v6.11.0"){return new Promise(((t,i)=>{var o;(o=e.apiUrl,fetch(`${o}/sdk/v1/script-link`,{method:"POST",body:JSON.stringify({})}).then((e=>e.json())).catch((e=>console.log(e)))).then((({scriptLink:o="https://cdn.getid.cloud/sdk/getid-web-sdk-v6.min.js"})=>{const r=document.createElement("script");r.setAttribute("async","");const{origin:c,pathname:s}=new URL(o),d=s.split("/");d.splice(d.length-1,1,`getid-web-sdk-${n}.min.js`);const{href:l}=new URL(d.join("/"),c);r.src=l,document.getElementsByTagName("body")[0].appendChild(r),r.onload=()=>{window.getidWebSdk&&window.getidWebSdk.init(e).then((e=>t(e)))},r.onerror=e=>i(e)})).catch((e=>{console.log(e),i(e)}))}))},Object.defineProperty(e,"__esModule",{value:!0})}));