"use strict";var precacheConfig=[["./index.html","e947517c42d377dedcaa8c755bfbf23f"],["./static/css/main.aba198e8.css","bc60e66d1f6aa9250f1940a1e7001d7e"],["./static/js/main.cea811c9.js","6b94b991da2db1d138d73635e84adfcc"],["./static/media/activity-icon.de211134.svg","de211134596977a4ae7845a870f55757"],["./static/media/add.038e3f81.svg","038e3f81c215af9696d38edf6385944a"],["./static/media/cloze_image.2486e4d6.jpg","2486e4d60ce137e70506460a00b2dcd8"],["./static/media/delete.30807ff5.svg","30807ff56d9226e2ac89fc8d5acdc56f"],["./static/media/edit.91269d9a.svg","91269d9afd2b3aad9ad63ec3daa9ac20"],["./static/media/home.655c9acf.svg","655c9acfa034be4f674c8b26f4da00d5"],["./static/media/left.c6b3d88c.svg","c6b3d88c537ec83bbc07cd60851ae1dd"],["./static/media/list_reorder_image.b710dd1e.png","b710dd1e06ed99112f5db732b2c9c55b"],["./static/media/mcq_image.245ed5a2.jpg","245ed5a2e18bad492767009bf2a6bb90"],["./static/media/play-button.351ac6fe.svg","351ac6fe1169240e72da91cb90f419b1"],["./static/media/right.ecb0166d.svg","ecb0166d8e12e45c6325b547ed3cff33"],["./static/media/sub.680d63ae.svg","680d63ae22924bc9235163fa6fe31f25"],["./static/media/zoom-home.e0b71aee.svg","e0b71aee6352f2fc707c21698787e894"],["./static/media/zoom-neighborhood.f884a7c0.svg","f884a7c0a91bf68659f6a3756834fbf4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});