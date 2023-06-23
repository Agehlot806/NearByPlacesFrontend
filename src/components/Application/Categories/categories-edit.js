import React, { useEffect } from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'
import axios from 'axios'

function CategoryEdit() {
    const [Name,setName]=useState("")
    const [cateimage,setcateimage]=useState("")
    const [cateicon,setcateicon]=useState("")
    const[cateiconupdate,setcateiconupdate]=useState("")
    const[cateimageupdate,setcateimageupdate]=useState("")
    const [imageTrue, setImageTrue] = useState("false");

    const{_id}=useParams()
    console.log(":id:",_id);
    
    useEffect(()=>{
        editdeitls()
    },[])
   const editdeitls=() => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory/${_id}/stores`, requestOptions)
            .then(response => response.json())
            .then(data => {
console.log("datata",data);
                setName(data.category.categoryname);
                setcateicon(data.category.categoryicon)
                setcateimage(data.category.categoryimage)
             
            }).catch((error)=>{
                console.log("error",error);
            })
    }
    const onFileChangeimage = (event) => {
        setImageTrue(false);
    
        setcateimage(event.target.files[0]);
        setcateimageupdate(URL.createObjectURL(event.target.files[0]));

    }
    const onFileChange = (event) => {
        setImageTrue(false);
        setcateicon(event.target.files[0]);
        setcateiconupdate(URL.createObjectURL(event.target.files[0]));

    }
    const UpdateCategoryDetail = (e) => {
        e.preventDefault()
         const formData = new FormData();
        formData.append('categoryname', Name);
        formData.append('categoryicon', cateicon);
        formData.append('categoryimage', cateimage);
     
        axios
            .put(`https://nearbyplaceadminpanner.onrender.com/api/v1/allcategory/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                // history.push("/all-events");mmit 
            })
            .catch((error) => {
                console.log(error.response.data);

            });
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
                                            <h3><b>Edit Categories</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <form 
                                            onSubmit={UpdateCategoryDetail}
                                            >
                                            <div className="form-group image-size">
                                                    <label> Category Image</label>
                                                    <input type="file" onChange={onFileChangeimage} className="form-control" placeholder="Enter..." />
                                                    {imageTrue ?
                                                        <img src={cateimage} alt="file"></img> : <img src={cateimageupdate} alt="file"></img>}
                                                </div><br />
                                                <div className="form-group image-size">
                                                    <label>Category Icon</label>
                                                    <input type="file"onChange={onFileChange}  className="form-control" placeholder="Enter..." />
                                                    {imageTrue ?
                                                        <img src={cateicon} alt="file"></img> : <img src={cateiconupdate} alt="file"></img>}
                                                </div><br />
                                            <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" 
                                                    onChange={(e) => setName(e.target.value)} value={Name}
                                                     className="form-control" placeholder="Enter..." />
                                                </div>
                                               
                                                <div className='user-head'>
                                                    <button type='submit'><i className="fa fa-check-square-o" /> Create</button>
                                                </div>
                                            </form>
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

export default CategoryEdit