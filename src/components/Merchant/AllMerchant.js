import React, { useEffect, useState } from "react";
import Navbar from "../../directives/navbar";
import Sidebar from "../../directives/sidebar";
import Footer from "../../directives/footer";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";
import fileDownload from "js-file-download";
import { Input } from "reactstrap";
import Card from "./card";
import Subscription from "../Application/Subscription/subscription";

function AllMerchant(props) {
  const [activePage, setActivePage] = useState(1);
  const [storecount, setStorecount] = useState(1);
  const [storeData, setStoreData] = useState([]);

  const [searchstoresave, setSearchStoreSave] = useState([]);
  const [modalstore, setModalStore] = useState(false);
  const [Id, setId] = useState("");
  const [status, setStatus] = useState(true);
  const [filterData, setFilterData] = useState(false);
  const [query, setQuery] = useState("");
  const [ratingSearch, setRatingSearch] = useState("");
  const [ownerSerach, setOwnerSerach] = useState("");
  const [response, setResponse] = useState([]);
  const [paynowId, setPayNowId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    allMerchantList();
  }, []);

  const allMerchantList = (page) => {
    fetch(
      `https://nearbyplaceadminpanner.onrender.com/api/v1/allstores?page=${page}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("responsive", response.stores);
        setStoreData(response.stores);
        setResponse(response.stores);

        setFilteredData(response.stores);
        setStorecount(response.storeCount);
        handleIdset(response.stores);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleIdset = (data) => {
    data.map((item) => setPayNowId(item._id));
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    handlefilterData(searchText);
  };

  const handlefilterData = (searchText) => {
    const filteredList = response.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredList);
  };

  // raksha

  useEffect(() => {
    const searchStoreData = async () => {
      const response = await fetch(
        `https://nearbyplaceadminpanner.onrender.com/api/v1/allstores`
      );
      const apiData = await response.json();
      setStoreData(apiData.stores);
      setSearchStoreSave(apiData.stores);
      // console.log("tarun birla",apiData.stores);
    };
    searchStoreData();
  }, []);

  const handleDeleteStore = (id) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // 'authorization': `Bearer ${access_token}`,
    };
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/stores/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: headers,
    }).then((resp) => {
      console.log("4444444444444", resp.message);
      toast.success("Store Deleted Successfully");
      setModalStore(false);
      allMerchantList();
    });
  };

  // delete model
  const toggleStoreModel = (id) => {
    setId(id);
    setModalStore(!modalstore);
  };

  const handlePageChange = (pageNumber) => {
    allMerchantList(pageNumber);
    console.log(pageNumber);
    setActivePage(pageNumber);
  };
  // console.log("tarun",storecount);
  const AllstoresDownload = (e) => {
    e.preventDefault();
    axios({
      url: "https://nearbyplaceadminpanner.onrender.com/api/v1/getstorecsvdata",
      method: "GET",
      responsetype: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "usersData.csv");
    });
  };
  const stroeDowanload = (id, e) => {
    setId(id);
    e.preventDefault();
    axios({
      url: `https://nearbyplaceadminpanner.onrender.com/api/v1/getstorecsvdata/${id}`,
      method: "GET",
      responsetype: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "usersData.csv");
    });
  };
  const updateStatusDetail = async (id, status) => {
    setStatus(status);
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch(
      `https://nearbyplaceadminpanner.onrender.com/api/v1/stores/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          status: status,
        }),
        headers: headers,
        credentials: "include", // Set credentials option to 'include'
      }
    )
      .then((Response) => Response.json())
      .then((Response) => {
        allMerchantList();
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };
  const filterDataList = () => {
    setFilterData(true);
  };

  const handleChange = (e) => {
    if (e.target.value == "") {
      setStoreData(searchstoresave);
    } else {
      const filterres = searchstoresave.filter((item) =>
        item.category.categoryname
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setStoreData(filterres);
    }
    setQuery(e.target.value);
  };

  const handleChangeRating = (e) => {
    if (e.target.value == "") {
      setStoreData(searchstoresave);
    } else {
      const filterres = searchstoresave.filter((item) =>
        item.ratings.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setStoreData(filterres);
    }
    setRatingSearch(e.target.value);
  };
  const handleChangeOwner = (e) => {
    if (e.target.value == "") {
      setStoreData(searchstoresave);
    } else {
      const filterres = searchstoresave.filter((item) =>
        item.storeownername.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setStoreData(filterres);
    }
    setOwnerSerach(e.target.value);
  };

  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get(
        "https://nearbyplaceadminpanner.onrender.com/api/v1/getkey"
      );
      console.log(key);
      const requestOptions = {
        amount,
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `https://nearbyplaceadminpanner.onrender.com/api/v1/checkout/${paynowId}`,
        requestOptions
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok && responseData.success) {
        const { order } = responseData;
        console.log(order);
        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: "6 Pack Programmer",
          description: "Tutorial of RazorPay",
          image: "https://avatars.githubusercontent.com/u/25058652?v=4",
          order_id: order.id,
          callback_url:
            "https://nearbyplaceadminpanner.onrender.com/api/v1/subscriptionverification",
          prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999",
          },
          notes: {
            type: "reservation",
          },
          theme: {
            color: "#121212",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        console.error("Failed to create order:", responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const paymentgetway = (e, id) => {
    console.log("e,id", id, e);
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-list-box">
                    <div className="product-list-box-header">
                      <div className="box-title" style={{ width: "100%" }}>
                        <div className=" row ">
                          <div className="pull-left col-md-6 mt-1">
                            <h3>
                              <b>All Merchant</b>
                            </h3>
                          </div>
                          <div className="pull-right col-md-6">
                            <form>
                              <div className="input-group input-group-sm">
                                <input
                                  className="form-control"
                                  size={30}
                                  name="search"
                                  type="text"
                                  placeholder="Search"
                                  //   value={searchstore}
                                  //   onChange={(e) => inputSearchStore(e)}
                                  value={searchText}
                                  onChange={handleSearchChange}
                                />
                                <span className="input-group-btn">
                                  <a className="btn btn-flat filterbysearch">
                                    <i className="mdi mdi-magnify" />
                                  </a>
                                  <Link
                                    to="/merchant-add-new"
                                    className="ml-2 btn btn-flat"
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                  <span className="ml-2 btn btn-flat">
                                    <i
                                      onClick={(e) => AllstoresDownload(e)}
                                      className="fa fa-download"
                                      aria-hidden="true"
                                    />
                                  </span>
                                  <a className="ml-2 btn btn-flat">
                                    <i
                                      class="fa fa-filter"
                                      aria-hidden="true"
                                      onClick={filterDataList}
                                    ></i>
                                  </a>
                                </span>
                              </div>
                            </form>
                          </div>
                          {filterData ? (
                            <div className="form-row">
                              <div className="form-group col-md-3">
                                <label>Category </label>
                                <Input
                                  onChange={(e) => handleChange(e)}
                                  value={query}
                                  type="search"
                                  placeholder="Category"
                                />
                              </div>

                              <div className="form-group col-md-3">
                                <label> Rating</label>
                                <Input
                                  onChange={(e) => handleChangeRating(e)}
                                  value={ratingSearch}
                                  type="search"
                                  placeholder="Rating"
                                />
                              </div>
                              <div className="form-group col-md-3">
                                <label>Owner</label>
                                <Input
                                  onChange={(e) => handleChangeOwner(e)}
                                  value={ownerSerach}
                                  type="search"
                                  placeholder="Owner"
                                />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="product-list-box-body main-table">
                      <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Store Photos</th>
                              {/* <th scope="col">Store Gallery</th> */}
                              <th scope="col">Name</th>
                              <th scope="col">Owner</th>
                              <th scope="col">Category</th>
                              <th scope="col">Status</th>
                              <th scope="col">Rating</th>
                              <th scope="col">Reviews</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData
                              ? filteredData.map((items, index) => (
                                  <tr key={index}>
                                    <td className="text-center">
                                      <img src={items.storephoto} alt="" />
                                    </td>
                                    <td>
                                      <b>{items.name}</b>
                                      <br />
                                      <i className="mdi mdi-map-marker" />{" "}
                                      {items.latitude}
                                      <br />
                                    </td>
                                    <td className="click-color">
                                      <Link to={"/ownernamelist/" + items._id}>
                                        <u>{items.storeownername}</u>
                                      </Link>
                                      <Link to="">
                                        <i className="mdi mdi-eye-outline" />
                                      </Link>
                                    </td>
                                    <td className="click-color">
                                      <Link
                                        to={
                                          "/storecategory/" + items.category._id
                                        }
                                      >
                                        <u>{items.category.categoryname}</u>
                                      </Link>
                                    </td>
                                    <td>
                                      {items.status === true ? (
                                        <span className="Enabled-btn">
                                          Enabled
                                        </span>
                                      ) : (
                                        <span className="Disabled-btn">
                                          Disabled
                                        </span>
                                      )}
                                    </td>
                                    <td>{items.ratings}</td>
                                    <td className="click-color">
                                      <Link to={"/review/" + items._id}>
                                        Reviews
                                      </Link>
                                    </td>
                                    <td className="action-btn">
                                      <span>
                                        {items.status === true ? (
                                          <i
                                            className="text-green fa fa-check"
                                            onClick={(e) =>
                                              updateStatusDetail(
                                                items._id,
                                                "false"
                                              )
                                            }
                                          />
                                        ) : (
                                          <i
                                            className="fa fa-times"
                                            onClick={(e) =>
                                              updateStatusDetail(
                                                items._id,
                                                "true"
                                              )
                                            }
                                          />
                                        )}
                                      </span>
                                      <Link to={"/all-store-edit/" + items._id}>
                                        <i class="fa fa-pencil-square-o" />
                                      </Link>
                                      <Link to="/services">
                                        <i class="fa fa-list" /> Services
                                      </Link>
                                      <Button
                                        onClick={(e) =>
                                          toggleStoreModel(items._id, e)
                                        }
                                      >
                                        <i class="fa fa-trash-o" />
                                      </Button>
                                      <Link>
                                        <i
                                          onClick={(e) =>
                                            stroeDowanload(items._id, e)
                                          }
                                          className="fa fa-download"
                                          aria-hidden="true"
                                        />
                                      </Link>
                                      <Card
                                        checkoutHandler={checkoutHandler}
                                        onChange={(e) =>
                                          paymentgetway(items._id)
                                        }
                                      />
                                    </td>
                                  </tr>
                                ))
                              : ""}
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="pagination-section">
                          {storecount > 5 && (
                            <div className="pagination-rounded">
                              <Pagination
                                activePage={activePage}
                                itemsCountPerPage={5}
                                totalItemsCount={storecount}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                              />
                            </div>
                          )}
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

      {/* Modal */}
      <Modal isOpen={modalstore}>
        <ModalHeader toggle={toggleStoreModel}>Confirmation!</ModalHeader>
        <ModalBody>
          <h3 className="text-center text-red">Are you sure? {}</h3>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleStoreModel}>
            <i className="fa fa-times" /> No
          </Button>
          <Button onClick={(e) => handleDeleteStore(Id, e)}>
            <i className="fa fa-check" /> Yes
          </Button>
        </ModalFooter>
      </Modal>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label
                    for="formGroupExampleInput"
                    className="col-sm-2 col-form-label"
                  >
                    Search :
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="choose..."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>chai sutta bar </label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Tealogy</label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Bapu ki kutiya</label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>GK</label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Pisori </label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Veg </label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Non-Veg </label>
                  </div>
                  <div className="col-sm-4">
                    <input type="checkbox" />
                    <label>Foods </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllMerchant;
