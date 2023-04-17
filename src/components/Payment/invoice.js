import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Invoice() {
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
                                <div className='col-lg-12'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <div className="box-title" style={{ width: '100%' }}>
                                                <div className=" row ">
                                                    <div className="pull-left col-md-6 mt-1">
                                                        <h3><b>Invoices</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <a href='payment-config' className="ml-2 btn btn-flat">
                                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                <div className="btn-group">
                                                                    <button type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <a href="#">Filter By data show</a>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <button className="dropdown-item" type="button">All</button>
                                                                        <button className="dropdown-item" type="button">Unpaid</button>
                                                                        <button className="dropdown-item" type="button">Paid</button>
                                                                        <button className="dropdown-item" type="button">Canceled</button>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Tax</th>
                                                            <th scope="col">Items</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Payment</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td>1412</td>
                                                            <td>$5.00</td>
                                                            <td>----</td>
                                                            <td><strong>booking_payment</strong>: <br />test x 1<br /></td>
                                                            <td>2023-04-16 04:18:02</td>
                                                            <td><span className='bg-orange'>Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>1412</td>
                                                            <td>$5.00</td>
                                                            <td>----</td>
                                                            <td><strong>booking_payment</strong>: <br />test x 1<br /></td>
                                                            <td>2023-04-16 04:18:02</td>
                                                            <td><span className='bg-payment'>Pay Online</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>1412</td>
                                                            <td>$5.00</td>
                                                            <td>----</td>
                                                            <td><strong>booking_payment</strong>: <br />test x 1<br /></td>
                                                            <td>2023-04-16 04:18:02</td>
                                                            <td><span className='bg-payment'>Pay online</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>1412</td>
                                                            <td>$5.00</td>
                                                            <td>----</td>
                                                            <td><strong>booking_payment</strong>: <br />test x 1<br /></td>
                                                            <td>2023-04-16 04:18:02</td>
                                                            <td><span className='bg-orange'>Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>1412</td>
                                                            <td>$5.00</td>
                                                            <td>----</td>
                                                            <td><strong>booking_payment</strong>: <br />test x 1<br /></td>
                                                            <td>2023-04-16 04:18:02</td>
                                                            <td><span className='bg-orange'>Pending</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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

export default Invoice