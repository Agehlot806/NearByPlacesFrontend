import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'


function Managepageedit() {
    const {_id}=useParams()
    console.log("_id_id",_id);
    const[title,setTitle]=useState([])
    const[link,setLink]=useState([])

    useEffect(() => {
        allCms()
    }, [])

    const allCms = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/managemenu/${_id}`)
            .then((res) => res.json())
            .then((responsive) => {
            //  console.log("responsive",responsive)
             setTitle(responsive.cms.Title)
             setLink(responsive.cms.Link)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    // const UpdateCmsall = (e) => {
    //     e.preventDefault();
        
    //     var formData = new FormData();
    //     formData.append('Title',title);
    //     formData.append('Link', link);

    //     axios({
    //         method: "put",
    //         url: `https://nearbyplaceadminpanner.onrender.com/api/v1/managemenu/${_id}`,
    //         data: formData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //     })
    //         .then(response => {
    //         console.log("responseresponse",response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });

    // }
    const UpdateCmsall = async () => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000/',
        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/managemenu/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                Title: title,
                Link: link,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
         
                console.log("ResponseResponseResponseResponse", Response)
            
            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }

  
   
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
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Edit Manage pages</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form onSubmit={UpdateCmsall}>
                                                <div className="form-group">
                                                    <label>Title :</label>
                                                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Link</label>
                                                    <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} className="form-control" placeholder="Enter..." />
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

export default Managepageedit