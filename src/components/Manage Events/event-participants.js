import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import {Link} from 'react-router-dom'


function Eventparticipants() {
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
                                                        <h3><b>Participants</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/store-add-new' className="ml-2 btn btn-flat">
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
                                                            <th scope='col'><input type="checkbox" /></th>
                                                            <th scope="col">#ID</th>
                                                            <th scope="col">User</th>
                                                            <th scope="col">Event</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">
                                                                <select className="form-control">
                                                                    <option selected>Choose...</option>
                                                                    <option>One Option</option>
                                                                    <option>Multi Option</option>
                                                                </select>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>No user participated</tr>
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
        </>
    )
}

export default Eventparticipants