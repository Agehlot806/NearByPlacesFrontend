importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyA_XvfE_KSyoe9ul61-Nj6B6qwoWb4K_dc",
    authDomain: "book-my-place-tarun.firebaseapp.com",
    projectId: "book-my-place-tarun",
    storageBucket: "book-my-place-tarun.appspot.com",
    messagingSenderId: "687967002412",
    appId: "1:687967002412:web:e94c821b8c969df7501689",
    measurementId: "G-QRDPX3BXPS"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });