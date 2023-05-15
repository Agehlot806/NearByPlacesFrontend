import React from 'react'
import Navbar from '../../../directives/navbar';
import Sidebar from '../../../directives/sidebar';
import Footer from '../../../directives/footer';

const Usersetting = () => {
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
                                            <h3><b>Type & Subscription</b></h3>

                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Default Group Access Registration</label>
                                                    <p>
                                                        Associate a user to the access group on registration</p>
                                                        <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option></option>
                                                                <option></option>
                                                                <option></option>
                                                                

                                                            </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>User Mobile Default Group Access</label>
                                                    <p>
                                                    Associate a user to the access group on creating new account from mobile app
                                                        </p>
                                                        <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option></option>
                                                                <option></option>
                                                                <option></option>
                                                                

                                                            </select>
                                                </div>
                                                <div className="product-list-box-header">
                                            <h3><b>SUBSCRIPTION</b></h3>

                                        </div>
                                                <div className="form-group">
                                                    <p>Limit a user to manage a certain amount of content on the dashboard</p>
                                                    <label>Number stores allowed  ( -1 Unlimited )</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Offers allowed monthly  ( -1 Unlimited )</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>


                                                <div className="form-group">
                                                    <label>Events Allowed Monthly  ( -1 Unlimited )</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Push Auto Campaigns</label>
                                                    <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option></option>
                                                                <option></option>
                                                                <option></option>
                                                                

                                                            </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Campaigns allowed monthly  ( -1 Unlimited )</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />

                                                </div><br />
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" />Save</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Mail & Registration</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            
                                        <div className="form-group">
                                                    <label>Email verification</label>
                                                    <p>You can customize the mail template inside this file<br/>
                                                     "views/mailing/templates/emailconfirm.html" </p>
                                                    <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option></option>
                                                                <option></option>
                                                                <option></option>
                                                                

                                                            </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Welcome message Optional field</label>
                                                    <textarea type="number" className="form-control" placeholder=" Thank's for the registration" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Enable user (owner) registration</label>
                                                   
                                                    <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option>true</option>
                                                                <option>false</option>
                                                                
                                                                

                                                            </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone verification (MobileUser)</label>
                                                   
                                                    <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option>true</option>
                                                                <option>false</option>
                                                                

                                                            </select>
                                                </div><br/>
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" />Save</a>
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

export default Usersetting;