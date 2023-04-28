import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast'


function Allevents() {
    const [eventData, seteventData] = useState([])
    const [searchevent, setSearchEvent] = useState('');
    const [searcheventsave, setSearchEventSave] = useState([])
    const [modalevent, setModalEvent] = useState(false);
    const [Id, setId] = useState("");



    const allEvent = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allevents`)
            .then((res) => res.json())
            .then((responsive) => {
                // console.log("tsaryhxdashgxfahsxasx", responsive.events);
                seteventData(responsive.events)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    // pagination area 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // for example
    const totalPages = Math.ceil(eventData.length / itemsPerPage);
    const currentItems = eventData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Search data in All Offers
    useEffect(() => {
        const searchEventData = async () => {
            const response = await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allevents`);
            const apiData = await response.json();
            seteventData(apiData.events);
            setSearchEventSave(apiData.events);
            // console.log("tarun birla",apiData.stores);
        };
        searchEventData();
    }, []);

    const inputSearchEvent = (e) => {
        if (e.target.value == '') {
            seteventData(searcheventsave)
        }
        else {
            const filterres = searcheventsave.filter(item => item.eventname.toLowerCase().includes(e.target.value.toLowerCase()))
            seteventData(false)
            allEvent()
        }
        setSearchEvent(e.target.value)
    }


    // Function to delete data from API
    const handleDeleteEvent = (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/events/${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
                toast.success("Event Deleted Successfully")
                setModalEvent(false)
            })

    }

    //  Delete Model area
    const toggleEventModel = (id) => {
        setId(id)
        setModalEvent(!modalevent);
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
                                                        <h3><b>Event</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">

                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search"
                                                                    value={searchevent}
                                                                    onChange={(e) => inputSearchEvent(e)} />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/event-new-add' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Owner</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Participants</th>
                                                            <th scope="col">Actions</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentItems.map((items, index) => (
                                                            <tr>
                                                                <td><img src={items.EventPhoto.url} /></td>
                                                                <td>
                                                                    <b>{items.eventname}</b><br />
                                                                    <i className='mdi mdi-map-marker' /> {items.address}<br />
                                                                </td>
                                                                <td className='click-color'>
                                                                    <a href='#'><u>Owner</u></a>
                                                                    <a href='#'><i className='mdi mdi-open-in-new' /></a>
                                                                    <a href='#'><i className='mdi mdi-eye-outline' /></a>
                                                                </td>
                                                                <td className='click-color'>{items.datebegin} - {items.dateend}</td>
                                                                <td><span className='Disabled-btn'>Disabled</span></td>
                                                                <td className='click-color'><Link to="/event-participants"><i className="mdi mdi-account-multiple-outline" /> 0</Link></td>
                                                                <td className='action-btn'>
                                                                    <a href=''><i className='fa fa-times' /></a>
                                                                    <Link to={"/event-edit/" + items._id}><i class="fa fa-pencil-square-o" /></Link>
                                                                    <a><Button onClick={(e) => toggleEventModel(items._id, e)}><i class="fa fa-trash-o" /></Button></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='pagination-section'>
                                                <i className="fa fa-angle-double-left" />
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                                    <button className='pagination-area' key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                                                        {pageNumber}
                                                    </button>
                                                ))}
                                                <i className="fa fa-angle-double-right" />
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
            <Modal isOpen={modalevent}>
                <ModalHeader toggle={toggleEventModel}>Confirmation!</ModalHeader>
                <ModalBody>
                    <h3 className="text-center text-red">Are you sure? { }</h3>
                </ModalBody>
                <ModalFooter>
                    <Button><i className="fa fa-times" /> No</Button>
                    <Button onClick={(e) => handleDeleteEvent(Id, e)}>
                        <i className="fa fa-check" /> Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Allevents