alert();

self.addEventListener('fetch', function(e) {
    console.log('[demoPWA - ServiceWorker] Fetch event fired.', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                console.log('[demoPWA - ServiceWorker] Retrieving from cache...');
                return response;
            }
            console.log('[demoPWA - ServiceWorker] Retrieving from URL...');
            return fetch(e.request).catch(function (e) {
               let boutonAJouter = document.getElementById("boutonAJouterPokemon");
               boutonAJouter.classList.add("disabled");
               console.log('Vous êtes déconnectés...');
            });
        })
    );
  });