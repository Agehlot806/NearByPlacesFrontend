import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import Android from '../../assets/images/img/android.png'
import Iphone from '../../assets/images/img/iphone.png'
import { useState } from 'react'
import { useEffect } from 'react'


function Campaignnewadd() {
    const [storedata, setStoreData] = useState([])
    const [eventdata, setEventData] = useState([])
    const [offerdata, setOfferData] = useState([])
    const [selectValue, setSelectValue] = useState([]);

    const onChangeHandle = (event) => {
        setSelectValue(event.target.value);
    }
    const storehandle = (event) => {
        setStoreData(event.target.value)
    }
    const offerhandle = (event) => {
        setOfferData(event.target.value)
    }
    const eventhandle = (event) => {
        setEventData(event.target.value)
    }



    const SendMessage = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/sendnotification`, {
            method: 'POST'
        })

            .then((res) => res.json())
            .then((response) => {
                console.log("response sendmessge", response);

            }).catch((error) => {
                console.log("error", error);
            })
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
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b><i className="mdi mdi-bullseye" /> Create new campaign</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form>
                                                <div className='callout-info mb-3'>
                                                    <p> Push events , offers or new stores to your close users .</p>
                                                </div>
                                                <div className="form-group">
                                                    <select id="inputState" onChange={onChangeHandle}
                                                        className="form-control"
                                                        value={selectValue}>
                                                        <option selected>-- Select Type</option>
                                                        <option value="store">Store</option>
                                                        <option value="event">Event</option>
                                                        <option value="offer">Offer</option>
                                                    </select>
                                                    {selectValue === "store" ?
                                                        <div className="form-group">
                                                            <label>Campaign's type *</label>
                                                            <select id="inputState" className="form-control" onChange={storehandle} value={storedata}>
                                                                <option selected>Choose...</option>
                                                                <option value='storedata'>store</option>
                                                                <option value='storedata'>store</option>
                                                                <option value='storedata'>store</option>

                                                            </select>
                                                        </div> : ""
                                                    }
                                                    {selectValue === "event" ?
                                                        <div className="form-group">
                                                            <label>Campaign's type *</label>
                                                            <select id="inputState" className="form-control" onChange={eventhandle} value={eventdata}>
                                                                <option selected>Choose...</option>
                                                                <option value='eventdata'>event</option>
                                                                <option value='eventdata'>event</option>
                                                                <option value='eventdata'>event</option>

                                                            </select>
                                                        </div> : ""
                                                    }
                                                    {selectValue === "offer" ?
                                                        <div className="form-group">
                                                            <label>Campaign's type *</label>
                                                            <select id="inputState" className="form-control" onChange={offerhandle} value={offerdata}>
                                                                <option selected>Choose...</option>
                                                                <option value='offerdata'>offer</option>
                                                                <option value='offerdata'>offer</option>
                                                                <option value='offerdata'>offer</option>

                                                            </select>
                                                        </div> : ""
                                                    }
                                                    {storedata === 'storedata' ?
                                                        <div>
                                                            <div className="form-group">
                                                                <label>Platforms</label><br />
                                                                <div className='row'>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        IOS
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        Android
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="form-group">
                                                                <label>Text</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Title</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                        </div>
                                                        : ""}


                                                    {offerdata === 'offerdata' ?
                                                        <div>
                                                            <div className="form-group">
                                                                <label>Platforms</label><br />
                                                                <div className='row'>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        IOS
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        Android
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="form-group">
                                                                <label>Text</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Title</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                        </div>
                                                        : ""}



                                                    {eventdata === 'eventdata' ?
                                                        <div>
                                                            <div className="form-group">
                                                                <label>Platforms</label><br />
                                                                <div className='row'>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        IOS
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        <input type='checkbox' />
                                                                    </div>
                                                                    <div className='col-sm-1'>
                                                                        Android
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="form-group">
                                                                <label>Text</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Title</label>

                                                                <input type="text" className="form-control"
                                                                    placeholder="Enter..." />
                                                            </div>
                                                        </div>
                                                        : ""}
                                                </div>





                                                <div className='user-head'>
                                                    <a href='#'><i className="fa fa-paper-plane-o" />  Push </a>
                                                    <button onClick={SendMessage}>Send-Message</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row'>


                                        <div className='col-sm-12'>
                                            <div className="product-list-box">
                                                <div className="product-list-box-header">
                                                    <h3><b>< i className="mdi mdi-bell-outline" /> Notification preview</b></h3>
                                                </div>
                                                <div className="product-card-body">
                                                    <div className='campaign-img'>
                                                        <h6>Android</h6>
                                                        <img src={Android} />
                                                        <div className='compaign-img-content'>
                                                            <h6>Notification title</h6>
                                                            <p>Notification title</p>
                                                        </div>
                                                    </div>
                                                    <div className='campaign-img'>
                                                        <h6>iOS</h6>
                                                        <img src={Iphone} />
                                                        <div className='compaign-img-content'>
                                                            <h6>Notification title</h6>
                                                            <p>Notification title</p>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Campaignnewadd