importScripts("https://cdn.devtips.cn/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"v8.js.cn"}),workbox.precaching.precacheAndRoute([{url:"_css/feature-support.css",revision:"fa5cc8ecfd08e42ad0d1220ace9fbc4e"},{url:"_css/main.css",revision:"846c9c2ef03cd46068890368342eff72"},{url:"_js/dark-mode-toggle.mjs",revision:"0e2c7187d88ffa265610ed0a22c34c78"},{url:"_js/main.mjs",revision:"ebee0f143e60051744781257c77e869e"},{url:"_img/v8-outline.svg",revision:"4f31131698336593b885a24b6653d8a3"},{url:"/",revision:"f42d7397b933b5b555b71b450c948754"},{url:"/blog/",revision:"69082c86da601fbb9f788e1a07bc89ea"},{url:"/docs/",revision:"86086d7996a8353f9bd1fa73246f2178"},{url:"/features/",revision:"7b55e0894c757ec4ac1c5a9209e3b0f8"}]),workbox.core.skipWaiting(),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|webp|svg)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3})]}));