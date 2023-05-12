import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

const Checkoutedit = () => {
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
                                                        <h3><b>Link category with Checkout Fields</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                            <div className="form-group">
                                                    <label>Name :</label>
                                                    <select id="inputState" className="form-control">
                                                                <option selected>Choose...</option>
                                                                <option></option>
                                                                <option></option>
                                                                <option></option>
                                                                

                                                            </select>
                                                </div><br/>
                                                <div className='user-head'>
                                                    <a href='#'>Edit</a>
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

export default Checkoutedit