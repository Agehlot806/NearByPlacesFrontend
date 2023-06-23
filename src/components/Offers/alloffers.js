import React, { useEffect, useState } from "react";
import Navbar from "../../directives/navbar";
import Sidebar from "../../directives/sidebar";
import Footer from "../../directives/footer";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import fileDownload from "js-file-download";
import dateFormat from "dateformat";

function Alloffers() {
  const { _id } = useParams();
  const [activePage, setActivePage] = useState(1);
  const [offercount, setOffercount] = useState(1);
  const [Id, setId] = useState("");
  const [offerData, setOfferData] = useState([]);
  const [data, setData] = useState([]);

  const [modaloffer, setModalOffer] = useState(false);
  const [status, setStatus] = useState(true);
  const [response, setResponse] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    allOffer();
  }, []);

  const allOffer = (page) => {
    fetch(
      `https://nearbyplaceadminpanner.onrender.com/api/v1/alloffers?page=${page}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setOfferData(response.offer);
        setData(response.offer);
        setOffercount(response.offercount);
        setFilteredData(response.offer);
      })

      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    handlefilterData(searchText);
  };

  const handlefilterData = (searchText) => {
    const filteredList = offerData.filter((item) =>
      item.offerstore.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredList);
  };

  // rakshaaa
  // Function to delete data from API
  const handleDelete = (id) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // 'authorization': `Bearer ${access_token}`,
    };
    fetch(`https://nearbyplaceadminpanner.onrender.com/api/v1/offer/${id}`, {
      method: "DELETE",
      headers: headers,
    }).then((resp) => {
      setResponse(resp);
      toast.success("Offer Deleted Successfully");
      setModalOffer(false);
      allOffer();
    });
  };

  //  Delete Model area
  const toggleOfferModel = (id) => {
    setId(id);
    setModalOffer(!modaloffer);
  };

  const handlePageChange = (pageNumber) => {
    allOffer(pageNumber);
    console.log(pageNumber);
    setActivePage(pageNumber);
  };

  const offerDowanload = (id, e) => {
    e.preventDefault();
    axios({
      url: `https://nearbyplaceadminpanner.onrender.com/api/v1/getoffercsvdata/${id}`,
      method: "GET",
      responsetype: "blob",
    }).then((res) => {
      console.log(res);
      fileDownload(res.data, "usersData.csv");
    });
  };

  const AllOfferDownload = (e) => {
    e.preventDefault();
    axios({
      url: "https://nearbyplaceadminpanner.onrender.com/api/v1/getoffercsvdata",
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
      `https://nearbyplaceadminpanner.onrender.com/api/v1/offer/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          status: status,
        }),
        headers: headers,
      }
    )
      .then((Response) => Response.json())
      .then((Response) => {
        allOffer();
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
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
                              <b>Offers</b>
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
                                  //   value={searchoffer}
                                  //   onChange={(e) => inputSearchOffer(e)}
                                  value={searchText}
                                  onChange={handleSearchChange}
                                />
                                <span className="input-group-btn">
                                  <a className="btn btn-flat filterbysearch">
                                    <i className="mdi mdi-magnify" />
                                  </a>
                                  <Link
                                    to="/offer-add-new"
                                    className="ml-2 btn btn-flat"
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                  <span className="ml-2 btn btn-flat">
                                    <i
                                      onClick={(e) => AllOfferDownload(e)}
                                      className="fa fa-download"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-list-box-body main-table">
                      <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                              <th scope="col">Owner</th>
                              <th scope="col">Status</th>
                              <th scope="col">Offer</th>
                              <th scope="col">Deal</th>
                              <th scope="col">Coupons</th>
                              <th scope="col">Description</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredData &&
                              filteredData.map((items, index) => (
                                <tr key={index}>
                                  <td>
                                    <img src={items.offerimage} alt="image" />
                                  </td>
                                  <td>
                                    <b>{items.offerstore}</b>
                                  </td>
                                  <td className="click-color">
                                    <Link to="">
                                      <u>Admin</u>
                                    </Link>
                                    <Link to="">
                                      <i className="mdi mdi-open-in-new" />
                                    </Link>
                                    <Link to="">
                                      <i className="mdi mdi-eye-outline" />
                                    </Link>
                                  </td>
                                  <td>
                                    {items.status === true ? (
                                      <Link
                                        to="/offer-published"
                                        className="Enabled-btn"
                                      >
                                        <i className="mdi mdi-history" />
                                        Published
                                      </Link>
                                    ) : (
                                      <Link
                                        to="/offer-published"
                                        className="Disabled-btn"
                                      >
                                        <i className="mdi mdi-history" />
                                        UnPublished
                                      </Link>
                                    )}
                                  </td>
                                  <td>
                                    <span className="Disabled-btn">
                                      {items.offername}
                                    </span>
                                  </td>
                                  <td>
                                    {dateFormat(items.datebegin, "dd-mm-yyyy")}{" "}
                                    To {dateFormat(items.dateend, "dd-mm-yyyy")}
                                  </td>
                                  <td>{items.coupon_code}</td>
                                  <td>{items.description}</td>
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
                                    <Link to={"/offer-edit/" + items._id}>
                                      <i class="fa fa-pencil-square-o" />
                                    </Link>
                                    <a>
                                      <Button
                                        onClick={(e) =>
                                          toggleOfferModel(items._id, e)
                                        }
                                      >
                                        <i class="fa fa-trash-o" />
                                      </Button>
                                    </a>
                                    <span>
                                      <i
                                        onClick={(e) =>
                                          offerDowanload(items._id, e)
                                        }
                                        className="fa fa-download"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="pagination-section">
                          {offercount > 5 && (
                            <div className="pagination-rounded">
                              <Pagination
                                activePage={activePage}
                                itemsCountPerPage={5}
                                totalItemsCount={offercount}
                                pageRangeDisplayed={5}
                                className="pagination-list"
                                onChange={handlePageChange}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className='pagination-section'>
                                                <i className="fa fa-angle-double-left" />
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                                    <button className='pagination-area' key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                                                        {pageNumber}
                                                    </button>
                                                ))}
                                                <i className="fa fa-angle-double-right" />
                                            </div> */}
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
      <Modal isOpen={modaloffer}>
        <ModalHeader toggle={toggleOfferModel}>Confirmation!</ModalHeader>
        <ModalBody>
          <h3 className="text-center text-red">Are you sure? {}</h3>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleOfferModel}>
            <i className="fa fa-times" /> No
          </Button>
          <Button onClick={(e) => handleDelete(Id, e)}>
            <i className="fa fa-check" /> Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
export default Alloffers;
