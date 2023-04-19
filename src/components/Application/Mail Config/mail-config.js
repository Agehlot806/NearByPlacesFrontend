import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'


function Mailconfig() {
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
                                            <h3><b>Mail Config</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Service Mailer :</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Send Grid API Key :</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Default Mail</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Report Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>No Reply Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Type & Subscription</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>User Type :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>No Store Allow :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Offers Allowed Monthly</label>
                                                            <input type="date" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Event Allowed Monthly</label>
                                                            <input type="date" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Push Auto Campaigns</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Compaigns Allowed Monthly</label>
                                                            <input type="date" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Mail & Registation</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Verification Email :</label>
                                                            <input type="email" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Welcome Message :</label>
                                                            <textarea rows={5} className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Enable user (Owner) Registation</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone Verification (MobileUser)</label>
                                                            <input type="number" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <br />
                                                        <div className='user-head'>
                                                            <a href='#'><i className="fa fa-check-square-o" /> Create</a>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Mailconfig