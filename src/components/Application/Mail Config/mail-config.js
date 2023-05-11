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
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                        <option>...</option>
                                                        <option>...</option>


                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Send Grid API Key :</label>
                                                    <input type="email" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <p>Note: Make sure that you created Sender identity in your SendGrid account <br />
                                                        https://docs.sendgrid.com/ui/sending-email/sender-verification </p>
                                                </div>
                                                <br />
                                                <div className='user-head'>
                                                    <a href='#'> Text API</a>
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