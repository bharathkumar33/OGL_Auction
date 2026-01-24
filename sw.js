const CACHE_NAME = 'ogl-auction-v1';
const urlsToCache = [
  './index.html',
  './OG_Logo.jpg',
  './background.png',
  './ChargingBulls.png',
  './MightyTuskers.png',
  './RoyalTigers.png',
  './BlazingPhoenix.png',
  './GoldenEagle.png',
  './PowerPanthers.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
