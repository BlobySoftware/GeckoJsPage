const CACHE_NAME = "v1_cache";
const urlsToCache=[
  "./",
  "./css/solarized-dark.css",
  "./css/style.css",
  "./fonts/avenir.otf",
  "./fonts/Poppins-Regular.otf",
  "./icon/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2", 
  "./icon/icons.css", 
  "./index.html",
  "./js/highlight.pack.js",
 "./img/dolla.png",
 "./img/icon.png",
 "./img/Octocat.png", 
 "./img/logo.png",
 "./materialize/css/materialize.min.css", 
 "./materialize/js/materialize.min.js",
  "https://raw.githubusercontent.com/BlobySoftware/GeckoJS/master/gecko.js"
]

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(caches => {
        return caches.addAll(urlsToacache)
          .then(() => self.skipWaiting)
      })
      .catch(err => console.log(err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]
  
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
    // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
