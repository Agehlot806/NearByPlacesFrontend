// import React, { useState } from 'react';
// import axios from 'axios';
// import "../../firebase"
// // import '../../firebase';
// const Myuser = () => {
//   const [idToken, setIdToken] = useState('');
//   const [fcmToken, setFcmToken] = useState('');
//   const [registrationStatus, setRegistrationStatus] = useState('');
//   const handleRegister = async () => {
//     try {
//       // Make a POST request to your API endpoint
//       const response = await axios.post('/api/register', {
//         idToken: idToken,
//         fcmToken: fcmToken,
//       });
//       // Handle the response from the server
//       setRegistrationStatus(response.data.message);
//     } catch (error) {
//       // Handle errors
//       console.error(error);
//     }
//   };
//   const handleGoogleSignIn = (googleUser) => {
//     // Retrieve the Google ID token
//     const idToken = googleUser.getAuthResponse().id_token;
//     setIdToken(idToken);
//     // Retrieve the FCM token
//     const messaging = firebase.messaging();
//     messaging
//       .getToken({ vapidKey: 'YOUR_VAPID_KEY' }) // Replace with your VAPID key
//       .then((currentToken) => {
//         if (currentToken) {
//           setFcmToken(currentToken);
//         } else {
//           console.log('No FCM token available');
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving FCM token', error);
//       });
//   };
//   const handleFacebookSignIn = (response) => {
//     // Retrieve the Facebook access token
//     const accessToken = response.accessToken;
//     setIdToken(accessToken);
//     // Retrieve the FCM token
//     const messaging = firebase.messaging();
//     messaging
//       .getToken({ vapidKey: 'YOUR_VAPID_KEY' }) // Replace with your VAPID key
//       .then((currentToken) => {
//         if (currentToken) {
//           setFcmToken(currentToken);
//         } else {
//           console.log('No FCM token available');
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving FCM token', error);
//       });
//   };
//   const handleMobileOTP = (otp) => {
//     // Verify the mobile OTP and retrieve the ID token
//     // Replace this code with your own mobile OTP verification logic
//     const idToken = 'YOUR_MOBILE_OTP_ID_TOKEN';
//     setIdToken(idToken);
//     // Retrieve the FCM token
//     const messaging = firebase.messaging();
//     messaging
//       .getToken({ vapidKey: 'YOUR_VAPID_KEY' }) // Replace with your VAPID key
//       .then((currentToken) => {
//         if (currentToken) {
//           setFcmToken(currentToken);
//         } else {
//           console.log('No FCM token available');
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving FCM token', error);
//       });
//   };
//   return (
//     <div>
//       {/* Google Sign-In button */}
//       <div className="g-signin2" data-onsuccess={handleGoogleSignIn}></div>
//       {/* Facebook Login button */}
//       <div
//         className="fb-login-button"
//         data-width=""
//         data-size="large"
//         data-button-type="continue_with"
//         data-layout="default"
//         data-auto-logout-link="false"
//         data-use-continue-as="true"
//         data-onlogin={handleFacebookSignIn}
//       ></div>
//       {/* Mobile OTP input */}
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         onChange={(e) => handleMobileOTP(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <p>{registrationStatus}</p>
//     </div>
//   );
// };
// export default Myuser;