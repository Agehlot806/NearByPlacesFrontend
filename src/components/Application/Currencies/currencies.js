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
                                            <h3><b>Currencies</b></h3>
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
                                                <div className="form-group image-size">
                                                    <label>Symbol</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." />
                                                </div>
                                               
                                                <div className="form-group">
                                                    <label>Format</label>
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
                                                    <label>Formate Decimal</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Decimal Point</label>
                                                    <input type="number" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Thousands Separater</label>
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
                                                </div><br />
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

export default Currencies