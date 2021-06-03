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
        cashes.open(cacheName).then((cahe) => {
            console.log('[Service Worker] Caching all the files');
            return cacheFile.addAll(cacheFiles);
        })
    );
});