import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { useState } from 'react'
import { Button } from 'reactstrap'
import toast, { Toaster } from 'react-hot-toast'

function Managemenu() {
    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const mangeMenucreate = async () => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/createcms`, {
            method: 'POST',
            body: JSON.stringify({
                Title: title,
                Link: link,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                if (Response.message == "cms created successfully") {
                    toast.success("cms created successfully"
                    )
                }
                console.log("ResponseResponseResponseResponse", Response)

            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }

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
                                            <h3><b>Create Manage Menu</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            {/* <form > */}
                                                <div className="form-group">
                                                    <label>Title :</label>
                                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Link</label>
                                                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <br />
                                                <div className='user-head'>
                                                    <button onClick={mangeMenucreate}><i className="fa fa-check-square-o" /> Create</button>
                                                </div>
                                            {/* </form> */}
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

export default Managemenu