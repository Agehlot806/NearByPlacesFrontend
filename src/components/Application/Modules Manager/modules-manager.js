import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

function Modulesmanager() {
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-sm-12">
                                    <div className='pack-content'>
                                        <h4>Your pack "FREE" has been expired!!</h4>
                                        <p>
                                            <a href="#">=&gt;Upgrade it</a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <div className="box-title" style={{ width: '100%' }}>
                                                <div className=" row ">
                                                    <div className="pull-left col-md-6 mt-1">
                                                        <h3><b>Modules Manager</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form className='text-right'>
                                                            <span className="input-group-btn ">
                                                                <a href='modules-manager-add' className="ml-2 btn btn-flat">
                                                                    <i className="fa fa-plus" aria-hidden="true" />
                                                                </a>
                                                            </span>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="product-list-box-body main-table">
                                            <div className='invoice-drop text-right'>
                                                <div className="btn-group">
                                                    <button type="button" className="filter-invoice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <a href="#">Filter According List show</a>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item" type="button">Action</button>
                                                        <button className="dropdown-item" type="button">Enable All</button>
                                                        <button className="dropdown-item" type="button">Disable All</button>
                                                        <button className="dropdown-item" type="button">Install All</button>
                                                        <button className="dropdown-item" type="button">Uninstall All</button>
                                                        <button className="dropdown-item" type="button">Upgrade All</button>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Images</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><img src='assets/images/img/img1.jpeg' /></td>
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
        </>
    )
}

export default Modulesmanager