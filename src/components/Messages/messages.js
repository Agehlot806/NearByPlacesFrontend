import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'


function Messages() {
    const [storeDatamassege, setStoreDatamassege] = useState([])
    const [filterData, setFilterData] = useState(false);
    const filterDataList = () => {
        setFilterData(true);
    }

    useEffect(() => {
        allMassege()
    },[])
    const allMassege = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allmessages`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("check your data????for api", responsive.msg);
                setStoreDatamassege(responsive.messages);
            })
            .catch((error) => {
                console.log("error massage", error);
            })
    }
    console.log("massage<<<>>>>>??????////", storeDatamassege);
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
                                            <h3><b>Inbox</b></h3>
                                        </div>
                                        {/* /.box-header */}
                                        <div className="product-list-box-body product-dash-table">
                                            <div className="table-responsive">
                                                <table className="table table-hover main-table">
                                                    <thead>
                                                        <tr>
                                                            <th>senderName</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {storeDatamassege.map((items, index) => (
                                                            <tr>
                                                                <td> <h2>{items.senderName}</h2> <br /> <p onClick={filterDataList}>{items.content}</p></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* /.box-body */}
                                    </div>
                                </div>
                               
                                {filterData ?
                                    <div className='col-lg-6'>
                                        <div className="product-list-box">
                                            <div className="product-list-box-header">
                                                <h3><b>Chat-Box</b></h3>
                                            </div>
                                            <div className="chatboxin">
                                                <div className="chat-container">
                                                    <div className="chat-sender msg"><strong>Ashley Maddison</strong>
                                                        <div className="chatmsg">Reset </div>
                                                    </div>
                                                </div>
                                                <div className="chat-container msg-right">
                                                    <div className="chat-respond msg">
                                                        <div className="flippd">
                                                            <strong>Helpdesk Assistant</strong>
                                                            <div className="chatmsg"> Hey Ashley! Done.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-container">
                                                    <div className="chat-sender msg"><strong>Ashley Maddison</strong>
                                                        <div className="chatmsg"> My iphone is not able.</div>
                                                    </div>
                                                </div>
                                                <div className="chat-container msg-right">
                                                    <div className="chat-respond msg">
                                                        <div className="flippd">
                                                            <strong>Helpdesk Assistant</strong>
                                                            <div className="chatmsg"> HiOS no more supports PPTP VPN.
                                                                <br /> Connect iOS to
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                            <section className="msger">
                                                <form className="msger-inputarea">
                                                    <input type="text" className="msger-input" placeholder="Enter your message..." />
                                                    <button type="" className="msger-send-btn">Send</button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                    : ""}
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