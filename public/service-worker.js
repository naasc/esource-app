// Set this to true for production
var doCache = true;

var CACHE_NAME = 'my-pwa-cache-v1';


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});