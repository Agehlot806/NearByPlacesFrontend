import React from "react";
import Navbar from "../../directives/navbar";
import Sidebar from "../../directives/sidebar";
import Footer from "../../directives/footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Access = () => {
  const { id } = useParams();
  console.log("id", id);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  // Retrieve the state from localStorage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked1(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked2(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked3(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked4(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked5(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked6(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked7(storedValue === "true");
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("radioChecked");
    setIsChecked8(storedValue === "true");
  }, []);

  const makePermissionGiveRequest = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        createAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        createAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };
  const handleRadioChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked) {
      makePermissionGiveRequest();
    } else {
      makePermissionTakeRequest();
    }
  };
  const handleCheckboxChange = () => {
    // setIsChecked(true);
    setIsChecked((prevState) => !prevState);

    if (!isChecked) {
      makePermissionGiveRequest();
    } else {
      makePermissionTakeRequest();
    }
  };

  const makePermissionGiveRequest1 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest1 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange1 = () => {
    const newValue = !isChecked1;
    setIsChecked1(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked1) {
      makePermissionGiveRequest1();
    } else {
      makePermissionTakeRequest1();
    }
  };
  const makePermissionGiveRequest2 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        updateAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest2 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        updateAny: "event",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange2 = () => {
    const newValue = !isChecked2;
    setIsChecked2(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked2) {
      makePermissionGiveRequest2();
    } else {
      makePermissionTakeRequest2();
    }
  };
  const makePermissionGiveRequest3 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        createAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest3 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        createAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange3 = () => {
    const newValue = !isChecked3;
    setIsChecked3(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked3) {
      makePermissionGiveRequest3();
    } else {
      makePermissionTakeRequest3();
    }
  };
  const makePermissionGiveRequest4 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest4 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange4 = () => {
    const newValue = !isChecked4;
    setIsChecked4(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked4) {
      makePermissionGiveRequest4();
    } else {
      makePermissionTakeRequest4();
    }
  };
  const makePermissionGiveRequest5 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        updateAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest5 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        updateAny: "offer",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange5 = () => {
    const newValue = !isChecked5;
    setIsChecked5(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked5) {
      makePermissionGiveRequest5();
    } else {
      makePermissionTakeRequest5();
    }
  };
  const makePermissionGiveRequest6 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        createAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest6 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        createAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange6 = () => {
    const newValue = !isChecked6;
    setIsChecked6(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked6) {
      makePermissionGiveRequest6();
    } else {
      makePermissionTakeRequest6();
    }
  };
  const makePermissionGiveRequest7 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest7 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        deleteAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange7 = () => {
    const newValue = !isChecked7;
    setIsChecked7(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked7) {
      makePermissionGiveRequest7();
    } else {
      makePermissionTakeRequest7();
    }
  };
  const makePermissionGiveRequest8 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissongive";
    const postData = {
      user: id,
      permissions: {
        updateAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log("data", data);
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("error", error);
      });
  };

  const makePermissionTakeRequest8 = () => {
    const apiUrl =
      "https://nearbyplaceadminpanner.onrender.com/api/v1/permissiontake";
    const postData = {
      user: id,
      permissions: {
        updateAny: "store",
      },
    };

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
      })
      .catch((error) => {
        // Handle the error if needed
      });
  };

  const handleCheckboxChange8 = () => {
    const newValue = !isChecked8;
    setIsChecked8(newValue);
    localStorage.setItem("radioChecked", String(newValue));
    // setIsChecked(prevState => !prevState)

    if (!isChecked8) {
      makePermissionGiveRequest8();
    } else {
      makePermissionTakeRequest8();
    }
  };
  return (
    <>
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
                      <h3>
                        <b>Create Group Access</b>
                      </h3>
                    </div>
                    <div className="product-card-body">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <a
                            className="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#Dashbord"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="true"
                          >
                            Dashbord
                          </a>
                          <a
                            className="nav-item nav-link active"
                            id="nav-home-tab"
                            data-toggle="tab"
                            href="#Store"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="false"
                          >
                            Manage-Merchant
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="nav-profile-tab"
                            data-toggle="tab"
                            href="#Offers"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            Offers
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#Event"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Manage-event
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#Booking"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Booking
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade"
                          id="Dashbord"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  <input type="checkbox" />
                                </th>
                                <th scope="col">MODULE</th>
                                <th scope="col">PERMISSIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Offers</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Events</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Users</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    Campaigns
                                  </label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">OverView</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Reviews</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    Reservations
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade "
                          id="Store"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  <input type="checkbox" />
                                </th>
                                <th scope="col">MODULE</th>
                                <th scope="col">PERMISSIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    All-Stores
                                  </label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Manage</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked6}
                                    onChange={handleCheckboxChange6}
                                  />
                                  <label className="acces-user">Create</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked8}
                                    onChange={handleCheckboxChange8}
                                  />
                                  <label className="acces-user">Edit</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked7}
                                    onChange={handleCheckboxChange7}
                                  />
                                  <label className="acces-user">Delete</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Offers"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  <input type="checkbox" />
                                </th>
                                <th scope="col">MODULE</th>
                                <th scope="col">PERMISSIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    All-Offers
                                  </label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Manage</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked3}
                                    onChange={handleCheckboxChange3}
                                  />
                                  <label className="acces-user">Create</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked5}
                                    onChange={handleCheckboxChange5}
                                  />
                                  <label className="acces-user">Edit</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked4}
                                    onChange={handleCheckboxChange4}
                                  />
                                  <label className="acces-user">Delete</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Event"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  <input type="checkbox" />
                                </th>
                                <th scope="col">MODULE</th>
                                <th scope="col">PERMISSIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    All-Event
                                  </label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Manage</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked ? true : false}
                                    onChange={handleRadioChange}
                                  />
                                  <label className="acces-user">Create</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked2}
                                    onChange={handleCheckboxChange2}
                                  />
                                  <label className="acces-user">Edit</label>
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={isChecked1}
                                    onChange={handleCheckboxChange1}
                                  />
                                  <label className="acces-user">Delete</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Booking"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  <input type="checkbox" />
                                </th>
                                <th scope="col">MODULE</th>
                                <th scope="col">PERMISSIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">
                                    All-Booking
                                  </label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Manage</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Create</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Edit</label>
                                </td>
                                <td>
                                  <input type="checkbox" />
                                  <label className="acces-user">Delete</label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="user-head">
                        {/* <Button> Confirm</Button>
                                                <Button>cancel</Button> */}
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
  );
};

export default Access;
