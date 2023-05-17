import React, { useEffect, useState } from "react";
import Navbar from "../../directives/navbar";
import Sidebar from "../../directives/sidebar";
import Footer from "../../directives/footer";
import { useParams } from "react-router";


function Reviews() {
    const { _id } = useParams();
    const [store, setStore] = useState([]);
    const [storePhoto, setStorePhoto] = useState([]);
    const [ratings, setRatings] = useState("");
    const [category, setCategories] = useState("")

    useEffect(() => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/stores/${_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setStore(data.store.name);
                setCategories(data.store.category)
                setStorePhoto(data.store.storephoto.url);
                setRatings(data.store.ratings);

            })
    }, []);

    console.log(store);
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
                                            <h3><b>Store detail</b></h3>
                                        </div>
                                        <div className='p-3'>
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-5">
                                                        <label>Select Store</label>
                                                        <select
                                                            name="country"
                                                            className="form-control p-2"
                                                            // onInput={(e) => handlecountry1(e)}
                                                            value={store}
                                                        >
                                                            <option value="">{store}</option>
                                                            {/* {getcountry1.map((resCountry, index) => (
                                                                // console.log("gurjarbawa",resCountry)
                                                                <option key={index} value={resCountry._id}>
                                                                    {resCountry.name}
                                                                </option>
                                                            ))} */}
                                                        </select>
                                                        <br />
                                                        <table cellPadding={10}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}>
                                                                        <img src={storePhoto} width={80} height={80} />
                                                                    </td>
                                                                    <td>
                                                                        <strong className="font-size18px">{store}</strong><br />
                                                                        <span>{category} </span><br />
                                                                        <span style={{ fontSize: '12px' }}><i className="fa fa-star text-yellow" />&nbsp;&nbsp;{ratings}</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-7" style={{ padding: '20px' }}>
                                                        <table cellPadding={10}>
                                                            <tbody><tr>
                                                                <td style={{ paddingRight: '10px' }}> <span>0</span></td>
                                                                <td>
                                                                    <div className="r5">
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                        <i className="fa fa-star text-yellow" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r4">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r3">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r2">
                                                                            <i className="fa fa-star text-yellow" />
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}><span>0</span></td>
                                                                    <td>
                                                                        <div className="r1">
                                                                            <i className="fa fa-star text-yellow" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b> Reviews :</b></h3>
                                        </div>
                                        <div className='p-3'>
                                            No reviews
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
export default Reviews