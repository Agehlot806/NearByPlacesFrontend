import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Checkoutedit() {
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
                                            <div className="box-title" style={{ width: '100%' }}>
                                                <h3><b>Link category with Checkout Fields</b></h3>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>

                                                <div className='col-lg-12'>
                                                    <div className='row'>
                                                        <div className='col-sm-12'>
                                                            <div className="product-list-box">

                                                                <div className="product-card-body">
                                                                    <form>
                                                                        <div className="form-group">
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
                                                                        <div className='user-head'>
                                                                            <a href='#'><i className="fa fa-check-square-o" /> edit</a>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkoutedit