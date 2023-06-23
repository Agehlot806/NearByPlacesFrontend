import React from 'react'
import Particles from './particles'
import { Link } from 'react-router-dom'
import google from "../assets/images/icons/google.png";
import facebook from "../assets/images/icons/facebook.png"
import '../firebase'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'

function Signup() {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [imagefile, setImgFile] = useState([])
    // const [fcmToken, setfcmToken] = useState(false)
    // const datatoken = JSON.stringify(localStorage.getItem('token'))

    // console.log("datatokendatatokendatatoken",datatoken);
    // useEffect(()=>{
    //     registeradmin()
    // // console.log("datatokendatatokendatatoken",token);

    // })
    const onFileChange = (event) => {
        setImgFile(event.target.files[0]);
        console.log(event.target.files[0])
    }

    const registeradmin = () => {
        const datatoken = JSON.stringify(localStorage.getItem('token'))
        // e.preventDefault();
        // console.log("registerdata datatoken",datatoken);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('adminavatar', imagefile);
        formData.append('fcmToken',datatoken.replace(/"/g, ''))
        axios
            .post(`https://nearbyplaceadminpanner.onrender.com/api/v1/registeradmin`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                 // history.push("/all-events");mmit 
                 if(response.message=='user added Successfully'){
toast.success("user added Successfully")
                 }
            })
            .catch((error) => {
                console.log(error.response.data);

            });
    }

    // const sendTokenToServer = (data) => {
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('email', email);
    //     formData.append('password', password);
    //     formData.append('adminavatar', imagefile);
    //     axios.post('https://nearbyplaceadminpanner.onrender.com/api/v1/registeradmin', { fcmToken: data }, formData, {
    //         headers: { "Content-Type": "multipart/form-data" },
    //         withCredentials: true,
    //     })


    //         .then((response) => {
    //             console.log('FCM token sent to server', response);
    //         })
    //         .catch((error) => {
    //             console.error('Failed to send FCM token to server:', error);
    //         });
    // };
   
    // console.log("TOKEN DATA", datatoken); 
    // setfcmToken(datatoken)

    return (
        <>
            <Toaster />

            <Particles />
            <div className='login-area section-padding '>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-1 mb-1'>
                                {/* <form> */}
                                    <div className='text-center'>
                                        <h3 className="animate-charcter">Create Your Account</h3>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Username"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control" placeholder="Confirm Password"
                                            onChange={onFileChange} />
                                    </div>
                                    <button className="login-btn" type='submit' onClick={registeradmin}>SignUp </button>

                                    <div className="login-line-main">
                                        <div className="login-line" />
                                        <div data-bn-type="text" className="login-line-text">or</div>
                                        <div className="login-line" /></div>
                                    <div>
                                        <button type="submit" className="login-btn Loginicon"><img src={google} alt="google" /> Sign in with Google</button>

                                        <button type="submit" className="login-btn Loginicon"><img src={facebook} alt="facebook" />Sign in with Facebook</button>
                                    </div>
                                    <div>

                                        <div className="additional-link">Already a member?  <Link to="/admin">login</Link></div>

                                    </div>
                                {/* </form> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup