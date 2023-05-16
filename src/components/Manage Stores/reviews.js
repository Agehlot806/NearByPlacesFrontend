import React, { useEffect, useState } from 'react'
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from '../../directives/footer'
function Reviews() {
    const [getcountry1, setCountry1] = useState([]);
    const [getCountryid1, setCountryid1] = useState("");
    const [getrowdata1, setGetrowdata1] = useState([]);
    const [imgdata, setImgdata] = useState([])
    useEffect(() => {
        const getcountrydata1 = async () => {
            const reqData = await fetch("https://nearbyplaceadminpanner.onrender.com/api/v1/allstores");
            const resData = await reqData.json();
            setCountry1(await resData.stores);
        };
        getcountrydata1();
    }, []);
    console.log("ahsfsjfhusjdcbsdhgcb", getcountry1);
    const handlecountry1 = (event) => {
        const getCountryid1 = event.target.value;
        setCountryid1(getCountryid1);
    };
    useEffect(() => {
        const getCountryrowdata1 = async () => {
            const reqCountryrowdata1 = await fetch(
                `https://nearbyplaceadminpanner.onrender.com/api/v1/allstores/${getCountryid1}`
            );
            const reqcountryrowdata1 = await reqCountryrowdata1.json();
            // console.log("hiiii",reqcountryrowdata1.stores)
            setGetrowdata1(await reqcountryrowdata1.stores);
            setImgdata(await reqcountryrowdata1.stores[0].storephoto)
        };
        getCountryrowdata1();
    }, [getCountryid1]);
    console.log("NNNNNNNN>>>>>?", imgdata);


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
                                                        <label>Checkout Fields</label>
                                                        <select
                                                            name="country"
                                                            className="form-control p-2"
                                                            onInput={(e) => handlecountry1(e)}
                                                        // value={task}
                                                        >
                                                            <option value="">choose...</option>
                                                            {getcountry1.map((resCountry, index) => (
                                                                // console.log("gurjarbawa",resCountry)
                                                                <option key={index} value={resCountry._id}>
                                                                    {resCountry.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <br />
                                                        <table cellPadding={10}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ paddingRight: '10px' }}>
                                                                        <img src='' width={80} height={80} />
                                                                    </td>
                                                                    <td>
                                                                        <strong className="font-size18px">{getrowdata1.name}</strong><br />
                                                                        <span>{getrowdata1.category} </span><br />
                                                                        <span style={{ fontSize: '12px' }}><i className="fa fa-star text-yellow" />&nbsp;&nbsp;{getrowdata1.ratings}</span>
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