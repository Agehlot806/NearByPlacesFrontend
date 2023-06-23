import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'



function Mailconfig() {
const[recipients,setrecipients]=useState('')
const[title,settitle]=useState('')
const[body,setbody]=useState('')

    const MailConfig =  () => {
    
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
         fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/sendemail`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                recipients:recipients,
                title:title,
                body:body
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
               console.log(Response);
               setrecipients("")
               setbody("")
               settitle("")
               if(Response.message  =='Emails sent successfully'){
                toast.success('Emails sent successfully')
               }
               if(Response.message  =='Invalid recipient selection'){
                toast.error('Invalid recipient selection')
               }
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
                                            <h3><b>Mail Config</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            {/* <form> */}
                                                <div className="form-group">
                                                    <label>Send Email To :</label>
                                                    <select id="inputState" className="form-control" value={recipients} onChange={(e)=>setrecipients(e.target.value)}>
                                                        <option selected>Choose...</option>
                                                        <option>admin</option>
                                                        <option>user</option>
                                                     


                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Send title messages</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." value={title} onChange={(e)=>settitle(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Send Body messages</label>
                                                    <input type="email" className="form-control" placeholder="Enter..."  value={body} onChange={(e)=>setbody(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <p>Note: Make sure that you created Sender identity in your SendGrid account <br />
                                                        https://docs.sendgrid.com/ui/sending-email/sender-verification </p>
                                                </div>
                                                <br />
                                                <div className='user-head'>
                                                    <button onClick={MailConfig}> Text API</button>
                                                </div>

                                            {/* </form> */}

                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Mail & Registation</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Default email</label>
                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Report email</label>
                                                            <input rows={5} className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>No-reply email</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>

                                                        <br />
                                                        <div className='user-head'>
                                                            <a href='#'><i className="fa fa-check-square-o" /> save</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Mailconfig