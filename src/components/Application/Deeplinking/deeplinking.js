import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

const Deeplinking = () => {
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

                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group">

                                                    <textarea type="text" className="form-control" placeholder="         What is the deep linking?!" />

                                                </div>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Deep Linking Configuration</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="form-group">
                                                <label>Host Name</label>
                                                <input type="text" className="form-control" placeholder="Enter..." />

                                            </div>
                                            <div className="form-group">
                                                <label>Path Prefix for store</label>
                                                <input type="text" className="form-control" placeholder="Enter..." />

                                            </div>
                                            <div className="form-group">
                                                <label>Path Prefix for product</label>
                                                <input type="text" className="form-control" placeholder="Enter..." />

                                            </div>
                                            <div className="form-group">
                                                <label>Path Prefix for event</label>
                                                <input type="text" className="form-control" placeholder="Enter..." />

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

export default Deeplinking