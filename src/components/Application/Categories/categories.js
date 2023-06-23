import React, { useEffect, useState } from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import toast, { Toaster } from "react-hot-toast"
function Categories() {
    const [allCategory, setAllCategory] = useState([])
    const [categoryIcon, setCategoryIcon] = useState([])
    const [categoryImage, setCategoryImage] = useState([])
    const [categoryName, setCategoryName] = useState("")
    const [modaloffer, setModalOffer] = useState(false);
    const [Id, setId] = useState("");
    const [response, setResponse] = useState([])



    useEffect(() => {
        allCategorys();
    }, [])


    const allCategorys = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory`)
            .then((Response) => Response.json())
            .then((response) => {
                // console.log("tarun categorys",response);
                setAllCategory(response.category)
            }).catch((error) => {
                console.log("error", error);
            })
    }

    const onFileImage = (event) => {
        setCategoryImage(event.target.files[0]);
        console.log(event.target.files[0])
    }
    const onFileIcon = (event) => {
        setCategoryIcon(event.target.files[0]);
        console.log(event.target.files[0])
    }
    const onFileName = (event) => {
        setCategoryName(event.target.value)
    }

    const handleSubmitCategory = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('categoryimage', categoryImage);
        formData.append('categoryicon', categoryIcon);
        formData.append('categoryname', categoryName);

        axios({
            method: "post",
            url: "https://nearbyplaceadminpanner.onrender.com/api/v1/addnewcategory",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(response => {
                console.log("tarun category post api", response);
                toast.success("category Add Successfully")

            })
            .catch(error => {
                console.log(error);
            });
    };



    const toggleOfferModel = (id) => {
        setId(id)
        setModalOffer(!modaloffer);
    }

    const categoryDelete = (id) => {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${access_token}`,
        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory/${id}`, {
            method: "DELETE",
            headers: headers,
        })
            .then((resp) => {
                setResponse(resp)
                toast.success("category Deleted Successfully")
                setModalOffer(false);
                // allOffer();
            })

    }
    // console.log("categroryrrrrr",allCategory);
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
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Add new category</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form onSubmit={handleSubmitCategory}>


                                                <div className="form-group  image-size">
                                                    <label htmlFor="inputState">Image</label>
                                                    <input type="file" onChange={onFileImage} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group  image-size">
                                                    <label htmlFor="inputState">Icon (PNG with transparent Background, example here)</label>
                                                    <input type="file" onChange={onFileIcon} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Category name</label>
                                                    <input type="text" value={categoryName} onChange={onFileName} className="form-control" placeholder="Enter..." />
                                                </div>



                                                <br />
                                                <div className='user-head'>
                                                    <button type='submit'><i className="fa fa-check-square-o" />Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Currencies</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <div className="product-list-box-body main-table">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Image</th>
                                                                <th scope="col">icon</th>
                                                                <th scope="col">category</th>
                                                                <th scope="col">store</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {allCategory.map((items, index) => (
                                                                // console.log("items",items)
                                                                <tr key={index}>
                                                                    <td><img src={items.categoryimage} alt="image" /></td>
                                                                    <td><img src={items.categoryicon} alt="image" /></td>
                                                                    <td>{items.categoryname}</td>
                                                                    <td>99</td>
                                                                    <td className='action-btn'>
                                                                        <Link to={"/categoryedit/" + items._id}> <button><i class="fa fa-pencil-square-o" /></button></Link>
                                                                        <a><button onClick={(e) => toggleOfferModel(items._id, e)}><i class="fa fa-trash-o" /></button></a>
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
            </div>

            <Footer />

            <Modal isOpen={modaloffer}>
                <ModalHeader toggle={toggleOfferModel}>Confirmation!</ModalHeader>
                <ModalBody>
                    <h3 className="text-center text-red">Are you sure? { }</h3>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleOfferModel}><i className="fa fa-times" /> No</Button>
                    <Button onClick={(e) => categoryDelete(Id, e)}>
                        <i className="fa fa-check" /> Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Categories