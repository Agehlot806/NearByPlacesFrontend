import React, { useState } from 'react'
import Particles from './particles'
import toast, { Toaster } from 'react-hot-toast'
import { Redirect, useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory();
    // const [cookies, setCookie] = useCookies(['user']);
    const [password, setpassword] = useState()
    const [email, setemail] = useState()

    const loginpage = async () => {
        var headers = {
            withCredentials: true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/login`, {
            withCredentials: true,
            // credentials: 'include',
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify({
                password: password,
                email: email,
            }),

            headers: headers,



        })
            .then((Response) => Response.json())
            .then((Response) => {
                console.log(Response.headers.get('set-cookie')); // undefined
                console.log(document.cookie);
                // localStorage.setItem("token",Response.token);
                // setCookie('token', Response.token, { path: '/' });
                console.log("ResponseResponseResponseResponse", Response)
                if (Response.success == true) {
                    // window.open("/dashboard")
                    // window.open("/dashboard")
                    // window.location.replace("/dashboard")
                    history.push("/dashboard")
                    // <Redirect  to ="/dashboard" />
                }
                if (Response.message == 'Please enter all field') {
                    toast.error("Please enter all field")
                }
                if (Response.message == 'Incorrect Email or Password') {
                    toast.error("Incorrect Email or Password")
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
                            <div className='login-box mt-4 mb-4'>
                                {/* <form> */}
                                <div className='text-center'>
                                    <h3 className="animate-charcter">Welcome To Book My Place</h3>
                                </div>
                                <div className="form-group">
                                    {/* <label>Email address</label> */}
                                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    {/* <label>Password</label> */}
                                    <input type="password" className="form-control"
                                        placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <button type="submit" className="login-btn" onClick={loginpage} >Login</button>


                                <div>
                                    <a href="forgot-password"><i className="fa fa-angle-double-right" /> Forgot your password?</a>
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
export default Login