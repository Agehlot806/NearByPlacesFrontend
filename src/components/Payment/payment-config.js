import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Paymentconfig() {
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
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Bank Information</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Full Name</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Bic Code</label>
                                                            <input type="number" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Account Number</label>
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Additional Information</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Wallet</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Top Up</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Paypal Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Client Id</label>
                                                            <input type="number" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Id</label>
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Stripe Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Publishabled Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Razorpay Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Key Id</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
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
                                                    <h3><b>Flutterwave Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Key Id</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Paystack Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Key Id</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>Mercado Pago Config</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Mode</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Public Key Id</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Secret Key</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Access Token</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Client Id</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Client Secret</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
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

export default Paymentconfig