import React from 'react'
import Navbar from '../directives/navbar'
import Sidebar from '../directives/sidebar'
import { useEffect } from 'react'
import { useState } from 'react';
import { Button, Input, Form } from 'reactstrap';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { Link } from "react-router-dom";


function Profile() {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [User, setUser] = useState([]);
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPhoto, setUserPhoto] = useState();
    const [newPassword, setNewPassword] = useState();
    const [file, setFile] = useState([]);
    const [showImage, setShowImage] = useState(false);
    const [updattePassword, setUpdatePassword] = useState("");
    const [userId ,setUserId] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/myprofile`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUserName(data.user.name);
                setUserEmail(data.user.email)
                setUserId(data.user._id)
            })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminpassword`, {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                oldpassword: password,
                newpassword: newPassword,
            }),

        })
            .then((res) => res.json())
            .then((responsive) => {
                setUpdatePassword(responsive.message);
                toast.success("password update Successfully")
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    const UpdateProfilerDetail = (e) => {
        e.preventDefault();
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminprofile`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                name: userName,
                email: userEmail,
            }),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
            .then((res) => res.json())
            .then((responsive) => {
                toast.success("Profile Updated Successfully")
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    const handleFile = (event) => {
        setShowImage(true);
        setUserPhoto(event.target.files[0])
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    // const handleUploadProfile = (e) => {
    //     e.preventDefault();
    //     var formData = new FormData();
    //     formData.append('file', userPhoto);
    //     axios({
    //         method: "put",
    //         credentials: 'include',
    //         url: `https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminprofilepicture/${userId}`,
    //         data: formData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //     })
    //         .then(response => {
    //             setMessage(response.data);
    //             toast.success("admin image Updated Successfully");
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    const handleUploadProfile = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', userPhoto);
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminprofilepicture/${userId}`,formData, {
            method: 'PUT',
            credentials: 'include',
            headers: { 'content-type': "multipart/form-data" },
        })
            .then((res) => res.json())
            .then((responsive) => {
                toast.success("Profile Updated Successfully")
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    return (
        <>
            <Navbar />
            <Sidebar />
            <Toaster />
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

                                                </div>
                                                <div className="product-card-body">
                                                    <Form onSubmit={handleUploadProfile}>
                                                        <div className="form-group image-size">
                                                            <Input type="file" className="form-control"
                                                                placeholder="Enter..."
                                                                onChange={handleFile} />
                                                            {showImage ? <img src={file} alt='profile' /> : ""}

                                                        </div>
                                                        <div className='user-head'>
                                                            <Button type='submit'>Upload</Button>
                                                        </div>
                                                    </Form>

                                                    <Form onSubmit={UpdateProfilerDetail}>
                                                        <div className="form-group">
                                                            <label>Username :</label>
                                                            <Input type="text" className="form-control"
                                                                placeholder="Enter..."
                                                                value={userName}
                                                                onChange={(e) => setUserName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email :</label>
                                                            <Input type="email" className="form-control"
                                                                placeholder="Enter..."
                                                                value={userEmail}
                                                                onChange={(e) => setUserEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className='user-head'>
                                                            <Button><i className="mdi mdi-content-save-outline" /> Save</Button>

                                                        </div>
                                                    </Form>


                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Change Password</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <Form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <label>Old Password</label>
                                                            <Input
                                                                type="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label> New Password</label>
                                                            <Input
                                                                type="password"
                                                                value={newPassword}
                                                                onChange={(e) => setNewPassword(e.target.value)}
                                                            />
                                                        </div>

                                                        <br />
                                                        <div className='user-head'>
                                                            <Button><i className="mdi mdi-content-save-outline" /> Change Password</Button>
                                                        </div>
                                                        <p>{message}</p>
                                                    </Form>
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
            </div >
        </>
    )
}

export default Profile;