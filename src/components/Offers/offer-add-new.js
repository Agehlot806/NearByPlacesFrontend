import React, { useState, useEffect } from "react";
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from "../../directives/footer";
import { Button, Input } from "reactstrap";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'



function Offeraddnew() {
  const [store, setStores] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [fileData, setFileData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [coupon_value, SetCoupon_value] = useState("");
  const [coupon_code, SetCoupon_code] = useState("");
  const [coupon_type, setCoupon_type] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  const [datebegin, setDatebegin] = useState("")
  const [dateend, setDateEnd] = useState("")
  // const [couponConfig, setCouponCode] = useState([{coupon_type:""},{value:""},{coupon_code:""}])
  const [message, setMessage] = useState("")
  const [user, setUser] = useState([]);




  const onFileChange = (event) => {
    setFileData(event.target.files[0]);
    console.log(event.target.files[0])
  }
  const onChangeHandle = (event) => {
    setSelectValue(event.target.value);
  }
  const onChangeHandleCoupon = (e) => {
    setCoupon_type(e.target.value);
  };

  const onChangeHandleCouponCode = (event) => {
    SetCoupon_code(event.target.value);
  };

  const handleMessageChange = (event) => {
    setDescription(event.target.value);
    // console.log(event.target.value);
  };
  const onChangeHandleCouponValue = (event) => {
    SetCoupon_value(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // setIsChecked(true);
  };

  const allStore = () => {
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`)
      .then((res) => res.json())
      .then((responsive) => {
      
        setUser(responsive.stores)
      })
      .catch((error) => {
        // console.log("error", error);
      })
  }
useEffect(()=>{
  allStore();
},[user])

  let handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', fileData);
    formData.append('PricingOfferValue', selectValue);
    formData.append('coupon_type',coupon_type);
    formData.append('value',coupon_value);
    formData.append('coupon_code',coupon_code);
    formData.append('datebegin',datebegin);
    formData.append('dateend',dateend);
    axios({
      method: "post",
      url: "https://nearbyplaceadminpanner.onrender.com/api/v1/createnewoffer",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => {
        setMessage(response.data.message);
          toast.success("offer created successfully");
       
          setTimeout(() => {
            handleMeaage();
        }, 300);
      })
      .catch(error => {
        toast.error("Please Fill all  Field");
        console.log(error);
      });
  };

const handleMeaage = ()=>{
  setCoupon_type("");
  setName("");
  setSelectValue([]);
  setFileData([]);
  SetCoupon_value("")
  // setStores("");
  SetCoupon_code("");
  setSelectValue("");
  setDateEnd("");
  setDatebegin("");
  setDescription("");

}

  return (
    <>
    <Toaster/>
      <Navbar />
      <Sidebar />
      <div className='content-wrapper'>
        <div className="main-panel-content">
          <div className='section-panel'>
            <div className='container'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className="product-list-box">
                      <div className="product-list-box-header">
                        <h3><b>Add new offer</b></h3>
                         {/* {message && ( <span className="text-success">{message}</span>)} */}
                       
                      </div>
                      <div className="product-card-body">

                        <div className="form-group">
                          <label>Store</label>
                          <select id="inputState" className="form-control"
                            value={store}
                            onChange={(e) => setStores(e.target.value)}>
                            <option selected>Choose...</option>
                            {user.map((item, index) => {
                              return <option key={index}>{item.name}</option>;
                            })}

                          </select>
                        </div>
                        <div className="form-group">

                          <label>Name</label>
                          <Input type="text" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter..." />

                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <textarea rows={10} className="form-control"
                            placeholder="Enter..."
                            name="message"
                            value={description}
                            onChange={handleMessageChange} />
                        </div>
                        <div className="form-group image-size">
                          <label>Images</label>
                          <Input type="file" onChange={onFileChange}
                            className="form-control" placeholder="Enter..." />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3><b>Pricing & Offer value</b></h3>
                          </div>
                          <div className="product-card-body">
                            <div className="form-group">
                              <select id="inputState" onChange={onChangeHandle}
                                className="form-control"
                                value={selectValue}>
                                <option selected>-- Select Type</option>
                                <option value="100">100</option>
                                <option value="1100">1100</option>
                                <option value="2500">2500</option>
                                <option value="3000">3000</option>
                                <option value="5000">5000</option>
                                <option value="12000">12000</option>
                                <option value="5000">50000</option>
                                <option value="100000">1,00000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-sm-12'>
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3><b>Coupon Config</b></h3>
                          </div>
                          <div className="product-card-body">
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Coupon type</label>
                                <Input type="text" className="form-control" placeholder='Enter...'
                                  value={coupon_type}
                                  onChange={(e) => onChangeHandleCoupon(e)} />
                                {/* <select id="inputState"
                                  onChange={(e) => onChangeHandleCoupon(e)}
                                  className="form-control"
                                  value={coupon_type}>
                                  <option value="enabled">enabled</option>
                                  <option value="disabled">disabled</option>
                                </select> */}
                              </div>
                              <div className="form-group col-md-6">
                                <label>Value</label>
                                <Input type="number" className="form-control" placeholder='Enter...'
                                  value={coupon_value}
                                  onChange={(e) => onChangeHandleCouponValue(e)} />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Coupon code</label>
                                <Input type="text" className="form-control" placeholder='Enter...'
                                  value={coupon_code}
                                  onChange={(e) => onChangeHandleCouponCode(e)}
                                />
                              </div>
                            </div>
                            <p className="text-blue">This feature allows users to acquire and save coupons within the app. If you set a limited coupon, the value will decrease after each redemption.To view who has redeemed coupons from offers, go to 'Manage coupons'.</p>
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
                              < div className='row mt-3' >
                                <div className="col-lg-12">
                                  <div className='row'>
                                    <div className='col-sm-6'>
                                      <div className="form-group">
                                        <label>Date Begin</label>
                                        <Input type="date" className="form-control"
                                          value={datebegin}
                                          onChange={(e) => setDatebegin(e.target.value)} />
                                      </div>
                                    </div>
                                    <div className='col-sm-6'>
                                      <div className="form-group">
                                        <label>Date End</label>
                                        <Input type="date" className="form-control"
                                          value={dateend}
                                          onChange={(e) => setDateEnd(e.target.value)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className='user-head'>
                                    <Button type="submit"><i className="fa fa-check-square-o" /> Create</Button>
                                  </div>
                                </div>
                              </div >
                            }
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

export default Offeraddnew;