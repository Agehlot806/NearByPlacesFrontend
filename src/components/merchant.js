import React, { useState } from 'react'
import Particles from './particles'
import OtpInput from "react-otp-input";
import google from "../assets/images/icons/google.png";
import facebook from "../assets/images/icons/facebook.png";
function Merchant() {
    const [code, setCode] = useState("");
    const handleChange = (code) => setCode(code);
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
                                        <input type="number" className="form-control" placeholder="Enter Mobile Number" />
                                    </div>
                                    <button type="button" className="login-btn" data-toggle="modal" data-target="#exampleModal">Send the OTP</button>
                                    <div className="login-line-main">
                                        <div className="login-line" />
                                        <div data-bn-type="text" className="login-line-text">or</div>
                                        <div className="login-line" /></div>
                                    <div>
                                        <div className="additional-link">Don't have an account? <a href="sign-up">Signup</a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='text-center'>
                                    <h3 className="animate-charcter">Send OTP</h3>
                                </div>
                                <div className="form-group">
                                    {/* <label>Email address</label> */}
                                    {/* <input type='number'  value={code}
                                        onChange={handleChange}
                                        numInputs={4}
                                        separator={<span style={{ width: "8px" }}></span>}
                                        isInputNum={true}
                                        shouldAutoFocus={true}
                                        renderInput={(props) => <input {...props} />}
                                        inputStyle={{
                                            border: "1px solid transparent",
                                            borderRadius: "8px",
                                            width: "54px",
                                            height: "54px",
                                            fontSize: "32px",
                                            color: "black",
                                            textAlign:"center",
                                            borderBlockColor:"#5A189A",
                                            fontWeight: "400",
                                            caretColor: "blue"
                                        }}
                                        focusStyle={{
                                            border: "1px solid #CFD3DB",
                                            outline: "none"
                                        }}
                                   /> */}
                                    <OtpInput
                                        value={code}
                                        onChange={handleChange}
                                        numInputs={4}
                                        className='otpbox'
                                        shouldAutoFocus={true}
                                        renderInput={(props) => <input {...props} />}
                                        inputStyle={{
                                            border: "1px solid transparent",
                                            borderRadius: "8px",
                                            width: "54px",
                                            height: "54px",
                                            fontSize: "32px",
                                            color: "black",
                                            textAlign: "center",
                                            borderBlockColor: "#5A189A",
                                            fontWeight: "400",
                                            caretColor: "blue"
                                        }}
                                        focusStyle={{
                                            border: "1px solid #CFD3DB",
                                            outline: "none"
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="login-btn" data-dismiss="modal">Close</button>
                            <button type="button" className="login-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Merchant