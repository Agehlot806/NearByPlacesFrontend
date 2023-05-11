import React from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'

function Categories() {
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
                                            <h3><b>Add new category</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>


                                                <div className="form-group  image-size">
                                                    <label htmlFor="inputState">Image</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group  image-size">
                                                    <label htmlFor="inputState">Icon (PNG with transparent Background, example here)</label>
                                                    <input type="file" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Category name</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Color</label>
                                                    <input type="text" className="form-control" placeholder="Enter..." />
                                                </div>


                                                <br />
                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-check-square-o" />Add</a>
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
                                            <div className="product-list-box-body main-table">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Image</th>
                                                                <th scope="col">icon</th>
                                                                <th scope="col">category</th>
                                                                <th scope="col">store</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>image</td>
                                                                <td>#</td>
                                                                <td>buety</td>
                                                                <td>tatastore</td>
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

export default Categories