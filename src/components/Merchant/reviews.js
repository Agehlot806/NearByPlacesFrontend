import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Reviews() {
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
                                            <h3><b>Merchant detail</b></h3>
                                        </div>
                                        <div className='p-3'>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-5">
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
                                                        <br />
                                                        <table cellPadding={10}>
                                                            <tbody><tr><td style={{ paddingRight: '10px' }}>
                                                                <img src="assets/images/img/img1.jpeg" width={80} height={80} />
                                                            </td>
                                                                <td>
                                                                    <strong className="font-size18px">Beuty</strong><br />
                                                                    <span>london peris</span><br />
                                                                    <span style={{ fontSize: '12px' }}><i className="fa fa-star text-yellow" />&nbsp;&nbsp; 0</span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-7" style={{ padding: '20px' }}>
                                                        <table cellPadding={10}>
                                                            <tbody><tr>
                                                                <td style={{ paddingRight: '10px' }}> <span>0</span></td>
                                                                <td>
                                                                    <div className="r5">
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r4">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r3">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r2">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r1">
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-md-12">
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b> Reviews :</b></h3>
                                        </div>
                                        <div className='p-3'>
                                            No reviews
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

export default Reviews