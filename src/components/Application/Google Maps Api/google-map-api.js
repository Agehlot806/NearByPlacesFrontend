import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

function Googlemapapi() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>

                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Google Map API</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className='row'>
                                                    <div className='col-sm-6'>
                                                        <div className="form-group">
                                                            <label>Map api key server *</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </div>
                                               
                                                <div className='col-sm-6'>
                                                    <div className="form-group">
                                                        <label>Map api key client *</label>
                                                        <input type="text" className="form-control" placeholder="Enter..." />
                                                    </div>
                                                </div>
                                                </div><br />
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" /> Update</a>
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

export default Googlemapapi