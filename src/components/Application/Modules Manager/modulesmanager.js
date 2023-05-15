import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import { Link } from 'react-router-dom'

const Modulesmanager = () => {

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
                                                        <h3><b>Modules Manager</b></h3>
                                                        <input type='checkbox' />
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='modulesadd' className="ml-2 btn btn-flat">
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
                                                    <tbody>
                                                        <tr>
                                                            <td><input type='checkbox' /></td>
                                                            <td>Beuty</td>
                                                            <td>
                                                                <button className='btn btn-info' >DISABLE</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type='checkbox' /></td>
                                                            <td>Beuty</td>
                                                            <td>
                                                                <button className='btn btn-info' >DISABLE</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type='checkbox' /></td>
                                                            <td>Beuty</td>
                                                            <td>
                                                                <button className='btn btn-info' >DISABLE</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type='checkbox' /></td>
                                                            <td>Beuty</td>
                                                            <td>
                                                                <button className='btn btn-info' >DISABLE</button>
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
        </>
    )
}

export default Modulesmanager