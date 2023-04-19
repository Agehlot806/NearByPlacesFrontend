import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'


function Subscriptionedit() {
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
                                    <h3><b>Edit Subscription</b></h3>
                                </div>
                                <div className="product-card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>No Store Allow</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Offers Allowed Monthly</label>
                                            <input type="date" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Push Auto Campaigns</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Campaigns Allowed Monthly</label>
                                            <input type="date" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Price Monthly</label>
                                            <input type="date" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Price Yearly</label>
                                            <input type="date" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Link URL</label>
                                            <input type="link" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Order</label>
                                            <input type="number" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Visible to the Client</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
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
    <Footer />
</>
  )
}

export default Subscriptionedit