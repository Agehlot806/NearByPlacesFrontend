import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Useredit() {
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
                                            <h3><b>Edit Users</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group image-size">
                                                    <label>Upload File</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Full Name :</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="emaail" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="number" className="form-control" />
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
                                                    <h3><b>Connection Informations</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Username :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm Password</label>
                                                            <input type="password" className="form-control" />
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>User Subscription</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Access Role :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Subscription Pack</label>
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

export default Useredit