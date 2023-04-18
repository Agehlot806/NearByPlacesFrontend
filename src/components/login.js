import React from 'react'
import Particles from './particles'
import { useState } from "react";
import { APIURL } from "./Constant/common";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom/dist';
// import { useNavigate } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    // const [scsMsg, setScsMsg] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");


    const googleAuth = () => {
        window.open(
            `${'http://localhost:9000'}/auth/google/callback`,
            "_self"
        );
    };

    const facebookauth = () => {
        window.open(
            `${'http://localhost:9000'}/auth/facebook/callback`,
            "_self"
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(APIURL + "login", {
                email: email,
                password: password,

            })
            .then((response) => {
                console.log(response.data.message);
                setSuccess(response.data.message);
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", response.data.admin);
                setSuccess(response.data.success);
                if (success) {
                    // <Redirect to="/dashboard" />
                    navigate("/dashboard");
                }

            })
            .catch((error) => {
                setSuccess(error.response.success);
                setErrMsg(error.response.message);
                console.log(error.response.data);

            });
    }
    return (

        <>
            <Particles />
            <div className='login-area section-padding '>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-1 mb-1'>
                                {success ? <span className='text-success'>{success}</span> : ""}
                                {/* <div className="text-success">{success ? <p>{success}</p> : null}</div> */}
                                <form autocomplete="off" onSubmit={handleSubmit}>
                                    <div className='text-center'>
                                        <h3 className="animate-charcter">Welcome To Book My Place</h3>
                                    </div>
                                    {/* <div className="form-group">
                                        <select className="form-control">
                                            <option>EN - English</option>
                                            <option>Hindi</option>
                                            <option>EN - English</option>
                                            <option>EN - English</option>
                                            <option>EN - English</option>
                                        </select>
                                    </div> */}
                                    <div className="form-group">
                                        {/* <label>Email address</label> */}
                                        <input type="email" className="form-control"
                                            autocomplete="new-email" placeholder="Enter email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Password</label> */}
                                        <input type="password" className="form-control"
                                            autocomplete="new-password" placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="login-btn">Submit</button>
                                    {errMsg ? <span>{errMsg}</span> : ""}
                                    <div className="login-line-main">
                                        <div className="login-line" />
                                        <div data-bn-type="text" className="login-line-text">or</div>
                                        <div className="login-line" /></div>
                                    <div>
                                        <button type="submit" className="login-btn Loginicon" onClick={googleAuth}><img src='assets/images/icons/google.png' /> Sign in with Google</button>

                                        <button type="submit" className="login-btn Loginicon" onClick={facebookauth}><img src='assets/images/icons/facebook.png' />Sign in with Facebook</button>
                                    </div>
                                    <div>
                                        <a href="#">Forgot your password?</a>
                                        <div className="additional-link">Don't have an account? <a href="/sqfcoin/signup">Signup</a></div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;