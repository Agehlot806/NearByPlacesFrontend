import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'

const checkoutfieldstore = () => {
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
                                                <h3><b>CheckOutFields</b></h3>

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>

                                                <div className='col-lg-12'>
                                                    <div className='row'>
                                                        <div className='col-sm-12'>
                                                            <div className="product-list-box-body main-table">
                                                                <div className="table-responsive">
                                                                    <table className="table table-hover table-bordered">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">
                                                                                    Category</th>
                                                                                <th scope="col">Linked Checkout Fields</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <b>Beauty</b><br />
                                                                                </td>

                                                                                <td>Spa_fields</td>
                                                                                <td className='action-btn'>
                                                                                    <a href='checkoutstoreedit'><i class="fa fa-pencil-square-o" /></a>

                                                                                </td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default checkoutfieldstore