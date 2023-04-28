import React, { useEffect, useState } from 'react'
import Navbar from "../../directives/navbar"
import Sidebar from "../../directives/sidebar"
import Footer from "../../directives/footer"
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import toast, { Toaster } from "react-hot-toast"

function Alloffers() {
    const { _id } = useParams()
    const [activePage, setActivePage] = useState(1);
    const [offercount, setOffercount] = useState(1);
    const [Id, setId] = useState("");
    const [offerData, setOfferData] = useState([]);
    const [data, setData] = useState([])
    const [searchoffer, setSearchOffer] = useState('');
    const [searchoffersave, setSearchOfferSave] = useState([])
    const [modaloffer, setModalOffer] = useState(false);


    const [response, setResponse] = useState([])

    useEffect(() => {
        allOffer()
    }, [setOfferData])

    const allOffer = (page) => {
        // console.log(activePage);
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/alloffers?page=${page}`)
            .then((res) => res.json())
            .then((responsive) => {
                // console.log("tsaryhxdashgxfahsxasx", responsive.offer);
                setOfferData(responsive.offer)
                setData(responsive.offer[0].couponConfig);
                setOffercount(responsive.offercount);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    // Search data in All Offers
    useEffect(() => {
        const searchOfferData = async () => {
            const response = await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/alloffers`);
            const apiData = await response.json();
            setOfferData(apiData.offer);
            setSearchOfferSave(apiData.offer);
            // console.log("tarun birla",apiData.stores);
        };
        searchOfferData();
    }, []);

    const inputSearchOffer = (e) => {
        if (e.target.value === '') {
            setOfferData(searchoffersave)
        }
        else {
            const filterres = searchoffersave.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setOfferData(filterres)
        }
        setSearchOffer(e.target.value)
    }
    // Function to delete data from API
    const handleDelete = (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/offer/${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
               setResponse(resp)
                toast.success("Offer Deleted Successfully")
                setModalOffer(false);
                allOffer();
            })

    }

    //  Delete Model area
    const toggleOfferModel = (id) => {
        setId(id)
        setModalOffer(!modaloffer);
    }

    // pagination area 
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5; // for example
    // const totalPages = Math.ceil(offerData.length / itemsPerPage);
    // const currentItems = offerData.slice(
    //     (currentPage - 1) * itemsPerPage,
    //     currentPage * itemsPerPage
    // );
    const handlePageChange = (pageNumber) => {
        allOffer(pageNumber);
        console.log(pageNumber);
        setActivePage(pageNumber);

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
                                                        <h3><b>Offers</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search"
                                                                    value={searchoffer}
                                                                    onChange={(e) => inputSearchOffer(e)} />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <Link to='/offer-add-new' className="ml-2 btn btn-flat">
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
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Offer</th>
                                                            <th scope="col">Deal</th>
                                                            <th scope='col'>Coupons</th>
                                                            <th scope='col'>Description</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {offerData.map((items, index) => (
                                                            <tr key={index}>
                                                                <td><img src={items.offerImage.url} alt="image" /></td>
                                                                <td><b>{items.name}</b></td>
                                                                <td className='click-color'>
                                                                    <a href=''><u>Admin</u></a>
                                                                    <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                                    <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                                </td>
                                                                <td><Link to='/offer-published' className='Enabled-btn'><i className="mdi mdi-history" /> Published</Link></td>
                                                                <td><span className='Disabled-btn'>{items.PricingOfferValue}</span></td>
                                                                <td>-----</td>
                                                                <td >{items.coupon_code}</td>
                                                                <td>{items.description}</td>
                                                                <td className='action-btn'>
                                                                    <Link to=''><i className='text-green fa fa-check' /></Link>
                                                                    <Link to={"/offer-edit/" + items._id}><i class="fa fa-pencil-square-o" /></Link>
                                                                    <a><Button onClick={(e) => toggleOfferModel(items._id, e)}><i class="fa fa-trash-o" /></Button></a>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>

                                            </div>
                                            <div className="pagination-section">
                                                {offercount > 6 &&
                                                    <div className="pagination-rounded">
                                                        <Pagination
                                                            activePage={activePage}
                                                            itemsCountPerPage={5}
                                                            totalItemsCount={offercount}
                                                            pageRangeDisplayed={5}
                                                            className="pagination-list"
                                                            onChange={handlePageChange}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                            {/* <div className='pagination-section'>
                                                <i className="fa fa-angle-double-left" />
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                                    <button className='pagination-area' key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                                                        {pageNumber}
                                                    </button>
                                                ))}
                                                <i className="fa fa-angle-double-right" />
                                            </div> */}
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
            <Modal isOpen={modaloffer}>
                <ModalHeader toggle={toggleOfferModel}>Confirmation!</ModalHeader>
                <ModalBody>
                    <h3 className="text-center text-red">Are you sure? { }</h3>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleOfferModel}><i className="fa fa-times" /> No</Button>
                    <Button onClick={(e) => handleDelete(Id, e)}>
                        <i className="fa fa-check" /> Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default Alloffers;