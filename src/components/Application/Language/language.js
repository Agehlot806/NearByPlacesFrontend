import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import {Link} from 'react-router-dom'


function Language() {
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
                                                      <h3><b>All Language</b></h3>
                                                  </div>
                                                  <div className="pull-right col-md-6">

                                                      <form>
                                                          <div className="input-group input-group-sm">
                                                              <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                              <span className="input-group-btn">
                                                                  <a className="btn btn-flat">
                                                                      <i className="mdi mdi-magnify" />
                                                                  </a>
                                                                  <Link to='/language-add' className="ml-2 btn btn-flat">
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
                                                          <th scope="col">Code</th>
                                                          <th scope="col">Name</th>
                                                          <th scope="col">Direction</th>
                                                          <th scope="col">Actions</th>


                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>324234234</td>
                                                          <td>abcd</td>
                                                          <td>ddEqwewe</td>
                                                          <td className='action-btn'>
                                                              <Link to='language-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                              <a href='#' data-toggle="modal" data-target="#languageDeleteModel"><i class="fa fa-trash-o" /></a>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>324234234</td>
                                                          <td>abcd</td>
                                                          <td>ddEqwewe</td>
                                                          <td className='action-btn'>
                                                              <Link to='/language-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                              <a href='#' data-toggle="modal" data-target="#languageDeleteModel"><i class="fa fa-trash-o" /></a>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>324234234</td>
                                                          <td>abcd</td>
                                                          <td>ddEqwewe</td>
                                                          <td className='action-btn'>
                                                              <Link to='/language-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                              <a href='#' data-toggle="modal" data-target="#languageDeleteModel"><i class="fa fa-trash-o" /></a>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>324234234</td>
                                                          <td>abcd</td>
                                                          <td>ddEqwewe</td>
                                                          <td className='action-btn'>
                                                              <Link to='/language-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                              <a href='#' data-toggle="modal" data-target="#languageDeleteModel"><i class="fa fa-trash-o" /></a>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>324234234</td>
                                                          <td>abcd</td>
                                                          <td>ddEqwewe</td>
                                                          <td className='action-btn'>
                                                              <Link to='/language-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                              <a href='#' data-toggle="modal" data-target="#languageDeleteModel"><i class="fa fa-trash-o" /></a>
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
          <div className="modal fade" id="languageDeleteModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              <a href='#'><i className="fa fa-plus" /> Apply</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Language