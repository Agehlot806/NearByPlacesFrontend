import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Checkoutfieldsedit() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper' style={{minHeight:'582px'}}>
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
                                            <h3><b>Link category with Checkout Fields</b></h3>
                                        </div>
                                        <div className='p-3'>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label>Checkout Fields</label>
                                                        <select id="inputState" className="form-control">
                                                            <option selected>Choose...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='user-head'>
                                                        <a href='#'><i className="fa fa-pencil-square-o" /> Edit</a>
                                                    </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
<Footer />
        </>
    )
}

export default Checkoutfieldsedit