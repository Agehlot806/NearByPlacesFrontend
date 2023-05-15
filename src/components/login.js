import React from 'react'
import Particles from './particles'
import google from "../assets/images/icons/google.png";
import facebook from "../assets/images/icons/facebook.png";

function Login() {
    return (
        <>
            <Particles />
            <div className='login-area section-padding '>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-1 mb-1'>
                                <form>
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
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Password</label> */}
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="login-btn">Login</button>

                                    <div className="login-line-main">
                                        <div className="login-line" />
                                        <div data-bn-type="text" className="login-line-text">or</div>
                                        <div className="login-line" /></div>
                        
                                    <div>
                                    <a href="forgot-password">Forgot your password?</a>
                                        <div className="additional-link">Don't have an account? <a href="sign-up">Signup</a></div>

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

export default Login