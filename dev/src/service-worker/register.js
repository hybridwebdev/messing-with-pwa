/* eslint-disable no-console */

import { register } from 'register-service-worker'
let notifyUserAboutUpdate = worker => {
  alert("Hey new content")
  worker.postMessage({
    action: "skipWaiting"
  });
}
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}worker.js`, {
    ready () {
      console.log('ready')
    },
    registered () {
      console.log('registered')
    },
    cached () {
      console.log('cached')
    },
    updatefound () {
    },
    updated (registration) {
      notifyUserAboutUpdate(registration.waiting)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
  var refreshing;
  navigator.serviceWorker.addEventListener("controllerchange", function(){
    if(refreshing) return;
    window.location.reload();
    refreshing = true;
  })
}
