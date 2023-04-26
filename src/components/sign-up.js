import React from 'react'
import Particles from './particles'
import {Link} from 'react-router-dom'
import google from "../assets/images/icons/google.png";
import facebook from "../assets/images/icons/facebook.png"
function Signup() {
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
                                <h3 className="animate-charcter">Create Your Account</h3>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" className="login-btn">SignUp</button>

                            <div className="login-line-main">
                                <div className="login-line" />
                                <div data-bn-type="text" className="login-line-text">or</div>
                                <div className="login-line" /></div>
                            <div>
                                <button type="submit" className="login-btn Loginicon"><img src={google} alt="google" /> Sign in with Google</button>

                                <button type="submit" className="login-btn Loginicon"><img src={facebook} alt ="facebook" />Sign in with Facebook</button>
                            </div>
                            <div>
                            
                                <div className="additional-link">Already a member?  <Link to="/">login</Link></div>

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

export default Signup