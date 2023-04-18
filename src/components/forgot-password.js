import React from 'react'
import Particles from './particles'

function Forgotpassword() {
    return (
        <>
            <Particles />
            <div className='login-area section-padding'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-5 mb-5'>
                                <form>
                                    <div className='text-center'>
                                        <h3 className="animate-charcter">Forgot Your Password</h3>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <button type="submit" className="login-btn">Send Email</button>
                                    <div className="additional-link"><a href="/">Login Now</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpassword