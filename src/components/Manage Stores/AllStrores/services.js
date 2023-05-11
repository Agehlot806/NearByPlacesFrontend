import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import { Link } from 'react-router-dom';
function Services() {
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
                                    <div className='add-card'>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#Detail" role="tab" aria-controls="nav-home" aria-selected="true">Detail</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#Images" role="tab" aria-controls="nav-profile" aria-selected="false">Images</a>
                                                <a className="nav-item nav-link active" id="nav-contact-tab" data-toggle="tab" href="#servies" role="tab" aria-controls="nav-contact" aria-selected="false">servies</a>
                                                <a className="nav-item nav-link " id="nav-contact-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-contact" aria-selected="false">location</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#More" role="tab" aria-controls="nav-contact" aria-selected="false">More</a>

                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade " id="Detail" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label>Name :</label>
                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Phone Number :</label>
                                                            <input type="number" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="inputState">Category :</label>
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
                                                            </select>                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>WebSite</label>
                                                            <input type="number" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label>Detail :</label>
                                                            <textarea rows={10} className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Video URL</label>
                                                            <input type="text" className="form-control" placeholder="Enter a valid youtube URL ..." />
                                                        </div>
                                                    </div>
                                                    <div className='user-head'>
                                                        <a href='#'><i className="fa fa-check-square-o" /> Create</a>
                                                        <a href=''><i className="fa fa-times" /> Clear</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="Images" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <form>
                                                    <div className="form-row image-size">
                                                        <div className="form-group col-md-6">
                                                            <label>Store photos</label>
                                                            <input type="file" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label><i class="mdi mdi-image-album" /> Store gallery</label>
                                                            <input type="file" className="form-control" placeholder="Enter..." />
                                                        </div>
                                                    </div>
                                                    <div className='user-head'>
                                                        <a href='#'><i className="fa fa-check-square-o" /> Create</a>
                                                        <a href=''><i className="fa fa-times" /> Clear</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade show active" id="servies" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <div className="product-list-box">
                                                    <div className="product-list-box-header">
                                                        <h3><b>Services</b></h3>
                                                        <p>Services are grouped together, a group can have one choice or multiple choices,
                                                            you can attach each service with a small description if necessary</p>
                                                        <button className='btn btn-secondary' data-toggle="modal" data-target="#Create">Create new services  group</button>
                                                    </div>
                                                    <div className="product-card-body">
                                                        <div className='row'>

                                                        <div className='col-sm-6'>
                                                        <form>
                                                            <div>
                                                                <i className="mdi mdi-menu cursor-pointer" />&nbsp;&nbsp;.,.,: <i>multi_options option</i>
                                                                <a href="#" data-id={540} className="pull-right add-option " data-toggle="modal" data-target="#AddOption"><i className="mdi mdi-plus-box text-red" /> Add option</a>
                                                                &nbsp;&nbsp;&nbsp;<a href="#" className="update-grp" data-id={540}><i className="mdi mdi-pencil text-red" data-toggle="modal" data-target="#Edit" />&nbsp;&nbsp;</a>
                                                                &nbsp;<a href="#" data-id={540} className="remove-grp"><i className="mdi mdi-delete text-red" data-toggle="modal" data-target="#Delete" />&nbsp;&nbsp;</a>
                                                            </div>
                                                            <br />
                                                            <div className='user-head'>
                                                                <a href='#'><i className="fa fa-check-square-o" />UpDate</a>
                                                            </div>
                                                        </form>
                                                        
                                                    </div>
                                                    </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="More" role="tabpanel" aria-labelledby="nav-contact-tab">

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




            {/* Modal add */}
            <div className="modal fade" id="AddOption" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create new Service</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group col-md-12">
                                <label>Service title</label>
                                <input type="text" className="form-control" placeholder="Enter..." />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Description</label>
                                <textarea type="text" className="form-control" placeholder="Enter..." />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Price</label>
                                <input type="number" className="form-control" placeholder="Enter..." />
                            </div>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal create */}
            <div className="modal fade" id="Create" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create new Group</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group col-md-12">
                                <label>Groups</label>
                                <input type="text" className="form-control" placeholder="Enter..." />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Options type</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>one_option</option>
                                    <option>multipal_options</option>

                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal edit */}
            <div className="modal fade" id="Edit" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Group</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group col-md-12">
                                <label>Groups</label>
                                <input type="text" className="form-control" placeholder="Enter..." />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Options type</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>one_option</option>
                                    <option>multipal_options</option>

                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal delete*/}
            <div className="modal fade" id="Delete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmation!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <h2 className='text-center text-red'>Are you sure?</h2>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;