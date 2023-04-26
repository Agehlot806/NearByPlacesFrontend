import React, { useState } from "react";
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from "../../directives/footer";


function Offeredit() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="product-list-box">
                                            <div className="product-list-box-header">
                                                <h3><b>Edit Offer</b></h3>
                                            </div>
                                            <div className="product-card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Store</label>
                                                        <select id="inputState" className="form-control">
                                                            <option selected>Choose...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control" placeholder="Enter..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Description</label>
                                                        <textarea rows={10} className="form-control" placeholder="Enter..." />
                                                    </div>
                                                    <div className="form-group image-size">
                                                        <label>Images</label>
                                                        <input type="file" className="form-control" placeholder="Enter..." />
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
                                                        <h3><b>Featured Options</b></h3>
                                                    </div>
                                                    <div className="product-card-body">
                                                        <form>
                                                            <input type="radio" name="fav_language" defaultValue="HTML" />
                                                            &nbsp; <label>Disabled Featured</label><br />
                                                            <input type="radio" name="fav_language" defaultValue="CSS" />
                                                            &nbsp; <label>Make it as featured</label><br />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12'>
                                                <div className="product-list-box">
                                                    <div className="product-list-box-header">
                                                        <h3><b>Pricing & Offer value</b></h3>
                                                    </div>
                                                    <div className="product-card-body">
                                                        <form>
                                                            <div className="form-group">
                                                                <select id="inputState" className="form-control">
                                                                    <option selected>-- Select Type</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                    <option>...</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-sm-12'>
                                                <div className="product-list-box">
                                                    <div className="product-list-box-header">
                                                        <h3><b>Coupon Config</b></h3>
                                                    </div>
                                                    <div className="product-card-body">
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label>Coupon type</label>
                                                                    <select id="inputState" className="form-control">
                                                                        <option selected>disabled</option>
                                                                        <option>...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>Value</label>
                                                                    <input type="number" className="form-control" placeholder='Enter...' />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Coupon code</label>
                                                                    <input type="number" className="form-control" placeholder='Enter...' />
                                                                </div>
                                                            </div>

                                                            <p className="text-blue">This feature allows users to acquire and save coupons within the app. If you set a limited coupon, the value will decrease after each redemption.To view who has redeemed coupons from offers, go to 'Manage coupons'.</p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-sm-12'>
                                                <div className="product-list-box">
                                                    <div className="product-list-box-header">
                                                        <h3><b>Deal Option</b></h3>
                                                    </div>
                                                    <div className="product-card-body">
                                                        <div className="form-group">
                                                            <input type="checkbox" checked={isChecked}
                                                                onChange={handleCheckboxChange} className='all-create-checkbox' />
                                                            <label> Make as a deal</label>
                                                        </div>
                                                        {isChecked &&
                                                            <div className='row mt-3' >
                                                                <div className="col-lg-12">
                                                                    <div className='row'>
                                                                        <div className='col-sm-6'>
                                                                            <div className="form-group">
                                                                                <label>Date Begin</label>
                                                                                <input type="date" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <div className="form-group">
                                                                                <label>Date End</label>
                                                                                <input type="date" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div >
                                                        }
                                                        <div className='user-head'>
                                                            <a href='#'><i className="fa fa-check-square-o" /> Save Changes</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Offeredit