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
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState();
    const [fileData, setFileData] = useState([]);
    const [newPassword, setNewPassword] = useState();
    const [file, setFile] = useState([]);
    const [showImage, setShowImage] = useState(false);
    const [updattePassword, setUpdatePassword] = useState(false);
    const [userId, setUserId] = useState("");

    const [photo, setPhoto] = useState("")

    useEffect(() => {
        if (updattePassword) {
            getProfileData();
        }
        getProfileData();
    }, [])

    const getProfileData = () => {
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
                setFileData(data.user.AdminAvatar.url)
                localStorage.setItem('AdminAvatar', data.user.AdminAvatar.url);
                localStorage.setItem('Name', data.user.name);
            })
    }


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
                toast.success("Password update Successfully")
                setUpdatePassword(true);
            })
            .catch((error) => {
                console.log("error", error);
                getProfileData();
            })
    }


    const UpdateProfilerDetail = (e) => {
        e.preventDefault();
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminprofile`, {
            method: 'PUT',
            headers: { "Content-Type": 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name: userName,
                email: userEmail,
            }),

        })
            .then((res) => res.json())
            .then((responsive) => {
                toast.success("Profile Updated Successfully");
                getProfileData();
            })
            .catch((error) => {
                console.log("error", error);
            })
    }



    const handleFile = (event) => {
        setShowImage(true);
        setPhoto(event.target.files[0]);
        setFile(URL.createObjectURL(event.target.files[0]));

    }


    const handleUploadProfile = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', photo);
        axios({
            method: "put",
            url: `https://nearbyplaceadminpanner.onrender.com/api/v1/updateadminprofilepicture/${userId}`,
            withCredentials: true,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            credentials: 'include'
        })
            .then(response => {
                setMessage(response.data.message);
                getProfileData();
                toast.success("Image upload successfully");
            })
            .catch(error => {
                console.log(error);
            });
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
                                                            {showImage ? <img src={file} alt='profile' /> : <img src={fileData} alt='profileimage'></img>}

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