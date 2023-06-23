import React from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function Managepages() {
    
const[cmsall,setCmsall]=useState([])
const [modalstore, setModalStore] = useState(false);
const [Id, setId] = useState("");

    useEffect(() => {
        allCms()
    }, [])

    const allCms = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallcms`)
            .then((res) => res.json())
            .then((responsive) => {
            //  console.log("responsive",responsive)
             setCmsall(responsive.cms)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    const toggleStoreModel = (id) => {
        setId(id)
        setModalStore(!modalstore);
    }

    const Deleteall = async (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000/',
        };
        await fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/managemenu/${id}`, {
            method: 'DELETE',
            headers: headers,
        })
            .then((Response) => Response.json())
            .then((Response) => {
         
                console.log("ResponseResponseResponseResponse", Response)
            
            })
            .catch((error) => {
                console.error("ERROR FOUND---->>>>" + error);
            })
    }
    // console.log("cmsallcmsallcmsall",cmsall);
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
                                                <h3><b>Man  age Pages</b></h3>
                                            </div>
                                            <div className="pull-right col-md-6">
                                                <form>
                                                    <div className="input-group input-group-sm">
                                                        <input className="form-control" size={30} name="search" type="text" placeholder="Search" />
                                                        <span className="input-group-btn">
                                                            <a className="btn btn-flat">
                                                                <i className="mdi mdi-magnify" />
                                                            </a>
                                                            <a href='manage-pages-add' className="ml-2 btn btn-flat">
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
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Link</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cmsall.map((items,index)=>( 

                                            
                                                <tr key={index}>
                                                    <td>{items.Title}</td>
                                                    <td>{items.Link}</td>
                                                    <td className='action-btn'>
                                                        <Link to={'/manage-pages-edit/'+items._id}><i class="fa fa-pencil-square-o" /></Link>
                                                        <button onClick={(e) => toggleStoreModel(items._id, e)}><i class="fa fa-trash-o" /></button>
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
     <Modal isOpen={modalstore}>
                <ModalHeader toggle={toggleStoreModel}>Confirmation!</ModalHeader>
                <ModalBody>
                    <h3 className="text-center text-red">Are you sure? { }</h3>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleStoreModel}><i className="fa fa-times" /> No</Button>
                    <Button onClick={(e) => Deleteall(Id, e)}>
                        <i className="fa fa-check" /> Yes
                    </Button>
                </ModalFooter>
            </Modal>





     <div className="modal fade" id="managepagesDeleteModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmation!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <h3 className="text-center text-red">Are you sure?</h3>
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

export default Managepages