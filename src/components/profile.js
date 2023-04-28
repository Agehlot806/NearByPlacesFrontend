import React from 'react'
import Navbar from '../directives/navbar'
import Sidebar from '../directives/sidebar'
import { useEffect } from 'react'
import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import axios from "axios";

function Profile() {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState([]);
    // const handleProfile = () => {
    //     fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/myprofile`)
    //         .then((res) => res.json())
    //         .then((responsive) => {
    //             console.log("tsaryhxdashgxfahsxasx", responsive);
    //             setUser(responsive)
    //         })
    //         .catch((error) => {
    //             console.log("error", error);
    //         })
    // }
    // useEffect(() => {
    //     console.log("user", user);
    //     // allStore();
    // })

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                "https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminpassword",
                { password }
            );
            setMessage("Password changed successfully!");
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Edit user information</b></h3>
                                                    {/* <Button onClick={handleProfile}>Profile</Button> */}

                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group image-size">
                                                            <input type="file" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Full name :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email :</label>
                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Username :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone Number</label>
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                        <br />
                                                        <div className='user-head'>
                                                            <a href='#'><i className="mdi mdi-content-save-outline" /> Save</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Change Password</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <Input
                                                                type="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label>Confirm Password</label>
                                                            <input type="password" className="form-control" />
                                                        </div> */}
                                                        <br />
                                                        <div className='user-head'>
                                                            <Button><i className="mdi mdi-content-save-outline" /> Change Password</Button>
                                                        </div>
                                                        <p>{message}</p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>User Subscription</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <div className="form-group">
                                                        <label>User type</label><br />
                                                        <label className='Enabled-btn'>MobileUser</label>
                                                    </div>
                                                    <h6>CONSUMPTION</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Subscription & Plan</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    `
                                                    <i className="mdi mdi-account font-size18px" /> Your <u>FREE</u>  plan will expire after 12 Month(s).
                                                    &nbsp;&nbsp;<u className="text-blue cursor-pointer" >Update running plan</u>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Billing</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <div>
                                                        <label>Last Invoice:</label><br />
                                                        InvoiceID: <u>#001413</u> (Unpaid)
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <label>Last Transaction:</label><br />
                                                        No transaction            <div>
                                                            <label>Last Invoice:</label><br />
                                                            InvoiceID: <u>#001413</u> (Unpaid)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile