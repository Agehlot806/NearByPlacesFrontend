import React, { useState, useEffect } from "react";
import Navbar from "../../directives/navbar";
import Sidebar from "../../directives/sidebar";
import Footer from "../../directives/footer";
import { Button, Input, Form } from "reactstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useHistory, Link } from "react-router-dom";

function Offeredit() {
  const { _id } = useParams();
  const [user, setUser] = useState([]);
  const [store, setStores] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileData, setFileData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [coupon_value, SetCoupon_value] = useState("");
  const [coupon_code, SetCoupon_code] = useState("");
  const [coupon_type, setCoupon_type] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [datebegin, setDatebegin] = useState("");
  const [dateend, setDateEnd] = useState("");
  const [percent, setPercent] = useState("");
  const [Id, setId] = useState("null");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const [imageTrue, setImageTrue] = useState("false");
  const history = useHistory();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((responsive) => {
        setUser(responsive.stores);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    offeredit();
  }, []);
  const offeredit = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };
    fetch(
      `https://nearbyplaceadminpanner.onrender.com/api/v1/offer/${_id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setName(data?.offer.offername);
        setSelectValue(data?.offer.selectValue);
        setDescription(data?.offer.description);
        setCoupon_type(data?.offer.coupon_type);
        SetCoupon_code(data?.offer.coupon_code);
        SetCoupon_value(data?.offer.value);
        setDatebegin(data?.offer.datebegin);
        setDateEnd(data?.offer.dateend);
        setPercent(data?.offer.percent);
        setFileData(data?.offer.offerimage);
        setId(data?.offer._id);
        setImageTrue(true);
      });
  };
  // console.log("percent",percent);
  const UpdateOfferDetail = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("offername", name);
    formData.append("offerimage", fileData);
    formData.append("description", description);
    formData.append("eventimage", file);
    formData.append("datebegin", datebegin);
    formData.append("dateend", dateend);
    formData.append("coupon_type", coupon_type);
    formData.append("value", coupon_value);
    // formData.append('PricingOfferValue', selectValue);
    axios
      .put(
        `https://nearbyplaceadminpanner.onrender.com/api/v1/offer/${_id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(" offer update successfully");
        history.push("/all-offers");
        // history.push("/all-events");mmit
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const onFileChange = (event) => {
    setImageTrue(false);
    setFileData(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  const onChangeHandle = (event) => {
    setSelectValue(event.target.value);
  };
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

  return (
    <>
      <Toaster />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="main-panel-content">
          <div className="section-panel">
            <div className="container">
              <form onSubmit={UpdateOfferDetail}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-list-box">
                      <div className="product-list-box-header">
                        <h3>
                          <b>Edit Offer</b>
                        </h3>
                      </div>
                      <div className="product-card-body">
                        {/* <form> */}
                        <div className="form-group">
                          <label>Store</label>
                          <select id="inputState" className="form-control">
                            {user &&
                              user.map((item, index) => {
                                return <option key={index}>{item.name}</option>;
                              })}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Name</label>

                          <Input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter..."
                          />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <textarea
                            rows={10}
                            className="form-control"
                            placeholder="Enter..."
                            name="message"
                            value={description}
                            onChange={handleMessageChange}
                          />
                        </div>
                        <div className="form-group image-size">
                          <label>Images</label>
                          <Input
                            type="file"
                            onChange={onFileChange}
                            className="form-control"
                            placeholder="Enter..."
                          />
                          {imageTrue ? (
                            <img src={fileData} alt="file"></img>
                          ) : (
                            <img src={file} alt="file"></img>
                          )}
                          <br />
                        </div>
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3>
                              <b>Featured Options</b>
                            </h3>
                          </div>
                          <div className="product-card-body">
                            <input
                              type="radio"
                              name="fav_language"
                              defaultValue="HTML"
                            />
                            &nbsp; <label>Disabled Featured</label>
                            <br />
                            <input
                              type="radio"
                              name="fav_language"
                              defaultValue="CSS"
                            />
                            &nbsp; <label>Make it as featured</label>
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3>
                              <b>Pricing & Offer value</b>
                            </h3>
                          </div>
                          <div className="product-card-body">
                            <div className="form-group">
                              <input
                                type="number"
                                value={percent}
                                className="form-control"
                                onChange={(e) => setPercent(e.target.value)}
                              />
                              {/* <select id="inputState" onChange={onChangeHandle}
                                                                className="form-control"
                                                                value={selectValue}>
                                                                <option selected>{selectValue? selectValue:"select"}</option>
                                                                <option value="100">100</option>
                                                                <option value="1100">1100</option>
                                                                <option value="2500">2500</option>
                                                                <option value="3000">3000</option>
                                                                <option value="5000">5000</option>
                                                                <option value="12000">12000</option>
                                                                <option value="5000">50000</option>
                                                                <option value="100000">1,00000</option>
                                                            </select> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3>
                              <b>Coupon Config</b>
                            </h3>
                          </div>
                          <div className="product-card-body">
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Coupon type</label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter..."
                                  value={coupon_type}
                                  onChange={(e) => onChangeHandleCoupon(e)}
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Value</label>
                                <Input
                                  type="number"
                                  className="form-control"
                                  placeholder="Enter..."
                                  value={coupon_value}
                                  onChange={(e) => onChangeHandleCouponValue(e)}
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Coupon code</label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter..."
                                  value={coupon_code}
                                  onChange={(e) => onChangeHandleCouponCode(e)}
                                />
                              </div>
                            </div>

                            <p className="text-blue">
                              This feature allows users to acquire and save
                              coupons within the app. If you set a limited
                              coupon, the value will decrease after each
                              redemption.To view who has redeemed coupons from
                              offers, go to 'Manage coupons'.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="product-list-box">
                          <div className="product-list-box-header">
                            <h3>
                              <b>Deal Option</b>
                            </h3>
                          </div>
                          <div className="product-card-body">
                            <div className="form-group">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="all-create-checkbox"
                              />
                              <label> Make as a deal</label>
                            </div>
                            {isChecked && (
                              <div className="row mt-3">
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label>Date Begin</label>
                                        <Input
                                          type="date"
                                          className="form-control"
                                          value={datebegin}
                                          onChange={(e) =>
                                            setDatebegin(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="form-group">
                                        <label>Date End</label>
                                        <Input
                                          type="date"
                                          className="form-control"
                                          value={dateend}
                                          onChange={(e) =>
                                            setDateEnd(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="user-head">
                        <Button type="submit">
                          <i className="fa fa-check-square-o" /> Save
                        </Button>
                        <Link to="/all-offers">Cancel</Link>
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
  );
}

export default Offeredit;
