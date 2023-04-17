import React from 'react'
import Particles from './particles'

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
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>EN - English</option>
                                            <option>Hindi</option>
                                            <option>EN - English</option>
                                            <option>EN - English</option>
                                            <option>EN - English</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Email address</label> */}
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        {/* <label>Password</label> */}
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="login-btn">Submit</button>
                                    <div>
                                        <a href="#">Forgot your password?</a>
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