import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Managemenu() {
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
                                    <h3><b>Create Manage Menu</b></h3>
                                </div>
                                <div className="product-card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Title :</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Link</label>
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

export default Managemenu