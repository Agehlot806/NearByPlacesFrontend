import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import {Link} from 'react-router-dom'


function Mystores() {
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
                                                        <h3><b>All Stores</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/store-add-new' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Rating</th>
                                                            <th scope="colreview">Reviews</th>
                                                            <th scope="col">Actions</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><img src='assets/images/img/img1.jpeg' /></td>
                                                            <td>
                                                                <b>Beuty</b><br />
                                                               <i className='mdi mdi-map-marker' /> london peris<br />
                                                                <span className="text-green"><i className='mdi mdi-attachment' /> Linked checkout (Spa_fields)</span>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Admin</u></a>
                                                                <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                                <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Beauty</u></a>
                                                            </td>
                                                            <td><span className='Disabled-btn'>Disabled</span></td>
                                                            <td>0</td>
                                                            <td className='click-color'><Link to="/review">Review</Link></td>
                                                            <td className='action-btn'>
                                                                <a href=''><i className='fa fa-times' /></a>
                                                                <Link to='/all-store-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href=''><i class="fa fa-list" /> Services</a>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img2.jpeg' /></td>
                                                            <td>
                                                                <b>Beuty</b><br />
                                                               <i className='mdi mdi-map-marker' /> london peris<br />
                                                                <span className="text-green"><i className='mdi mdi-attachment' /> Linked checkout (Spa_fields)</span>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Admin</u></a>
                                                                <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                                <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Beauty</u></a>
                                                            </td>
                                                            <td><span className='Enabled-btn'>Enabled</span></td>
                                                            <td>0</td>
                                                            <td className='click-color'><Link to="/review">Review</Link></td>
                                                            <td className='action-btn'>
                                                                <a href=''><i className='fa fa-times' /></a>
                                                                <a href=''><i class="fa fa-pencil-square-o" /></a>
                                                                <a href=''><i class="fa fa-list" /> Services</a>
                                                                <a href=''  data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img5.jpeg' /></td>
                                                            <td>
                                                                <b>Beuty</b><br />
                                                               <i className='mdi mdi-map-marker' /> london peris<br />
                                                                <span className="text-green"><i className='mdi mdi-attachment' /> Linked checkout (Spa_fields)</span>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Admin</u></a>
                                                                <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                                <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                            </td>
                                                            <td className='click-color'>
                                                                <a href=''><u>Beauty</u></a>
                                                            </td>
                                                            <td><span className='Disabled-btn'>Disabled</span></td>
                                                            <td>0</td>
                                                            <td className='click-color'><Link to="/review">Review</Link></td>
                                                            <td className='action-btn'>
                                                                <a href=''><i className='fa fa-times' /></a>
                                                                <a href=''><i class="fa fa-pencil-square-o" /></a>
                                                                <a href=''><i class="fa fa-list" /> Services</a>
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
                            <h5 className="modal-title" id="exampleModalLabel">Confirmation!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <h3 className="text-center text-red">Are you sure?</h3>
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

export default Mystores