import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

function Modulesmanageradd() {
  return (
    <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-sm-12">
                                    <div className='pack-content'>
                                        <h4>Your pack "FREE" has been expired!!</h4>
                                        <p>
                                            <a href="#">=&gt;Upgrade it</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Create Modules Manager</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                            <div className="form-group image-size">
                                                    <label>Upload File</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." />
                                                </div><br />
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

export default Modulesmanageradd