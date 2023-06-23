import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import axios from 'axios'
import Card from './card';

const Paynowp = () => {
    const [bookingsave, setBookingSave] = useState([])
    const [storeimage, setstoreimage] = useState([])
    const [Tableprice, setTableprice] = useState([])

    const { id } = useParams();
    console.log("pynowp", id);
    console.log("bookingsavebookingsave", bookingsave);
    useEffect(() => {
        myBooking()
    }, [])
    const myBooking = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/booking/${id}`)

            .then((res) => res.json())
            .then((response) => {
                console.log("respo  pynament", response);
                setBookingSave(response.booking.storename)
                setstoreimage(response.booking.storeimage)
                setTableprice(response.booking.Tableprice)

                // setBookinguser(response.bookings.userData.name)
            }).catch((error) => {
                console.log("error", error);
            })
    }


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("https://nearbyplaceadminpanner.onrender.com/api/v1/getkey")

        const { data: { order } } = await axios.post(`https://nearbyplaceadminpanner.onrender.com/api/v1/checkout/${id}`, {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "BOOK-MY-PLACE",
            description: "Tutorial of RazorPay",
            order_id: order.id,
            callback_url: "https://nearbyplaceadminpanner.onrender.com/api/v1/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
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
                                                        <h2><b>My bookings PayMents</b></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-list-box-body main-table">
                                            <div className="table-responsive">
                                                <table className="table booking-table">
                                                    <tbody>
                                                        <span>
                                                            <strong>storeimage</strong>:<img src={storeimage} alt='' />
                                                        </span><br />
                                                        <span><strong>User Name</strong>: {bookingsave}</span><br />
                                                        <span><strong>User Tableprice</strong>: {Tableprice}</span><br />
                                                        {/* <span><strong>User Email</strong>: {use.email}</span><br /> */}
                                                        <Card checkoutHandler={checkoutHandler} />

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

export default Paynowp

