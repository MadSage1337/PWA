var cacheName = 'lessons-v1';
var cacheFile = [
    'index.html',
    'Lessons.js',
    'lesson.webmanifest',
    'image/english.jpg',
    'image/math1.jpg',
    'image/art.jpg',
    'image/geography.jpeg',
    'image/music.jpg',
    'image/chemistry.jpg',
    'image/arabic.jpeg',
    'image/physics.jpg',
    
];

self.addEventListener('install', (e) => {

    console.log('[Service Worker] Install');

    e.waitUntil(

        caches.open(cacheName).then((cache) => {

            console.log('[Service Worker] Caching all the files');

            return cache.addAll(cacheFiles);

        })

    );

});