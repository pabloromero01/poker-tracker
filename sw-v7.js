// Service worker: cachea la app para que funcione sin conexión
const CACHE = 'poker-tracker-v7';
const FICHEROS = ['.', 'index.html', 'manifest.json', 'firebase-config.js', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHEROS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(claves =>
      Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;

  // Las llamadas a la base de datos nunca se cachean: Firestore
  // ya gestiona su propio modo offline.
  if (url.includes('firestore.googleapis.com') || url.includes('identitytoolkit')) return;

  // El SDK de Firebase (CDN) se cachea la primera vez que se descarga,
  // para que la app arranque también sin conexión.
  if (url.includes('gstatic.com/firebasejs')) {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
        return resp;
      }))
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
