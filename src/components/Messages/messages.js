import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Messages() {
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>

                            <div className='row'>
                            <div className='col-lg-7'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Inbox</b></h3>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="product-list-box-body product-dash-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover main-table">
                                                    <tbody>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>SUPER ADMIN</b></a><br />
                                                                To finalize payment for order #1277, an email with bank information has been sent to you.
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>DANIEL TURNER</b></a><br />
                                                                Me: Send invite
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                      
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>DANIEL TURNER</b></a><br />
                                                                Me: Send invite
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>DANIEL TURNER</b></a><br />
                                                                Me: Send invite
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>DANIEL TURNER</b></a><br />
                                                                Me: Send invite
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src='assets/images/img/img6.png' /></td>
                                                            <td>
                                                                <a href=''><b>DANIEL TURNER</b></a><br />
                                                                Me: Send invite
                                                            </td>
                                                            <td>SuperAdmin</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* /.box-body */}
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

export default Messages