/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./404.html","c7ce43eb8d5e90e18ec1415ef9e14eb4"],["./_includes/contact_form.html","279a81fdb2f5df778cf9f902d76c04ec"],["./_includes/footer.html","5014396368c727461a15e13807bbfa1b"],["./_includes/head.html","ffcfabb8f480744fb87eb25713cb4a49"],["./_includes/header.html","0cd782ad38ae8b36b1d8b282a56dc93d"],["./_includes/responsive-img.html","d242eb9869dc1413103b2340f68cb6e6"],["./_layouts/category.html","ef7cec6c03f531a9428267d80811414c"],["./_layouts/default.html","e1f459a806228a197cf469df39f72777"],["./_layouts/page.html","70420005717f65f3f82f61944328a0bf"],["./_layouts/portfolio.html","8be7ca8445a41d297eca8d232bb4892f"],["./_layouts/post.html","80ba1e151de706da2565af5a4d954989"],["./_layouts/project.html","31eed83308207e056350b4259368586e"],["./_site/404/index.html","8e812861e582c9190e5c3218ce7da8f0"],["./_site/about/index.html","b3a8a8c54b1c2a57b0fc7744c60fb070"],["./_site/blog/case-studies/retour-serious-game/index.html","a8526dc1600dc1c2d5cf8947a5b592fd"],["./_site/blog/category/case-studies/index.html","d12d6a392556f20b422721bd98d3a0bc"],["./_site/blog/category/dev/index.html","108f5f03c4273538286e2fce12a0648b"],["./_site/blog/dev/automatisation-jekyll-gulp/index.html","357c82b75a11a6d63ebc2b1b4590900f"],["./_site/blog/dev/faciliter-la-mise-en-place-d-un-environnement-react-native/index.html","72409f5d43aaec04d58b01de530fb573"],["./_site/blog/dev/navigation-fluide-barba-js/index.html","61450dc3bfac8941eaab9f197120927a"],["./_site/blog/dev/vers-un-comportement-natif-avec-manifest-json/index.html","29d5c8a8641568b13f2e6600425d1766"],["./_site/blog/index.html","b2dbb12b0a34065c422ee458d31cfb71"],["./_site/index.html","b04ddd55803dd3ece30c931daee6fadf"],["./_site/vendor/phpmailer/phpmailer/docs/extending.html","8a93870d6204cdc793eaadcb9310d052"],["./_site/vendor/phpmailer/phpmailer/docs/faq.html","dc17fa572db619e87e123cc5f0be3fb7"],["./_site/vendor/phpmailer/phpmailer/examples/contents.html","8e28283b8e1fc5599df3042b107d60de"],["./_site/vendor/phpmailer/phpmailer/examples/contentsutf8.html","8eef8f38558b22e288fbbd08154565cf"],["./_site/vendor/phpmailer/phpmailer/examples/index.html","638b2b4cb188f91686fe3b2447c74d38"],["./_site/works/almedia/index.html","500f148471dd718a18957048f148b0dc"],["./_site/works/fedfinance/index.html","26918d1d55da21e5fd23c8216e630edd"],["./_site/works/index.html","847cc520402c8116b881bac197edb8c6"],["./_site/works/musicbox/index.html","e333d95b558945fd2df2ac0c9e931c39"],["./_site/works/offreurs-de-solutions/index.html","93a87fe7790687cc04b253d0ec1581dd"],["./_site/works/portfolio-personnel/index.html","d224baf29fedd989ed7afd0a09a76485"],["./_site/works/strastvxnlcontest/index.html","1593990a3f9337c28f97898db2fec574"],["./about/index.html","7b2bbb83204f22557b7770644cc6f047"],["./blog/category/case-studies/index.html","5332a91dc52ab5fa64da9183f863c942"],["./blog/category/dev/index.html","df11622dcd5177c1d3e67807f0537beb"],["./blog/index.html","e4fde32b0812ca72677128040da6773c"],["./css/main.min.css","3414b2bc7fd3e6614da63b2a5e1211df"],["./img/404.gif","02c6d246d69017241355370b615a681b"],["./img/hero-img.svg","3243979287dee9d1742c8341572731cf"],["./img/noisy-texture.png","e8ef16893c3a1aa66ab95b7cccde487d"],["./index.html","a6ea8bba55bd0d412e898f5d8ee22a8d"],["./js/bundle.min.js","5751f3d63db8241dceaff5d2a9f34610"],["./node_modules/clone/test-apart-ctx.html","2e19bbe38f319e86bea1475cb015f3e4"],["./node_modules/clone/test.html","e260d9e362fe61de265026dcb134cee4"],["./node_modules/console-stream/test/static/index.html","828368e81873bc2d59863ed16411a304"],["./node_modules/js-base64/base64.html","c007b46fcdb739728ac325fbc290e02f"],["./node_modules/js-base64/test/index.html","b85fd871eaea3b623d97812efcb27844"],["./node_modules/jsbn/example.html","2eb56edbb7819cbc7902f1114f1364a9"],["./node_modules/localtunnel/node_modules/node-uuid/test/test.html","27bd6e1bf98112d4e5f3e9a67d7ea735"],["./node_modules/serve-index/public/directory.html","25ddffe22092a7040c341943b207a5cf"],["./node_modules/sprintf-js/demo/angular.html","61276ccc42eb16f69df6f9dc82527ff2"],["./node_modules/through2/LICENSE.html","bb8031aeb39f1781e22716925f7589ac"],["./node_modules/ua-parser-js/dist/ua-parser.html","e2f683f4e3d9249729003050198c84ce"],["./node_modules/uglify-js/tools/props.html","3d2296edf2b290065052d13607789002"],["./vendor/phpmailer/phpmailer/docs/extending.html","8a93870d6204cdc793eaadcb9310d052"],["./vendor/phpmailer/phpmailer/docs/faq.html","dc17fa572db619e87e123cc5f0be3fb7"],["./vendor/phpmailer/phpmailer/examples/contents.html","8e28283b8e1fc5599df3042b107d60de"],["./vendor/phpmailer/phpmailer/examples/contentsutf8.html","8eef8f38558b22e288fbbd08154565cf"],["./vendor/phpmailer/phpmailer/examples/index.html","638b2b4cb188f91686fe3b2447c74d38"],["./works/index.html","f575173c250c8d089559f840cf64595f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







