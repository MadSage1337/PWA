var cacheName = 'lessons-v1';
var cacheFile = [
    'index.html',
    'Lessons.js',
    "lesson.webmanifest",
    "image/english.jpg",
    "image/math1.jpg",
    "image/art.jpg",
    "image/geography.jpeg",
    "image/music.jpg",
    "image/chemistry.jpg",
    "image/arabic.jpeg",
    "image/physics.jpg",
    
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

//self.addEventListener('fetch', function (e) {

//    e.respondWith(

//        caches.match(e.request).then(function (r) {

//            console.log('[Service Worker] Fetching resource:' + e.request.url);

//            return r

//        })

 //   );

//});

self.addEventListener('fetch', function (e) {

    e.respondWith(

        caches.match(e.request).then(function (r) {

            // Download the file if it is not in the cache, 

            return r || fetch(e.request).then(function (response) {

                // add the new file to cache

                return caches.open(cacheName).then(function (cache) {

                    cache.put(e.request, response.clone());

                    return response;

                });

            });

        })

    );

});