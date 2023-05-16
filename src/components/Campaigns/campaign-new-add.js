import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Campaignnewadd() {
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
                                            <h3><b><i className="mdi mdi-bullseye" /> Create new campaign</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className='callout-info mb-3'>
                                                    <p> Push events , offers or new stores to your close users .</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Campaign's type *</label>
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
                                                    <a href='#'><i className="fa fa-paper-plane-o" />  Push </a>
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
                                                    <h3><b>< i className="mdi mdi-bell-outline" /> Notification preview</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <div className='campaign-img'>
                                                        <h6>Android</h6>
                                                        <img src='assets/images/img/android.png' />
                                                        <div className='compaign-img-content'>
                                                            <h6>Notification title</h6>
                                                            <p>Notification title</p>
                                                        </div>
                                                    </div>
                                                    <div className='campaign-img'>
                                                        <h6>iOS</h6>
                                                        <img src='assets/images/img/android.png' />
                                                        <div className='compaign-img-content'>
                                                            <h6>Notification title</h6>
                                                            <p>Notification title</p>
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

export default Campaignnewadd