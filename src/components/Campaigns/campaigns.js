import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Campaigns() {
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
                                                <div className=" row ">
                                                    <div className="pull-left col-md-6 mt-1">
                                                        <h3><b><i className='mdi mdi-history' /> Campaigns</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <a href='campaigns-new-add' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Module</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
                                                            </td>
                                                        </tr><tr>
                                                            <td>10% Off all orders</td>
                                                            <td><span className='Disabled-btn'>Offer</span></td>
                                                            <td><span className='Unpublished-btn'><i className="mdi mdi-history" />  Pending</span></td>
                                                            <td className='action-btn'>
                                                                <a href='#'>  <i className="mdi mdi-chart-line" /> Report</a>
                                                                <a href='#'><i className="fa fa-download" aria-hidden="true" /></a>
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
            <Footer />
        </>
    )
}

export default Campaigns