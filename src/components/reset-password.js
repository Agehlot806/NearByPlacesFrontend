import React from 'react'
import Particles from './particles'
import { Link } from 'react-router-dom'

function resetpassword({props}) {
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
                                        <h3 className="animate-charcter">Reset Password</h3>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter New Password"
                                         />
                                    </div>
                                    <button type="submit" className="login-btn">Submit</button>
                                    <div className="additional-link"><Link to="/">Login Now</Link></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default resetpassword