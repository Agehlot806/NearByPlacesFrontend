import React, { useState, useEffect } from "react";
import Navbar from '../../directives/navbar'
import Sidebar from '../../directives/sidebar'
import Footer from "../../directives/footer";
import { Button } from "bootstrap";

function Offeraddnew() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  const [selectValue, setSelectValue] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
 
  
  const [messsge, setMessage] = useState('');
  const [description, setDescription] = useState('');
 

  const [makeAdeal, setMakeAdeal] = useState([{ datebegin: "", dateend: "", },]);
  const [coupon, setCoupon] = useState([{ coupon_code: "", value: "", coupon_type:""},]);
  const [fileData, setFileData] = useState();

  const handleFilechange = (e) => {
    setFileData(e.target.files[0]);
  };

  const onChangeMakeAdeal = (e,name) => {
    setMakeAdeal({ [name]: e.target.value });
    console.log("makeAdeal",makeAdeal);
  };

  const onChangeHandleCoupon = (e,name) => {
    setCoupon({ [name]: e.target.value });
    console.log("setCoupon",setCoupon);
  };

  const handleMessageChange = (event) => {
    setDescription(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const allStore = () => {
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`)
      .then((res) => res.json())
      .then((responsive) => {
        console.log("tsaryhxdashgxfahsxasx", responsive.stores);
        setUser(responsive.stores)
      })
      .catch((error) => {
        console.log("error", error);
      })
  }

  const onChangeHandle = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    console.log(value);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://nearbyplaceadminpanner.onrender.com/api/v1/createnewoffer", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          description: description,
           PricingOfferValue: selectValue,
          couponConfig: coupon,
          makeAdeal: makeAdeal,
          file: fileData
        }),
      });
      let resJson = await res.json();
      setMessage("Offer created successfully");
      }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allStore();
  }, [user])

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
                      <h3><b>Add new offer</b></h3>
                    </div>
                    <div className="product-card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Store</label>
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            {user.map((item, index) => {
                              return <option key={index}>{item.name}</option>;
                            })}

                          </select>
                        </div>
                        <div className="form-group">

                          <label>Name</label>
                          <input type="text" className="form-control"
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
                          <input type="file"
                            className="form-control" placeholder="Enter..."
                            value={fileData}
                            onChange={(e) => handleFilechange(e)} />
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
                          <h3><b>Pricing & Offer value</b></h3>
                        </div>
                        <div className="product-card-body">
                          <form>
                            <div className="form-group">
                              <select id="inputState" onChange={onChangeHandle} className="form-control">
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
                                <select id="inputState" 
                                 onChange={(e) => onChangeHandleCoupon("coupon_type",e.target.value)} className="form-control">
                                  <option selected>disabled</option>
                                  <option value="enabled">enabled</option>
                                  <option value="disabled">disabled</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <label>Value</label>
                                <input type="number" className="form-control" placeholder='Enter...'
                                  value={coupon.coupon_value}
                                  onChange={(e) => onChangeHandleCoupon("value",e.target.value)} />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Coupon code</label>
                                <input type="number" className="form-control" placeholder='Enter...'
                                  value={coupon.coupon_code}
                                  onChange={(e)=> onChangeHandleCoupon("coupon_code",e.target.value)}
                                />
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
                            < div className='row mt-3' >
                              <div className="col-lg-12">
                                <div className='row'>
                                  <div className='col-sm-6'>
                                    <div className="form-group">
                                      <label>Date Begin</label>
                                      <input type="date" className="form-control"
                                        value={makeAdeal.datebegin}
                                      
                                        onChange={(e) =>
                                          onChangeMakeAdeal("datebegin", e.target.value)}
                                        
                                       
                                      />
                                    </div>
                                  </div>
                                  <div className='col-sm-6'>
                                    <div className="form-group">
                                      <label>Date End</label>
                                      <input type="date" className="form-control"
                                        value={makeAdeal.dateend}
                                        onChange={(e) =>
                                          onChangeMakeAdeal("dateend",e.target.value)}
                                    
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='user-head'>
                                  <Button><i className="fa fa-check-square-o" /> Create</Button>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Offeraddnew