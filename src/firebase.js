import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
 import axios from 'axios';



const firebaseConfig = {
    apiKey: "AIzaSyA_XvfE_KSyoe9ul61-Nj6B6qwoWb4K_dc",
    authDomain: "book-my-place-tarun.firebaseapp.com",
    projectId: "book-my-place-tarun",
    storageBucket: "book-my-place-tarun.appspot.com",
    messagingSenderId: "687967002412",
    appId: "1:687967002412:web:e94c821b8c969df7501689",
    measurementId: "G-QRDPX3BXPS"
};

function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            const app = initializeApp(firebaseConfig);

            const messaging = getMessaging(app);
            getToken(messaging, {
                vapidKey:
                    "BLO3cZR_2lzsIPQEwjYeXbJbj4XO2bROWOEzF8ACskg4WpEr3RvTM9bYFJKcHUd4HSfX1VvdT9TdyiaU9ZecCb4",
            }).then((currentToken) => {
                if (currentToken) {
                    console.log("currentToken: ", currentToken);
                    sendTokenToServer(currentToken)
                } else {
                    console.log("Can not get token");
                }
            });
        } else {
            console.log("Do not have permission!");
        }
    });
}


function sendTokenToServer  (token) {
  localStorage.setItem("token", token);
           console.log("tokentoken", token);
          
       };

requestPermission()