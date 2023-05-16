import React, { useState } from 'react';
import Particles from './particles'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
function Forgotpassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://nearbyplaceadminpanner.onrender.com/api/v1/forgetpassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            // setMessage(data.message);
            if (data.message == 'admin not found') {
                toast.error("admin not found")
            }
            if (data.message == 'Reset Token has been sent to admin@gmail.com') {
                toast.success ("Reset Token has been sent to admin@gmail.com")
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };
    return (
        <>
         <Toaster />
            <Particles />
            <div className='login-area section-padding'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-5 mb-5'>
                                {/* {message && <div>{message}</div>} */}
                                <form onSubmit={handleSubmit}>
                                    <div className='text-center'>
                                        <h3 className="animate-charcter">Forgot Your Password</h3>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email"
                                            onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="login-btn">Send Email</button>
                                    <div className="additional-link"><Link to="/"><i className="fa fa-angle-double-right" /> Login Now</Link></div>
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