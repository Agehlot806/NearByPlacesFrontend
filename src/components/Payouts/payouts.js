import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


function Payouts() {
    const [payout, setPayout] = useState([])

    useEffect(() => {
        AllPayout()
    }, [])
    const AllPayout = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallorders`)

            .then((res) => res.json())
            .then((response) => {
                console.log("response payout", response);
                setPayout(response.orders.items)
                // console.log("respo booking", response);

                // setBookinguser(response.bookings.userData.name)
            }).catch((error) => {
                console.log("error", error);
            })
    }
    console.log("payoutpayout", payout);
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
                                                        <h3><b>Payouts</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form className='text-right'>
                                                            <span className="input-group-btn ">
                                                                <Link to='/payout-add' className="ml-2 btn btn-flat">
                                                                    <i className="fa fa-plus" aria-hidden="true" />
                                                                </Link>
                                                            </span>
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
                                                            <th scope="col">#</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Client</th>
                                                            <th scope="col">Amount_Paid</th>
                                                            <th scope="col">Amount_Due</th>
                                                            <th scope="col">Note</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Actions</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {payout.map((items, index) => (


                                                            <tr>
                                                                <td>{items.id}</td>
                                                                <td>{items.amount}</td>
                                                                <td>sdasdasd</td>
                                                                <td>{items.amount_paid}</td>
                                                                <td>{items.amount_due}</td>
                                                                <td>good Orders </td>
                                                                <td>{items.status}</td>
                                                                <td className='action-btn'>
                                                                    <Link to='/payout-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                    <a href='' data-toggle="modal" data-target="#PayoutDeleteModel"><i class="fa fa-trash-o" /></a>
                                                                </td>
                                                            </tr>
                                                        ))}
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

            {/* Modal */}
            <div className="modal fade" id="PayoutDeleteModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center text-red">Are you sure you want to delete concierto bad bunny ?</p>
                        </div>
                        <div className="modal-footer">
                            <div className='user-head'>
                                <a href='#' data-dismiss="modal"><i className="fa fa-times" /> Cancel</a>
                                <a href=''><i className="fa fa-plus" /> Apply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payouts