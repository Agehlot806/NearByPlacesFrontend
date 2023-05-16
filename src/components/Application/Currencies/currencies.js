import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

function Currencies() {
  return (
    <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Add new currency</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Name :</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Code :</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Symbol</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Format</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                               
                                               
                                                <div className="form-group">
                                                    <label>Formate Decimal</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Decimal Point</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Thousands Separater</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                   
                                                </div><br />
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" />Add</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Default currency</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Name :</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                           <br />
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" />Save</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Currencies</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                       Search: <input type="text"  placeholder="Enter..." />
                                       <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Symbol</th>
                                                            <th scope="col">Format</th>
                                                            <th scope="col">Action</th>

                                                           


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td>AED</td>
                                                        <td>	United Dirham</td>
                                                        <td>AED</td>
                                                        <td>0,000.00X</td>
                                                        <td>
                                                        <a href=''><i class="fa fa-pencil-square-o" /></a>
                                                                <a href=''><i class="fa fa-trash-o" /></a>
                                                        </td>

                                                      </tr>
                                                      <tr>
                                                        <td>AFN</td>
                                                        <td>Afghan Afghani</td>
                                                        <td>AFN</td>
                                                        <td>0,000.00X</td>
                                                        <td>
                                                        <a href=''><i class="fa fa-pencil-square-o" /></a>
                                                                <a href=''><i class="fa fa-trash-o" /></a>
                                                        </td>

                                                      </tr>
                                                      <tr>
                                                        <td>ALL</td>
                                                        <td>Albanian Lek</td>
                                                        <td>ALL</td>
                                                        <td>0,000.00X</td>
                                                        <td>
                                                        <a href=''><i class="fa fa-pencil-square-o" /></a>
                                                                <a href=''><i class="fa fa-trash-o" /></a>
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
            <Footer />
        </>
  )
}

export default Currencies