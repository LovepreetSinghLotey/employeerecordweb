'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "60f44e71bf189f5e725be17046eb8bc0",
"version.json": "22ed6a42bfea186101ba6954920b40a7",
"index.html": "0293d38e29e911ad6171a2b5483d5ab4",
"/": "0293d38e29e911ad6171a2b5483d5ab4",
"main.dart.js": "896b64767b324bd5cb70514769e615a1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "773a6c5ef980dbd27acc2a7291b04af4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "318ea70db1d0d73704567499fee69bb0",
".git/config": "cc2055837e8d70aeadba4ac9d70d1192",
".git/objects/61/606af043ecc49a40be345d585f8beaf5c72216": "dd89c302ffa8e6de286d2f1ab0181d75",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/36a66adcbf3612e1572b252f431673d0b91384": "222b090ef1165d040ec34079434b994c",
".git/objects/03/1af419727944d0d242170998ed0006a9f12c52": "c3d545f7abc938013273fb3b40edfd16",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/556634bf6923d8666be3c4ded63f8d0f423559": "e675e64b570098e72259f4782adf2bea",
".git/objects/56/b920a7727026541950b385b7ae9eea1941a1e3": "21c18de454fc75370f5e8e3f26325fd2",
".git/objects/58/15d0902bb0847f2d063a483f72d6b17fd276f4": "2ff5b3d88e75a7d4a2ec3e78090b5a65",
".git/objects/5a/ca50292a14f37cd24a6162153599b21850c817": "de543ee6c11090110b65ee3461e60dcc",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/914d2b6e5e6c0dde902e9811446253f793a1bb": "24d37df521ef570e56e27ca695e99589",
".git/objects/9d/e5882a4c10f1ba0aa6452e90405d70c5071ec4": "bd1f8ba3443dee967356bc87b469ee2e",
".git/objects/02/a1a6c4446fa5e42c46609e5e354f084bda3402": "87474b333a48c0c52fb080f457681935",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/1988bcd37e813624ec4173a022f910eb7c8346": "9beb6cfefa08f3fcef9168a061a7bbb8",
".git/objects/ad/297c837c850afded60a3cf477c652451811e7a": "9bcbee0f8c9e58d1b44b14b53e3a9536",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/42815d78715f0007e4d8f0f488b39beb2a9c43": "1668ed5cf0bdddd619d495b027798c7e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/d14f8af22c1433baccc880a82bebed0d18b1c6": "da042901d228c6f36d1cb40327b8408a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/f3fda920210a4d03261991c1e677c0f94d4ea8": "322114d0d963362c30448bc7783e981e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/66e5254b75cc81f996a76ccc47523bf208d159": "920342d9d64ad0725cf6633a969b6473",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/c479ae25837384633c1c91953ee6acefb62f00": "f73c4bb3606dd1fcc4ca18dca97c8ac7",
".git/objects/c8/eca6fb0a7bbc78fdc380c26f163358c76b8fad": "96e735b51508d28c88b7bc5e12cbec59",
".git/objects/c8/e1264420949464c3c82a354b910e6b34dcfc8b": "7cd7be6ef70978ce9b09de6739769924",
".git/objects/4e/b078de414b5442e2908793f5dc196d7e9addeb": "3c5b289dcb7b577ecef0ddfe828a69b9",
".git/objects/45/992d631f816ea8921998cfcc09e0243c15a4a3": "bd295e275b7e6cd592883d5c9fb9357a",
".git/objects/87/d9a65f5806d6c9e736fd20c792e257b2a5e611": "90cad78cb20ea5787c1b7cb0516c89cf",
".git/objects/17/9dd7e9ea6c290233d639f28d49e3458f985b82": "aa081bd7b2e997171e498a492f7377cd",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/0df41b581848a0cff539a582b0b1599f703c70": "a086d2fdeb6f0cb33e4c24c82e7ccfb5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/0d84c480ed5df3f38c5dd44101f2498e695dfd": "b8abb1cd043fe8d3cb1df4140a7db358",
".git/objects/09/4b1573691676756da35943fa105e67df0dd127": "b2481cbf407f8755d6a4fed2af7d8f7c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/01/972605de62a4ce53d45ceb56660f5a626d2a56": "4c4b6ec4ac2c90ad8176cf303bc058d9",
".git/objects/39/f6b896759baf95ce7894a94394e54edd870f84": "a285ed1719edffe65fc80c760be4eedf",
".git/objects/99/13471130e18186e888831083be1ab63fe3a08c": "fdec64e43d983f5b32d6ab3ecec8182d",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/d0c4dc806aae5cebe2865655ae07ebc7b4c781": "a4d07435ac7f6716768f2990a762fdeb",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8726e501fe307b27882986948f970a9d551de1": "527a22fa0b36034b9e4dfdfdd55a55d0",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/cd/946e5556857b2906b9acbe777468a18bb254dd": "c7f4de8641672a8020a0c6a86cabd4c0",
".git/objects/f9/98ee7ba37b1a31d277a9f020b5d3ea2283841e": "ffb54444eb20e4cc404ad0db90cf83f3",
".git/objects/f7/d5c7add11f9a45fdd4deb1a6e8fb8f0c20c327": "6987f77fb04777d0aa59dc7cfde11e88",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/fbab9776f60a9b6f1cff96ce757d15856c7c1c": "7b622edbe14dd9120350ff8b090a88e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/3703e6763495c006384cfb1f88eb84565ef2d6": "8051312b0ef305ae6722e650c9d29607",
".git/objects/48/63f6814e5938466938c0b5e2e1094edd5fc105": "dd17d79f691f34f237e2bd09470dd2db",
".git/objects/84/ca64a19962b3d87f45f95c36fc9fc938ad13fe": "164c53412f9bca100c30b446940576a2",
".git/objects/23/a398da2405b18c5ad533ddde7aee207f87bdd3": "6fe3048c8d8a8851178f1630064c6cd6",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/195d5e877b01ba73ef97c6f0a0e7ad9e4b84f6": "b70081afdc261b6305ddebe499e9b6bc",
".git/objects/40/c14de76e28285f84643e48db4b2ca08ff555f1": "7fc5dfdac7693f4859feab91bc573706",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7a/3a18a912aaac63e7890be0ab7174f03d34361e": "7b490f14bb511898118503cb34ed947e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8126eadc3a08ffc3e71aabcb02383d16",
".git/logs/refs/heads/main": "55b51547c3b93ddfe3126782a4707d6f",
".git/logs/refs/remotes/origin/main": "7ece8604407e53fe7e832f7d5e4c3e05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "79a81b21c1bf4c03aea49a1788f62afb",
".git/refs/remotes/origin/main": "79a81b21c1bf4c03aea49a1788f62afb",
".git/index": "7bf03253e98ee222407b90d694f1b87d",
".git/COMMIT_EDITMSG": "2cf5c93bae9d53ae091d58f4ceecd608",
"assets/AssetManifest.json": "9edcfdff08ae6167952576249228b204",
"assets/NOTICES": "c392db8ac11765a8da15f6a529da784e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "35cd3ce9db387c9bb271ec8f9cb2d1e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ebbb8aaaef679cac9fb054b8c8f5a65e",
"assets/fonts/MaterialIcons-Regular.otf": "370120e682fdf8c8448b5c675ef0ab51",
"assets/assets/svg/person.svg": "825299b1b3a5b5f3bd74bac1b0d3a2ad",
"assets/assets/svg/arrow_drop.svg": "9f6248b306929c038f2e08c5c479ce58",
"assets/assets/svg/arrow_right.svg": "33d377b534cc6228be7bd9bc91894899",
"assets/assets/svg/job.svg": "1c82cc6d1806f519b57f1a9f68ddb2bf",
"assets/assets/svg/date.svg": "02b6a0614c3919caae7b1e4ce6fb3357",
"assets/assets/images/no_record.png": "0276bdc78e6495f30a4fb255862bda47",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
