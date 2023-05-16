import React, { useState } from 'react'
import Particles from './particles'
import { Link, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
function Resetpassword() {
    const { token } = useParams()
    console.log("token", token);
    const [password, setPassword] = useState('');
    const ResetPassword = async () => {
        setPassword("")
        //API to render signup
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        // console("data>>>>>>>>>>>>>>>>",user,pass)
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/resetpassword/${token}`, {
            method: 'PUT',
            body: JSON.stringify({
                password: password,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                // console.log("response", Response);
                if (Response.message = 'Password Changed Successfully') {
                    toast.success("Password Changed Successfully")
                }
            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }
    return (
        <>
            <Toaster />
            <Particles />
            <div className='login-area section-padding'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='login-box mt-5 mb-5'>
                                <div className='text-center'>
                                    <h3 className="animate-charcter">Reset Password</h3>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
                                        className="form-control" placeholder="Enter New Password"
                                    />
                                </div>
                                <button type="submit" className="login-btn" onClick={ResetPassword}>Submit</button>
                                <div className="additional-link"><Link to="/"><i className="fa fa-angle-double-right" /> Login Now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resetpassword