import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Payoutedit() {
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
                                    <h3><b>Edit Payout</b></h3>
                                </div>
                                <div className="product-card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Select Owner</label>
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
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Payment Method</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Payment Status</label>
                                            <input type="text" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input type="number" className="form-control" placeholder="Enter..." />
                                        </div>
                                        <div className="form-group">
                                            <label>Note</label>
                                            <textarea rows={10} className="form-control" placeholder="Enter..." />
                                        </div>
                                        <br />
                                        <div className='user-head'>
                                            <a href='#'><i className="fa fa-check-square-o" /> Create</a>
                                        </div>
                                    </form>
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

export default Payoutedit