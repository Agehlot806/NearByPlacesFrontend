import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'

function Allstores() {
    const [storeData, setStoreData] = useState([])
    const [searchstore, setSearchStore] = useState('');
    const [searchstoresave, setSearchStoreSave] = useState([])
    const [modalstore, setModalStore] = useState(false);
    const [Id, setId] = useState("");


   
    const allStore = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("tsaryhxdashgxfahsxasx", responsive.stores);
                setStoreData(responsive.stores)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    // console.log("ajuyhtlgrfl", storeData);

    // Search data in All Store   
    useEffect(() => {
        const searchStoreData = async () => {
            const response = await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`);
            const apiData = await response.json();
            setStoreData(apiData.stores);
            setSearchStoreSave(apiData.stores);
            // console.log("tarun birla",apiData.stores);
        };
        searchStoreData();
    }, []);
    
    const inputSearchStore = (e) => {
        if (e.target.value == '') {
            setStoreData(searchstoresave)
        }
        else {
            const filterres = searchstoresave.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setStoreData(filterres)
        }
        setSearchStore(e.target.value)
    }

    // Function to delete data from API
    const handleDeleteStore = (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/stores/${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
                console.log("4444444444444", resp.message)
                // toast(resp.message);
                // if (resp.message == 'Please enter all field') {
                //     toast.error("Please enter all field")
                // // }

                // alert("hhhhh")
                toast.success("Store Deleted Successfully")
                setModalStore(false)
                allStore()
            })

    }

    // delete model 
    const toggleStoreModel = (id) => {
        setId(id)
        setModalStore(!modalstore);
    }


    // pagination area 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // for example
    const totalPages = Math.ceil(storeData.length / itemsPerPage);
    const currentItems = storeData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                                                        <h3><b>All Stores</b></h3>
                                                    </div>
                                                    <div className="pull-right col-md-6">
                                                        <form>
                                                            <div className="input-group input-group-sm">
                                                                <input className="form-control" size={30} name="search" type="text" placeholder="Search"
                                                                    value={searchstore}
                                                                    onChange={(e) => inputSearchStore(e)} />
                                                                <span className="input-group-btn">
                                                                    <a className="btn btn-flat">
                                                                        <i className="mdi mdi-magnify" />
                                                                    </a>
                                                                    <a href='store-add-new' className="ml-2 btn btn-flat">
                                                                        <i className="fa fa-plus" aria-hidden="true" />
                                                                    </a>
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
                                                            <th scope="col">Store Photos</th>
                                                            <th scope="col">Store Gallery</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Owner</th>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Rating</th>
                                                            <th scope="col">Reviews</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {storeData.map((items, index) => (
                                                            <tr>
                                                                <td className='text-center'> <img src={items.storephoto.url} /></td>
                                                                <td className='text-center'>
                                                                    <img src={items.storegallery.url} />
                                                                </td>
                                                                <td>
                                                                    <b>{items.name}</b><br />
                                                                    <i className='mdi mdi-map-marker' /> {items.latitude}<br />
                                                                    {/* <span className="text-green"><i className='mdi mdi-attachment' /> Linked checkout (Spa_fields)</span> */}
                                                                </td>
                                                                <td className='click-color'>
                                                                    <a href=''><u>Admin</u></a>
                                                                    <a href=''><i className='mdi mdi-open-in-new' /></a>
                                                                    <a href=''><i className='mdi mdi-eye-outline' /></a>
                                                                </td>
                                                                <td className='click-color'>
                                                                    <a href=''><u>{items.category}</u></a>
                                                                </td>
                                                                <td><span className='Disabled-btn'>Disabled</span></td>
                                                                <td>{items.ratings}</td>
                                                                <td className='click-color'><a href="review">{items.numOfReviews}</a></td>
                                                                <td className='action-btn'>
                                                                    <a href=''><i className='fa fa-times' /></a>
                                                                    <Link href='all-store-edit'><i class="fa fa-pencil-square-o" /></Link>
                                                                    <a href=''><i class="fa fa-list" /> Services</a>
                                                                    <a><Button onClick={(e) => toggleStoreModel(items._id, e)}><i class="fa fa-trash-o" /></Button></a>
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
            <Modal isOpen={modalstore}>
                <ModalHeader toggle={toggleStoreModel}>Confirmation!</ModalHeader>
                <ModalBody>
                    <h3 className="text-center text-red">Are you sure? { }</h3>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleStoreModel}><i className="fa fa-times" /> No</Button>
                    <Button onClick={(e) => handleDeleteStore(Id, e)}>
                        <i className="fa fa-check" /> Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default Allstores