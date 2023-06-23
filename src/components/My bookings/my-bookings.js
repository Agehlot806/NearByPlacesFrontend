import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { useEffect } from 'react'
import { useState } from 'react'
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

// import axios from 'axios'
// import Card from './card'

function Mybookings() {
    const [bookingsave, setBookingSave] = useState([])
    const [stovenum, setStorenum] = useState([])


    useEffect(() => {
        myBooking()
    }, [])
    const myBooking = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/admin/bookings`)

            .then((res) => res.json())
            .then((response) => {
                // console.log("respo booking", response);
                setBookingSave(response.bookings)
                // setBookinguser(response.bookings.userData.name)
            }).catch((error) => {
                console.log("error", error);
            })
    }
   


    const [status, setStatus] = useState(true);

    const updateBookingStatus = async (id, BookingStatus) => {
        setStatus(BookingStatus)
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/booking/update`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                BookingStatus: BookingStatus,
                bookingId: id,
            }),
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                myBooking()
                console.log(Response);
            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }
    const Deleteuser = async (id) => {

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/booking/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
                // myBooking()
                // toast.success("Delete Successfully")
                console.log(Response);
            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }
    const openModel = (storenumber) => {
        console.log("ididbooking", storenumber);
        setStorenum(storenumber)
    }

    



    return (
        <>
            <Toaster />

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
                                                        <h2><b>My bookings</b></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#ID </th>
                                                            <th scope="col">STORE IMAGE</th>
                                                            <th scope="col">STORE NAME</th>
                                                            <th scope="col">DATE</th>
                                                            <th scope="col">TABLE PRICE</th>
                                                            <th scope="col">PAYMENT STATUS</th>
                                                            <th scope="col">ORDER STATUS</th>
                                                            <th scope="col">ACTIONS</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookingsave.map((items, index) => (
                                                            <tr key={index}>
                                                                <td>{items.bookingId}</td>
                                                                <td><img src={items.storeimage} alt='' /></td>
                                                                <td>{items.storename}</td>


                                                                {/* <td>{bookinguser}</td> */}

                                                                <td>{dateFormat(items.bookingDate, "dd-mm-yyyy")}</td>
                                                                <td>{items.Tableprice}</td>
                                                                <td>{items.paymentInfo.status}</td>
                                                                <td>{items.BookingStatus == "true" ? <span className='Enabled-btn'>Confirmed</span> : <span className='Disabled-btn'>Pending </span>}</td>


                                                                <td className='action-btn'>
                                                                    <span>{items.BookingStatus == "true" ? <i className='text-green fa fa-check' onClick={(e) => updateBookingStatus(items._id, 'false')} /> : <i className='fa fa-times' onClick={(e) => updateBookingStatus(items._id, 'true')} />}
                                                                    </span>
                                                                    <Link to=''><i class="fa fa-pencil-square-o" /></Link>
                                                                    <a><button onClick={(e) => Deleteuser(items._id)} ><i class="fa fa-trash-o" /></button></a>
                                                                    <Link to='' ><i className="fa fa-download" aria-hidden="true" /></Link>
                                                                    <Link to={"/paynow/" + items._id}>paynow</Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                
                                                </table>
                                            </div>

                                        </div>



                                        {/* <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table booking-table">
                                                    <tbody>
                                                        {bookingsave.map((book, index) => (
                                                            <tr key={index}>
                                                                <td><img src={book.storeimage} /></td>
                                                                <td>
                                                                    <h2>{book.storename} </h2>
                                                                    <span><strong>Stores Number</strong>: {book.storenumber}</span><br />
                                                                    <ul className="booking_list p-0">
                                                                        <h5>User Details </h5>
                                                                        {book.userData.map((use, index) => (
                                                                            <li key={index}>
                                                                                <span><strong>User Name</strong>: {use.name}</span><br />
                                                                                <span><strong>User Email</strong>: {use.email}</span><br />
                                                                            </li>
                                                                        ))}
                                                                        <h5>Bookings Details </h5>
                                                                        <li key={book.user}>{book.user}</li>
                                                                        <li><strong>Booking ID</strong>: {book.bookingId}</li>
                                                                        <li><strong>Booking date</strong> : {dateFormat(book.bookingDate, "dd-mm-yyyy")}</li>
                                                                        <li><strong>Booking Tableprice</strong>: {book.Tableprice}</li>
                                                                        {book.BookingItem.map((books, index) => (
                                                                            <li key={index}><strong>Booking details:</strong>
                                                                                <strong className="uppercase"></strong><br />
                                                                                <span><strong>Full name</strong>: {books.fullname}</span><br />
                                                                                <span><strong>Phone</strong>: {books.phonenumber}</span><br />
                                                                                <span><strong>Reservation date</strong>: {books.reservationDate}</span><br />
                                                                                <span ><strong>Reservation time</strong>: {books.reservationTime}</span><br />
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className='user-head'>
                                                                        <a href="tel:+49 30 75443877"><i className="fa fa-fw fa-phone" /> Call
                                                                        </a>
                                                                        <button onClick={() => openModel(book.storenumber)} data-toggle="modal" data-target="#exampleModal"><i className="fa fa-fw fa-envelope" /> Send Message
                                                                        </button>
                                                                        <Link to={"/paynow/"+book._id}>paynow</Link>
                                                                       
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="btn btn-default cancel"><i className="fa fa-fw fa-times-circle-o" />{book.BookingStatus}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Stores</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Stores Mobile Number</h5>
                            <h4>{stovenum}</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Call</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mybookings