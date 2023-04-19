import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'

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
                                                                    <Link to='/group-access-add' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
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
        </>
    )
}

export default Groupaccess