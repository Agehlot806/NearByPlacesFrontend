import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Groupaccess() {
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
                                                        <h3><b>Group Access</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <a className="ml-2 btn btn-flat" >
                                                                        <i className="fa fa-plus" aria-hidden="true" data-toggle="modal" data-target="#exampleModal" />
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
                                                            <th scope="col">name</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Manage stores</td>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manage Events</td>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
                                                            </td>
                                                        </tr><tr>
                                                            <td className='action-btn'>
                                                                <Link to='/event-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                <a href='' data-toggle="modal" data-target="#DeleteModel"><i class="fa fa-trash-o" /></a>
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
            <div>

                {/* id="exampleModal" */}
                {/* Modal */}
                <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex={-1} role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">User-Group-Access</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Dashbord" role="tab" aria-controls="nav-contact" aria-selected="true">Dashbord</a>
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#Store" role="tab" aria-controls="nav-home" aria-selected="false">Manage-store</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#Offers" role="tab" aria-controls="nav-profile" aria-selected="false">Offers</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Event" role="tab" aria-controls="nav-contact" aria-selected="false">Manage-event</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#Booking" role="tab" aria-controls="nav-contact" aria-selected="false">Booking</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="Dashbord" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> <input type='checkbox' /></th>
                                                    <th scope="col">MODULE</th>
                                                    <th scope="col">PERMISSIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>Offers</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Events</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Users</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Campaigns</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>OverView</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Reviews</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Reservations</label>

                                                    </td>
                                                </tr>
                                               
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade " id="Store" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> <input type='checkbox' /></th>
                                                    <th scope="col">MODULE</th>
                                                    <th scope="col">PERMISSIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>All-Stores</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>My-Stores</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="Offers" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> <input type='checkbox' /></th>
                                                    <th scope="col">MODULE</th>
                                                    <th scope="col">PERMISSIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>All-Offers</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>My-Offers</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="Event" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> <input type='checkbox' /></th>
                                                    <th scope="col">MODULE</th>
                                                    <th scope="col">PERMISSIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>All-Event</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>My-Event</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="Booking" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> <input type='checkbox' /></th>
                                                    <th scope="col">MODULE</th>
                                                    <th scope="col">PERMISSIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                    <td>
                                                        <input type='checkbox' />
                                                      <label className='acces-user'>All-Booking</label>
                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Manage</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Create</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Edit</label>

                                                    </td>
                                                    <td>
                                                        <input type='checkbox' />
                                                        <label className='acces-user'>Delete</label>

                                                    </td>

                                                </tr>
                                               
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                            <div className='user-head'>
                                                    <Button> Confirm</Button>
                                                    <Button>Cansel</Button>
                                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>

        </>
    )
}

export default Groupaccess