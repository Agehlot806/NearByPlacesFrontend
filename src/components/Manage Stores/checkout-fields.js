import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function CheckoutFields() {
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
                                            <h3><b>Link checkout fields</b></h3>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="product-list-box-body product-dash-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered m-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Linked Checkout Fields	</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr><tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Beauty</td>
                                                            <td>Spa_fields</td>
                                                            <td className='action-btn'>
                                                                <a href='checkout-field-edit'><i class="fa fa-pencil-square-o" /></a>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* /.box-body */}
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

export default CheckoutFields