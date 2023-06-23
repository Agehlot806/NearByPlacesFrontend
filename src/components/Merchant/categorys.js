import React, { useEffect, useState } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Navbar } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { Input } from "reactstrap";
import Sidebar from '../../directives/sidebar';
import Footer from '../../directives/footer';

function Categorys() {


const {_id}=useParams("")
console.log("tarunbirla",_id);
const[categorydata,setCategoryData]=useState([])
const[categoryname,setCategoryname]=useState([])
    useEffect(() => {
        allStore()
    }, [])

    const allStore = (page) => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory/${_id}/stores`)
            .then((res) => res.json())
            .then((responsive) => {
            console.log(responsive);
setCategoryData(responsive.category.stores)
setCategoryname(responsive.category.categoryname)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    console.log("djsdhshdjksd",categorydata);

  



    
    return (
        <>
            <Toaster />
        <Navbar/>
        <Sidebar/>
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <div className="box-title" style={{ width: '100%' }}>
                                                <div className=" row ">
                                                    <div className="pull-left col-md-6 mt-1">
                                                        <h3><b>All Merchant</b> <span className='Enabled-btn'>{categoryname}</span></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search"
                                                                  />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat filterbysearch" >
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/merchant-add-new' className="ml-2 btn btn-flat">
                                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                                    </Link>
                                                                    <span className="ml-2 btn btn-flat"><i  className="fa fa-download" aria-hidden="true" /></span>
                                                                    <a className="ml-2 btn btn-flat">
                                                                        <i class="fa fa-filter" aria-hidden="true"></i>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Store Photos</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Owner</th>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Rating</th>
                                                            <th scope="col">Reviews</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {categorydata.map((items, index) => (
                                                            <tr>
                                                                <td className='text-center'> <img src={items.storephoto} /></td>
                                                                
                                                                <td>
                                                                    <b>{items.name}</b><br />
                                                                    <i className='mdi mdi-map-marker' /> {items.latitude}<br />
                                                                </td>
                                                                <td className='click-color'>
                                                                    <Link to="/all-merchant"><u>{items.storeownername}</u></Link>
                                                                    <Link to=''><i className='mdi mdi-eye-outline' /></Link>
                                                                </td>
                                                                <td className='click-color' >
                                                                    <Link to='/all-merchant'><u>{categoryname}</u></Link>
                                                                </td>
                                                                <td>{items.status === true ? <span className='Enabled-btn'>Enabled</span> : <span className='Disabled-btn'>Disabled</span>}</td>
                                                                <td>{items.ratings}</td>
                                                                <td className='click-color'><Link to={"/review/" + items._id}>Reviews</Link></td>
                                                                <td className='action-btn'>
                                                                    
                                                                    {/* <Link to={"/all-store-edit/" + items._id}><i class="fa fa-pencil-square-o" /></Link> */}
                                                                    {/* <Link to='/services'><i class="fa fa-list" /> Services</Link> */}
                                                                    {/* <Button ><i class="fa fa-trash-o" /></Button> */}
                                                                    {/* <Link ><i className="fa fa-download" aria-hidden="true" /></Link> */}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
       <Footer/>

            {/* Modal */}
            
        </>
    )
}
export default Categorys;