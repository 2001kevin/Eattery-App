import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/eaticon-64x64.png',
  './icons/eaticon-128x128.png',
  './icons/eaticon-256x256.png',
  './icons/eaticon-512x512.png',
  './index.html',
  './eaticon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
