import 'regenerator-runtime';
import CacheHelper from './cacheHelper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deletePreviousCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.staleWhileRevalidate(event.request));
});
