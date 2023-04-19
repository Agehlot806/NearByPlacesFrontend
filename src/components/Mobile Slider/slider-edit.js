import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Slideredit() {
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
                                    <h3><b>Edit Slider</b></h3>
                                </div>
                                <div className="product-card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Module :</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea rows={10} className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group image-size">
                                            <input type="file" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Scheduling (Enabled/Disabled) :</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>


                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <div className="form-group">
                                                    <label>Date Begin :</label>
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <div className="form-group">
                                                    <label>Date End :</label>
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
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

export default Slideredit