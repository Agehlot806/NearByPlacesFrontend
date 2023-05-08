import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Messages() {
    const [storeData, setStoreData] = useState([])

    useEffect(() => {
        allMassege()
    })
    const allMassege = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallmessages`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("check your data????for api", responsive.msg);
                setStoreData(responsive.msg);
            })
            .catch((error) => {
                console.log("error massage", error);
            })
    }
    console.log("massage<<<>>>>>??????////", storeData);
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
                                                    <thead>
                                                        <tr>
                                                            <th>Photos</th>
                                                            <th>Usernames</th>
                                                            <th>Messages</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {storeData.map((items, index) => (
                                                            <tr>
                                                                <td><img src={items.userimage} alt='' /></td>
                                                                <td>{items.username}</td>
                                                                <td>{items.message}</td>
                                                            </tr>
                                                        ))}
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