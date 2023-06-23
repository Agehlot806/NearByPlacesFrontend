import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import axios from 'axios'


function Adduser() {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [imagefile, setImgFile] = useState([])

    const onFileChange = (event) => {
        setImgFile(event.target.files[0]);
        console.log(event.target.files[0])
    }

    const registeradmin = () => {
        const datatoken = JSON.stringify(localStorage.getItem('token'))
        // e.preventDefault();
        // console.log("registerdata datatoken",datatoken);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('adminavatar', imagefile);
        formData.append('fcmToken', datatoken.replace(/"/g, ''))
        axios
            .post(`https://nearbyplaceadminpanner.onrender.com/api/v1/registeradmin`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                // history.push("/all-events");mmit 
                if (response.message == 'user added Successfully') {
                    toast.success("user added Successfully")
                }
            })
            .catch((error) => {
                console.log(error.response.data);

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
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Create Users</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form >
                                                <div className="form-group image-size">
                                                    <label>Upload File</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." onChange={onFileChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Full Name :</label>
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>

                                                <div className="form-group">
                                                    <label>Password </label>
                                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className='user-head'>
                                                    <button onClick={registeradmin}><i className="fa fa-check-square-o" /> Create</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Adduser