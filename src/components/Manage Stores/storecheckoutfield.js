import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'

const Storecheckoutfield = () => {
  return (
  <>
  <Navbar/>
  <Sidebar/>
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
                                                        <h3><b>Link checkout fields</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Linked Checkout Fields</th>
                                                            <th scope="col"></th>

                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                            Beauty
                                                            </td>
                                                            <td>Spa_fields</td>
                                                           
                                                            <td className='action-btn'>
                                                                <Link to='/checkoutedit'><i class="fa fa-pencil-square-o" /></Link>
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
            <Footer/>
  </>
  )
}

export default Storecheckoutfield