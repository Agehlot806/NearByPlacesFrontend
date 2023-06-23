import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebasephone';
import Particles from './particles'
import google from "../assets/images/icons/google.png";
import facebook from "../assets/images/icons/facebook.png";
import { Link } from 'react-router-dom';
const Merchant = () => {

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const verifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        onSignInSubmit();
        console.log('reCAPTCHA verified');
      },
      defaultCountry: 'IN'
    });
    setRecaptchaVerifier(verifier);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      setMobile(value);
    } else if (name === 'otp') {
      setOtp(value);
    }
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+91' + mobile;
    console.log(phoneNumber);
    const appVerifier = recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        console.log('OTP has been sent');
        // Send user data to the API
        const userData = {
          phoneNumber,
          // Add more user data if needed
        };
        sendUserDataToApi(userData);
      })
      .catch((error) => {
        console.log('SMS not sent');
      });
  };
  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        console.log(JSON.stringify(user.uid));
        console.log(JSON.stringify(user.phoneNumber));
        console.log(JSON.stringify(user.refreshToken));
        // alert('User is verified');
        window.location.replace("/dashboard")
        // Send user data to the API
        const userData = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          refreshToken: user.refreshToken,
          // Add more user data if needed
        };
        sendUserDataToApi(userData);
      })
      .catch((error) => {
        console.log("User couldn't sign in (bad verification code?)");
      });
  };
  const sendUserDataToApi = (userData) => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/merchant/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User data sent to API:', data);
        // Handle the API response as needed
      })
      .catch((error) => {
        console.log('Error sending user data to API:', error);
      });
  };
  return (
    <>
<Particles />
<div className='login-area section-padding '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='login-box mt-1 mb-1'>
              <div className='text-center'>
                  <h3 className="animate-charcter">Welcome To Book My Place</h3>
                </div>
      <div>
        <h4>Login Form</h4>
        
          
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button" ></div>
          <input type="number" name="mobile" placeholder="Mobile number"  required onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        
        <h4>Enter OTP</h4>
        <form onSubmit={onSubmitOTP}> 
          <input type="number" name="otp" placeholder="OTP Number"  required onChange={handleChange} />
          <button type="submit" >Submit</button>
        </form>
      
        {/* <button onClick={UpdateProfilerDetail}>click</button> */}
      </div>
      <div className="login-line-main">
                  <div className="login-line" />
                  <div data-bn-type="text" className="login-line-text">or</div>
                  <div className="login-line" /></div>
                <div>
                  <button type="submit" className="login-btn Loginicon"><img src={google} alt="google" /> Sign in with Google</button>
                  <button type="submit" className="login-btn Loginicon"><img src={facebook} alt='facebook' />Sign in with Facebook</button>
                </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* <Particles />
      <div className='login-area section-padding '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='login-box mt-1 mb-1'>
                <form>
                <div className='text-center'>
                  <h3 className="animate-charcter">Welcome To Book My Place</h3>
                </div>
                <form onSubmit={onSignInSubmit}>
                                    <div className="form-group">
                                 
                                        <input type="number" className="form-control" placeholder="Enter Mobile Number" required onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="login-btn" >Send the OTP</button>
                                    </form>
                                    <form onSubmit={onSubmitOTP}>
                                    <div className="form-group">
                                 
                                        <input type="number" className="form-control" placeholder="Enter the OTP" required onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="login-btn" >Submit</button>
                                    </form> 
                <form onSubmit={onSignInSubmit}>
                  <div id="sign-in-button"></div>
                  <input type="number" name="mobile"  className="form-control" placeholder="Mobile number" required onChange={handleChange} />
                  <button type="submit" className="login-btn" >Submit</button>
                </form>
                <form onSubmit={onSubmitOTP}>
                  <input type="number" name="otp" className="form-control" placeholder="OTP Number" required onChange={handleChange} />
                  <button type="submit" className="login-btn" >Submit</button>
                </form>
              <button type="button" className="login-btn" >Send the OTP</button>


                <div className="login-line-main">
                  <div className="login-line" />
                  <div data-bn-type="text" className="login-line-text">or</div>
                  <div className="login-line" /></div>
                <div>
                  <button type="submit" className="login-btn Loginicon"><img src={google} alt="google" /> Sign in with Google</button>
                  <button type="submit" className="login-btn Loginicon"><img src={facebook} alt='facebook' />Sign in with Facebook</button>
                </div>

                <div>
                  <div className="additional-link">Don't have an account? <Link to="/sign-up">Signup</Link></div>

                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Merchant;