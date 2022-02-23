'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "30155e7db8da1112db1a7ce3e78661b3",
".git/config": "87938f8b6fbdf048d383fbdbcf313fc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "455ccc76ca194dbe831521f1703a594f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "6172f176865563b1e03dac0e8a040444",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6bd9c5ffc67406bff8c9b03e43ec4e20",
".git/logs/refs/heads/asus": "6bd9c5ffc67406bff8c9b03e43ec4e20",
".git/logs/refs/remotes/origin/asus": "a91aa3c596d4dbb6d8e0466ac0238fef",
".git/objects/0d/42f156991d84008f7fde469562434ee9046e7a": "d59c87c2757c561c4ec74f7682e7cc07",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/e1792a92449f7ec29d9a8b67f54f9d2afc3f8f": "5cfcf788f2d30f9e8339f083e117dca0",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/44/078146e4d79ae77eefc1f543fc760dcc5ae47f": "cc7bcce20dfbc7c311df83329cb52e98",
".git/objects/45/bf20119389b87a4a9966ee6460c800f3ea603a": "d09f918bbd608e643c2fe683b3990ecc",
".git/objects/47/c896210493132800160cdf4dab458bec78f818": "799105cd6e63270ea0305f11d15b1d67",
".git/objects/5a/5b849c838c1eae6d64fcc5ba26921162e35aae": "6305429e83aa0b86f90f1f45d1e41ff6",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6f/fdcaf35a3916b9b0bcb22861df57da7c51d753": "1fa3b9d988d8a0f5c348c264a42540a5",
".git/objects/70/d178fae14ccc4af8e9e9b7fa5314583e6c1715": "944f464e7e3efb8747066ddb13ba286d",
".git/objects/76/ffa76ee4680515c6c334dd2dadfcbf9a902df0": "737c0811ba0f651e369e6c366e66bb9b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/db1ba0c1e317298ba05ce986ebe4cd2b5ff381": "c8c358f1f9f4ed2f4696ba5f5c6075d7",
".git/objects/7e/25ce135e4a7364b97a0c8dcbc552a168b6dd5e": "1a8ea20fe1eef1f230fd09c3320df661",
".git/objects/82/6fed3e5f64ec0d14f5249989d900de4337cad4": "8150b4f5a0578a61b9c2a0024e00a679",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/722744c091ff2dc4cc04c1cb4baa4621046df0": "bda7f980b7df3847ad819ea681defa84",
".git/objects/9f/5af0f1db67f281ca4418c6b530b2ea03c4a115": "a673e27a8a7d53825f3292afc4bdd6d5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/0c5ae116e7605f5cad383425412a3425c2e41d": "599da8c39cc097841539b11bffe7f784",
".git/objects/c8/401875f7acf481a951a887c65f5fcfbf952906": "b422c5eb77016ab6b011f7d8983cad35",
".git/objects/da/d961e625f04afe3cb17ad04451f192628a9a53": "6531891fb198679388c4c4522ea5704a",
".git/objects/df/3276ca3cedbd6130e206ff935b7f5386dd13b0": "b6251211d5a7db11f980179fb0e47360",
".git/objects/df/ba1ddc5d0ea72600c29f05cbcdfdca460e207d": "bd340baa3ae4fb57068189ea04012faa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/0c1ba607ebf8ec6cec9dd96bcdb1634458e045": "949f2467cf41dcfe0a088f12bc3696a5",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/f0/e29a0de451d202b8d6b03504e147805c2c9191": "b6d9795ee1bc7a3f21c04319b0793474",
".git/refs/heads/asus": "d62fe6d5cb9835d10e3a1b2a90cb6e39",
".git/refs/remotes/origin/asus": "d62fe6d5cb9835d10e3a1b2a90cb6e39",
"assets/AssetManifest.json": "7d8fa2991d1e1db69929c2f853d85df2",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/female_icon.png": "7b3bdf9c28a81a9a5e08f76bbdfdcff8",
"assets/assets/images/homeo_sure_logo.png": "a7001406d074b980a28a9c6d02f2e948",
"assets/assets/images/male_icon.png": "0170f7ed06039bba3747a176e01ee8da",
"assets/assets/images/no_appointment.png": "7bdb1eb73514c8a8a6015e5c63fcb573",
"assets/assets/images/prescription_header.jpeg": "a76656f4e84967fa6e4f1c44e8eafe2b",
"assets/assets/images/tick_icon.png": "5451449e6c8fdfe895ae21d802eb1eb4",
"assets/FontManifest.json": "3e3adbbe26ce23537aacddb5d41b6032",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1f64bf801587e970006dd3aa1ea764c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b26254148e19edb9f2f2cd3563951b80",
"/": "b26254148e19edb9f2f2cd3563951b80",
"main.dart.js": "20728e3cd9df53cba849cd50ab2bda8b",
"manifest.json": "bc00932895eeaee8bbc6cf927a3d5b78",
"version.json": "5c855a4892508028794a480999adcc51"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
