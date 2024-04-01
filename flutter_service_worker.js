'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "187aab9f8f7f780c43e75c835b0fda4c",
"assets/AssetManifest.bin.json": "4f3a95a06f9f4aefe8d7818cf3a42212",
"assets/AssetManifest.json": "2ae89f956fe4a40c69974957da4361a9",
"assets/FontManifest.json": "d0975c94afeb32ec4155750ce2543f5e",
"assets/fonts/MaterialIcons-Regular.otf": "98123f7503fbb138ca584546e7b4a737",
"assets/lib/Images/aleksandra-tanasiienko-0y6eMd8vevA-unsplash.jpg": "09e77397990c7b9c9ca2682b0c0e89db",
"assets/lib/Images/alexandra-nosova-lpv--JSLa58-unsplash.jpg": "8c4ae5c74cbde0f7b6e26af46505cb12",
"assets/lib/Images/ambitious-studio-rick-barrett-TSkUCyCuVH4-unsplash.jpg": "f0aa74c571450cc9bc4b2904ce1a413a",
"assets/lib/Images/amirali-mirhashemian-ZSukCSw5VV4-unsplash.jpg": "20a84293d2dcdfe600556552152bbd6f",
"assets/lib/Images/beef%2520curry.jpg": "72dca60d5684c29583089a11e7e74f36",
"assets/lib/Images/Beer.jpg": "1567af0f9ff77ad1b9192eb7b9f54db4",
"assets/lib/Images/bon-vivant-qom5MPOER-I-unsplash.jpg": "95cc0ab3707286a33c2003185d178b62",
"assets/lib/Images/brownies.jpg": "c12da9181c3e9bb1817f836710ad034c",
"assets/lib/Images/burger%2520(1).jpg": "63394b2d385dc41b90376cdd37f09ef7",
"assets/lib/Images/burger%2520(3).jpg": "449f9e7ed471c5455e02be94c75dcf23",
"assets/lib/Images/cake%2520slices.jpg": "aefaa35f6405ee54864e90dfbb171970",
"assets/lib/Images/chapati.jpg": "0b3b0f5552d2fae981f0a3323d997c2b",
"assets/lib/Images/chicken%2520curry.jpg": "08d7ee72d0d489fa1cc396ef6d371ddd",
"assets/lib/Images/Chickencurry.jpg": "20a84293d2dcdfe600556552152bbd6f",
"assets/lib/Images/chips.jpg": "ffa81a565dc075e19ca3f62f9f861168",
"assets/lib/Images/clarissa-carbungco-uy9DJw9e_vs-unsplash.jpg": "3e44cdf37e5f63754fabad9349d627f6",
"assets/lib/Images/cupcakes.jpg": "3e60420fc24235c3c3174aec183d8e8d",
"assets/lib/Images/derek-duran-Jz4QMhLvGgw-unsplash.jpg": "2328c03db84114a01b0a66e034e9c23a",
"assets/lib/Images/Fried%2520Chicken.jpg": "a2021eac96c760c20c3599afb54311ab",
"assets/lib/Images/ian-dooley-TLD6iCOlyb0-unsplash.jpg": "6cd69bbbdc5d8aa9017214f3020321c6",
"assets/lib/Images/Icecream.jpg": "9f3c8cab6cdff507e0781a6e7f8582bb",
"assets/lib/Images/joyce-panda-lpsbMRRqMQw-unsplash.jpg": "3eee41b2d397841f3b5c5e2a48eadc34",
"assets/lib/Images/jr-r-90HdOlGbjck-unsplash.jpg": "2ef8764029cbfb803bb4d1780ccd6510",
"assets/lib/Images/jugoslocos-QD4yCjlD44A-unsplash.jpg": "e53b5df6d685d60508409a38cc562a24",
"assets/lib/Images/Juices.jpg": "7f7c2b354565cfaffe0c483b581bbefe",
"assets/lib/Images/k8-sWEpcc0Rm0U-unsplash.jpg": "64b767b926b9a15b357c889322806d8b",
"assets/lib/Images/kevin-kelly-PPneSBqfCCU-unsplash.jpg": "3b27a7cafbf233f37aa0a6085eff6efd",
"assets/lib/Images/leo-roza-CLMpC9UhyTo-unsplash.jpg": "063195af3503d29be70249bced078154",
"assets/lib/Images/manny-nb-pHBphmBkK4A-unsplash.jpg": "2c0f81b4bcb2d27f28a1533c3f30c6f2",
"assets/lib/Images/marianna-ole-4El3DUkQs2g-unsplash.jpg": "1a60303ac240dbded866f1f60663a399",
"assets/lib/Images/milkshake.jpg": "1c2c736e9aefecc7120a4e1f28c7bd3c",
"assets/lib/Images/noppadon-manadee-g016_NJoOUk-unsplash.jpg": "f4d9c8769e638f75dcdc13fae511a3a9",
"assets/lib/Images/oriento-gy_DN08336U-unsplash.jpg": "bd61406db7624d401df1ee6dabedd8bb",
"assets/lib/Images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg": "d1d12eae7923b0ec16f5b007f2f98875",
"assets/lib/Images/pasta.jpg": "ae8b8e64330003d485d1f0dd6158f2a1",
"assets/lib/Images/pawel-kadysz-MYxvETrYabg-unsplash.jpg": "d84d0fe896ab6f950cf3c4c9c77e9804",
"assets/lib/Images/pizza.jpg": "6c0bce27fe435cd7988889e003c15f38",
"assets/lib/Images/prince-abid-75chao-zJa4-unsplash.jpg": "98e26f6e8dcaec00d4c443ed3319ab61",
"assets/lib/Images/Ramen.jpg": "fa58e948a2c322ecd9b9990864c06759",
"assets/lib/Images/Restaurant.jpg": "947ccffbf8e1a73cb1b308edb8215181",
"assets/lib/Images/restaurant.png": "baf4a3a4ab91b573dd824279f133f794",
"assets/lib/Images/sodas.jpg": "8e3ffc5414cc04e89ac6211f645e0f53",
"assets/lib/Images/sushi.jpg": "a7cbf90b2fd499a94477086c964768ef",
"assets/lib/Images/tea.jpg": "42422d9014297a48b8d52c8dc71c7885",
"assets/lib/Images/tiramisu.jpg": "b60eb942b5abe5801fd4c878add79a3d",
"assets/lib/Images/Ugali.jpg": "7d06c1ac5d8803a92074c1bf5edf64bf",
"assets/lib/Images/water.jpg": "95b0300110025fe2391de4ba6675e5f3",
"assets/lib/Images/whiskey.jpg": "b671cd0b2d23dfee71c9bc2cff76bab5",
"assets/lib/Images/wine.jpg": "8da99b1197b1425b1a6899506c549117",
"assets/NOTICES": "9ecb180b622699eb8c70f81e0f128b0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f56fcf099d90cb7c26ab1b2d203b4113",
"/": "f56fcf099d90cb7c26ab1b2d203b4113",
"main.dart.js": "d9da3dc8c45c7642bf7de637e0ef9a58",
"manifest.json": "0d52170f68da0e26aee5c75bdf2b805e",
"version.json": "dc2c9a88ac771186040f9636b4f1990e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
