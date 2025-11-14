const CACHE_NAME = 'consulta-colaboradores-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Instalar service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Buscar arquivos do cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Arquivo encontrado no cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Atualizar cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});