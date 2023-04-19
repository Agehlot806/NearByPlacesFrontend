import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import {Link} from 'react-router-dom'

function Myreservations() {
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
                                                <h3><b>Reservations</b></h3>
                                            </div>
                                            <div className="pull-right col-md-6">

                                                <form className='text-right'>
                                                    <span className="input-group-btn ">
                                                        <Link to='/event-new-add' className="ml-2 btn btn-flat" data-toggle="modal" data-target="#FilterModel">
                                                            <i class="fa fa-filter" aria-hidden="true"></i>
                                                        </Link>
                                                    </span>
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
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Client</th>
                                                    <th scope="col">Business/Owner</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Payment</th>
                                                    <th scope="col">Subtotal</th>
                                                    <th scope="col">Date</th>
                                                    <th scope='col' data-toggle="modal" data-target="#ExportModel">Export</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>No Data</tr>


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


    {/* Modal */}
    <div className="modal fade" id="ExportModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Export Data</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body export">
                    <div className="export-msg">
                        <h4><i className="fa fa-envelope" aria-hidden="true" />&nbsp;&nbsp;Account without verification!</h4>
                        <p>We've sent mail verification to your mailbox. </p>
                        <p>You didn't receive the confirmation email?</p>
                        <a className="linkAccess text-red" href=""><u>Re-send the email</u></a>
                    </div>
                    <div className="form-group col-sm-12" style={{ marginTop: '10px' }}>
                        <label>Format</label>
                        <select className="select2">
                            <option value="csv" selected>CSV</option>
                            <option value="xml">XML</option>
                            <option value="json">JSON</option>
                        </select>
                        <p><i className="fas fa-exclamation-circle" />&nbsp;&nbsp;Tip: If would specify your result, you can use filter option
                            <a href="#">here</a> before start exporting data</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className='user-head'>
                        <a href='#' data-dismiss="modal"><i className="fa fa-times" /> Cancel</a>
                        <a href=''><i className="fa fa-plus" /> Export</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="modal fade" id="FilterModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Filter order</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Select date :</label>
                            <input type="number" className="form-control" placeholder="Enter..." />
                        </div>
                        <div className="form-group">
                            <label>Order Status</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Limit</label>
                            <input type="number" className="form-control" placeholder="Enter..." />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <div className='user-head'>
                        <a href='#' data-dismiss="modal"><i className="fa fa-times" /> Cancel</a>
                        <a href=''><i className="fa fa-plus" /> Apply</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Myreservations