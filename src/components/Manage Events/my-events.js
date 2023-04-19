import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import {Link} from 'react-router-dom'


function Myevents() {
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
                                                <h3><b>Events</b></h3>
                                            </div>
                                            <div className="pull-right col-md-6">

                                                <form>
                                                    <div className="input-group input-group-sm">
                                                        <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                        <span className="input-group-btn">
                                                            <a className="btn btn-flat">
                                                                <i className="mdi mdi-magnify" />
                                                            </a>
                                                            <Link to='/event-new-add' className="ml-2 btn btn-flat">
                                                                <i className="fa fa-plus" aria-hidden="true" />
                                                            </Link>
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
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Owner</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Participants</th>
                                                    <th scope="col">Actions</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><img src='assets/images/img/img5.jpeg' /></td>
                                                    <td>
                                                        <b>Beuty</b><br />
                                                       <i className='mdi mdi-map-marker' /> london peris<br />
                                                    </td>
                                                    <td className='click-color'>
                                                        <a href=''><u>Admin</u></a>
                                                        <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                        <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                    </td>
                                                    <td>07-06-2022 - 07-06-2028</td>
                                                    <td><span className='Disabled-btn'>Disabled</span></td>
                                                    <td className='click-color'><Link to="/event-participants"><i className="mdi mdi-account-multiple-outline" /> 5</Link></td>
                                                    <td className='action-btn'>
                                                        <a href=''><i className='fa fa-times' /></a>
                                                        <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                        <a href=''  data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
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


    {/* Modal */}
    <div className="modal fade" id="DeleteModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                <p className="text-center text-red">Are you sure you want to delete concierto bad bunny ?</p>
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

export default Myevents