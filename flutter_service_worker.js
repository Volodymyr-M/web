'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e9e96af34bdb141759bbc8731adc5b48",
"version.json": "959b9d74a602ba741c6df68104827a58",
"index.html": "67c9381120a43fa6667b4a89bf8b9870",
"/": "67c9381120a43fa6667b4a89bf8b9870",
"main.dart.js": "65cb777146df4c768af9b147a1b4fb40",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "0640bea5e511234b2ee0c7ec42e38319",
"callback.html": "13b9fdcf9586b352f462b0d06cf58d3b",
"icons/Icon-192.png": "48119556f506faf0d48a8f9ae4eb8d9d",
"icons/Icon-maskable-192.png": "48119556f506faf0d48a8f9ae4eb8d9d",
"icons/Icon-maskable-512.png": "ec5bff8285af0b1cc489d19b2b67cfd6",
"icons/Icon-512.png": "e3ff446d2d361a5fa3ad0b8c937c3582",
"manifest.json": "01f395258107b10e1a78cf655ef79f00",
"assets/AssetManifest.json": "3a624ed69f83f6f9ba2751e61cd6cd52",
"assets/NOTICES": "221fd62e0ded34ee9da8592438d594ce",
"assets/FontManifest.json": "07bde29e8d951c6c9624a6c64680d267",
"assets/AssetManifest.bin.json": "56dadec74c4457ea7bd98767900239aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4e2e060216075801d70071d3c70c8712",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8839f5cda26b8f69d9798b3e2b3099ed",
"assets/fonts/MaterialIcons-Regular.otf": "2ac4e4ba00ae2e1a729b2962cc010046",
"assets/assets/05-Onboarding-Device.png": "fd56e25c39ac514a8d3790cb25faf88e",
"assets/assets/00-Empty%2520List.png": "15c63120d2cae6f85011096123e336c0",
"assets/assets/illustration.png": "050336a07a8696fcf9209532b6ac2ea2",
"assets/assets/02-Onboarding-Desktop-AI.png": "ddb41cd4c7ee3f7178c042b064fce8aa",
"assets/assets/04-Onboarding-Export.png": "6df0346219298b137e6ba002c3552ecf",
"assets/assets/google_logo.png": "bbd3e021a37bd2f41a22db50b16a38ab",
"assets/assets/templates/Tutorial_Template.png": "3a1916cadd2c6de298dc0359c3abb6f4",
"assets/assets/templates/Tutorial_Template.xml": "edcef949aabe979c7cc1f752a5fa5d15",
"assets/assets/templates/Software_Development_Plan.xml": "fdaa2acd923033336df54649cca2a0c1",
"assets/assets/templates/Software_Development_Plan.png": "2260b9d7576cde4e1c5ab4b87b3fabdf",
"assets/assets/templates/Wedding_Plan.xml": "1c4378100311742641f26c5177e66e5a",
"assets/assets/templates/Wedding_Plan.png": "89d9db5f92efae83a2610babe39fec80",
"assets/assets/templates/PMI_Process.xml": "701cb6a15a98f4c6e51acd93d59186a3",
"assets/assets/templates/PMI_Process.png": "d295b3f0a9d49779fb124d15e8148994",
"assets/assets/03-Onboarding-Edit.png": "ce3e61e3865147d78ebe0a58d6943bd4",
"assets/assets/01-Onboarding-Desktop-Plan.png": "1bf0e67e9df1362469e0c9ed52c8c469",
"assets/assets/illustration_cropped.png": "2299c528b83d3c9805c2cd69022ad323",
"assets/assets/06-Onboarding-Share.png": "39bb2e5a4b015fc2dd07e665608f78fd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
