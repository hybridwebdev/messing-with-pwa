importScripts("precache-manifest.df99e748730cb681f5e2d5d34f1362cd.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', msg => {
    if(msg.data.action=='skipWaiting') {
        self.skipWaiting()
    }
} )

self.addEventListener('fetch', function(event) {
  let handler = async function() {
    try{
      let res = await fetch(event.request)
      let cache = await caches.open('cache')
      cache.put( event.request.url, res.clone() )
      return res
    }
    catch(error){
      return caches.match(event.request)
    }
  }
  event.respondWith( handler() )
} ) 


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
