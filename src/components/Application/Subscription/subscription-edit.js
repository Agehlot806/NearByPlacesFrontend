import React, { useEffect, useState } from 'react'
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'


function Subscriptionedit() {
    const{_id}=useParams('')
    console.log("ididi",_id);

    useEffect(() => {
        getallsubscription();
    }, [])

    const [image, setImage] = useState([])
    const [details, setDetails] = useState([])
    const [price, setPrice] = useState([])
    const [name, setName] = useState([])
const [validityDays,setvalidityDays]=useState([])

    const getallsubscription = () => {
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/getallsubscription/${_id}`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log("responsiveedit",responsive);
                setImage(responsive.subscription.subimage)
                setDetails(responsive.subscription.Details)
                setName(responsive.subscription.subname)
                setPrice(responsive.subscription.subprice )
                setvalidityDays(responsive.subscription.validityDays)

            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    const [galleryImage, setGalleryImage] = useState([]);
    const [filegallery, setFilegallery] = useState();

    const handleStoreGallery = (event) => {
        setGalleryImage(false);
        setImage(event.target.files[0]);
        setFilegallery(URL.createObjectURL(event.target.files[0]));

    }

    const UpdateSubcripsion = (e) => {
        e.preventDefault();
        
        var formData = new FormData();
        formData.append('subscriptionimage',image);
        formData.append('subprice', price);
        formData.append('subname', name);
        formData.append('validityDays', validityDays);
        formData.append('Details', details);
     
        axios({
            method: "put",
            url: `https://nearbyplaceadminpanner.onrender.com/api/v1/updatesubscription/${_id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(response => {
            console.log("responseresponse",response);
            })
            .catch(error => {
                console.log(error);
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
                                    <h3><b>Edit Subscription</b></h3>
                                </div>
                                <div className="product-card-body">
                                <form onSubmit={UpdateSubcripsion}>
                                            <div className="form-group">
                                                    <label>Image</label>
                                                            
                                                    <input type="file" onChange={handleStoreGallery} className="form-control" placeholder="Enter..."  />
                                                    <img src={galleryImage ? image : filegallery} alt="gallery" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Details</label>
                                                    <input type="text"  value={details}  onChange={(e)=>setDetails(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input type="number"  value={price}  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>validityDays</label>
                                                    <input type="number"  value={validityDays}  onChange={(e)=>setvalidityDays(e.target.value)} className="form-control" placeholder="Enter..." />
                                                </div>
                                                <br />
                                                <div className='user-head'>
                                                    <button><i className="fa fa-check-square-o" /> Create</button>
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

export default Subscriptionedit