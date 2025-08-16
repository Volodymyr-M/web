'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d0caf3438e445086dd9f1a7c96386329",
"version.json": "5756d43eb9dce0b6fd1905b032c39dc4",
"index.html": "67c9381120a43fa6667b4a89bf8b9870",
"/": "67c9381120a43fa6667b4a89bf8b9870",
"main.dart.js": "efb474de1712243ed6fe6f77590a4140",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "0640bea5e511234b2ee0c7ec42e38319",
"callback.html": "13b9fdcf9586b352f462b0d06cf58d3b",
"icons/Icon-192.png": "48119556f506faf0d48a8f9ae4eb8d9d",
"icons/Icon-maskable-192.png": "48119556f506faf0d48a8f9ae4eb8d9d",
"icons/Icon-maskable-512.png": "ec5bff8285af0b1cc489d19b2b67cfd6",
"icons/Icon-512.png": "e3ff446d2d361a5fa3ad0b8c937c3582",
"manifest.json": "01f395258107b10e1a78cf655ef79f00",
"assets/AssetManifest.json": "2a5fa0a6701e69ad7c8cc75e312c573c",
"assets/NOTICES": "c1a4ae5cbff4991a6e664f73f95bf72c",
"assets/FontManifest.json": "bcaf4dd3a451ebe0aa269390aff6f0a2",
"assets/AssetManifest.bin.json": "0e28d3f77d7f5d14c539f64d4f973781",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4e2e060216075801d70071d3c70c8712",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6bc49f7edebd00fc22d11c0e001d4f9d",
"assets/fonts/MaterialIcons-Regular.otf": "1545d1fcc4305be4c74f31383ee53e72",
"assets/assets/05-Onboarding-Device.png": "757737cb077fb1e53bccc28c1a044dd0",
"assets/assets/00-Empty%2520List.png": "ac05b0c054c7f6d2eea42a490e9e98b8",
"assets/assets/02-Onboarding-Desktop-AI.png": "5ab2a4cec38608f98b5eefe49784b451",
"assets/assets/04-Onboarding-Export.png": "2affdbe4ee41100982e9bfe78b9ae1a3",
"assets/assets/logo.png": "1d1a182397c019066b217f23a3ddcb7d",
"assets/assets/google_logo.png": "bb8a1682daae7c229b596676b1339199",
"assets/assets/templates/Tutorial_Template.png": "802f0def6d60f1143f8ea33008d78096",
"assets/assets/templates/Tutorial_Template.xml": "edcef949aabe979c7cc1f752a5fa5d15",
"assets/assets/templates/Software_Development_Plan.xml": "fdaa2acd923033336df54649cca2a0c1",
"assets/assets/templates/Software_Development_Plan.png": "a2b0ad39e81cfc7d191bc6d160fec7bb",
"assets/assets/templates/Wedding_Plan.xml": "1c4378100311742641f26c5177e66e5a",
"assets/assets/templates/Wedding_Plan.png": "89d9db5f92efae83a2610babe39fec80",
"assets/assets/templates/PMI_Process.xml": "701cb6a15a98f4c6e51acd93d59186a3",
"assets/assets/templates/PMI_Process.png": "afab8750e6ce8fb6bd2460b997584527",
"assets/assets/03-Onboarding-Edit.png": "5d9358d84241be54cfca5154224e0137",
"assets/assets/00-Empty%2520List%25203.png": "d013b59a2f329d18916abfb64af96833",
"assets/assets/01-Onboarding-Desktop-Plan.png": "ed515aa3fba92c4d16ed86264eff902c",
"assets/assets/illustration_cropped.png": "66407cb2b23c349cd7ae35aef3e563c2",
"assets/assets/00-Empty%2520List%25202.png": "e0d7a92e55297053b7ee26b4473f1cef",
"assets/assets/06-Onboarding-Share.png": "f77a1096e864fc643b2b1415c426d57a",
"assets/assets/00-Empty%2520List%25205.png": "7ce5d2a3d96a4d35eacd90c2f3da97be",
"assets/assets/00-Empty%2520List%25204.png": "9cf2d2687de562897c36303afee31a0c",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
