import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'


function Subscriptionadd() {
const [image,setImage]=useState('')
const [name,setName]=useState('')
const [details,setDetails]=useState('')
const [price,setPrice]=useState('')
const [validityDays,setvalidityDays]=useState('')


const onFileChange = (event) => {
    setImage(event.target.files[0]);

}
    const Addsubscriptionplan = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subscriptionimage', image);
        formData.append('subname', name);
        formData.append('Details', details);
        formData.append('subprice', price);
        formData.append('validityDays', validityDays);
   
        axios
            .post(`https://nearbyplaceadminpanner.onrender.com/api/v1/addsubscriptionplan`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                if(response.message =='subscription added successfully'){
                    toast.success("subscription added successfully")
                }
                // toast.success(" Events Updated Successfully")
                // history.push("/all-events");mmit 
            })
            .catch((error) => {
                console.log(error.response.data);

            });
    };
    return (
        <>
       <Toaster />
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Create Subscription</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form onSubmit={Addsubscriptionplan}>
                                            <div className="form-group">
                                                    <label>Image</label>
                                                    <input type="file"  onChange={onFileChange} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Details</label>
                                                    <input type="text"  value={details}  onChange={(e)=>setDetails(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                              
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input type="number"  value={price}  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>validityDays</label>
                                                    <input type="number"  value={validityDays}  onChange={(e)=>setvalidityDays(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                               
                                                <br />
                                                <div className='user-head'>
                                                    <button><i className="fa fa-check-square-o" /> Create</button>
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

export default Subscriptionadd