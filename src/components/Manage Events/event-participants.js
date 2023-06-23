import React, { useState, useEffect } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import { Button } from 'reactstrap';
import dateFormat from 'dateformat';
import Card from './card';
import axios from 'axios';


function Eventparticipants() {
    const { _id } = useParams();
    const [Id, setId] = useState("");
    const [participant, setParticipant] = useState([]);
    const [response, setResponse] = useState([]);



    const handleDeleteParticipant = (id) => {
        console.log(id);
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allparticipant?eventId=${_id}&id=${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
                setResponse(resp);
                // toast.success("Event Deleted Successfully");
                getparticipant();

            })

    }
    const toggleEventModel = (id, e) => {
        handleDeleteParticipant(id)
    }
    const getparticipant = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allparticipant?id=${_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("participant", data);
                setParticipant(data.usersparticipated);

            })
    }
    useEffect(() => {

        getparticipant();
    }, []);

    // console.log(participant[1].map(item=>(
    //     item.name
    // )));


    const checkoutHandler = async (amount) => {
        try {
            const { data: { key } } = await axios.get("https://nearbyplaceadminpanner.onrender.com/api/v1/getkey");
            console.log(key);
            const requestOptions = {
                amount,
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/reservation-checkout/${_id}`, requestOptions);
            const responseData = await response.json();
            console.log(responseData);
            if (response.ok && responseData.success) {
                const { order } = responseData;
                console.log(order);
                const options = {
                    key,
                    amount: order.amount,
                    currency: "INR",
                    name: "6 Pack Programmer",
                    description: "Tutorial of RazorPay",
                    image: "https://avatars.githubusercontent.com/u/25058652?v=4",
                    order_id: order.id,
                    callback_url: "https://nearbyplaceadminpanner.onrender.com/api/v1/paymentverificationofreservation",
                    prefill: {
                        name: "Gaurav Kumar",
                        email: "gaurav.kumar@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        type: 'reservation',
                    },
                    theme: {
                        "color": "#121212"
                    }
                };
                const razor = new window.Razorpay(options);
                razor.open();
            } else {
                console.error("Failed to create order:", responseData.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
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
                                                            <th scope="col">TicketCount</th>
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

                                                        {participant.length > 0 && participant.map((item, index) =>
                                                            <tr key={index}>
                                                                <td></td>
                                                                <td>{index + 1}</td>
                                                                {/* <td>{item.user}</td> */}
                                                                <td>{item.name}</td>
                                                                <td>{item.eventname ? item.eventname : ""}</td>
                                                                <td>{dateFormat(item.datebegin, "dS mmmm , yyyy")} To {dateFormat(item.dateend, "dS mmmm , yyyy")}</td>
                                                                <td>{item.ticketCount}</td>
                                                                <td>{item.status === true ? <span className='Enabled-btn'>Enabled</span> : <span className='Disabled-btn'>Disabled</span>}</td>
                                                                {/* <td><Button onClick={(e) => toggleEventModel(item._id, e)}><i class="fa fa-trash-o" /></Button></td> */}
                                                                <Card checkoutHandler={checkoutHandler} />
                                                            </tr>
                                                        )}
                                                        {
                                                            participant.length === 0 &&
                                                            <tr className="text-center">
                                                                <td colSpan={7}>No Data Available</td>
                                                            </tr>
                                                        }

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

export default Eventparticipants;