import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'

function Mybookings() {
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
                                                        <h3><b>My bookings</b></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table booking-table">
                                                    <tbody>
                                                        <tr>
                                                            <td><img src='assets/images/img/img8.jpeg' /></td>
                                                            <td>
                                                                <h5>McFit gym Berlin Tempelhof #0001267 </h5>
                                                                <ul className="booking_list p-0">
                                                                    <li><strong>Booking ID:</strong>#1267</li>
                                                                    <li><strong>Booking date:</strong> 10 Apr 2023</li>
                                                                    <li><strong>Booking details:</strong>
                                                                        <a className="bookingDetail text-red" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="bookingDetailed-1267" href="#bookingDetailed-1267">Show Details</a>
                                                                        <div className="collapse booking-detailed" id="bookingDetailed-1267">
                                                                            <strong className="uppercase">Booking Item(s)</strong><br />
                                                                            No services
                                                                            <strong className="uppercase">Booking Details</strong><br />
                                                                            <span><strong>Full name</strong>: irhr</span><br />
                                                                            <span><strong>Phone</strong>: 35686295</span><br />
                                                                            <span><strong>Reservation date</strong>: 12-4-2023</span><br />
                                                                            <span><strong>Reservation time</strong>: 09:20:00</span><br />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className='user-head'>
                                                                    <a href="tel:+49 30 75443877"><i className="fa fa-fw fa-phone" /> Call
                                                                    </a>
                                                                    <a href="#" data-id={1267}><i className="fa fa-fw fa-envelope" /> Send Message
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="btn btn-default cancel"><i className="fa fa-fw fa-times-circle-o" /> Cancel
                                                                </a>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><img src='assets/images/img/img8.jpeg' /></td>
                                                            <td>
                                                                <h5>McFit gym Berlin Tempelhof #0001267 </h5>
                                                                <ul className="booking_list p-0">
                                                                    <li><strong>Booking ID:</strong>#1267</li>
                                                                    <li><strong>Booking date:</strong> 10 Apr 2023</li>
                                                                    <li><strong>Booking details:</strong>
                                                                        <a className="bookingDetail text-red" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="bookingDetailed-1267" href="#bookingDetailed-1267">Show Details</a>
                                                                        <div className="collapse booking-detailed" id="bookingDetailed-1267">
                                                                            <strong className="uppercase">Booking Item(s)</strong><br />
                                                                            No services
                                                                            <strong className="uppercase">Booking Details</strong><br />
                                                                            <span><strong>Full name</strong>: irhr</span><br />
                                                                            <span><strong>Phone</strong>: 35686295</span><br />
                                                                            <span><strong>Reservation date</strong>: 12-4-2023</span><br />
                                                                            <span><strong>Reservation time</strong>: 09:20:00</span><br />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className='user-head'>
                                                                    <a href="tel:+49 30 75443877"><i className="fa fa-fw fa-phone" /> Call
                                                                    </a>
                                                                    <a href="#" data-id={1267}><i className="fa fa-fw fa-envelope" /> Send Message
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="btn btn-default cancel"><i className="fa fa-fw fa-times-circle-o" /> Cancel
                                                                </a>
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

export default Mybookings