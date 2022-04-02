import React from "react";
import { order } from "../../utils/orderData";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./shop.css";


const Shop = () => {
  const [tran, setTran] = useState(order);

  const filteredItem = (catitem) => {
    const filterArr = order.filter((element) => {
      return element.status === catitem;
    });
    setTran(filterArr);
  };

  const pendingOrder = order.filter((g) => {
    return g.status === "Pending";
  });

  const acceptedOrder = order.filter((g) => {
    return g.status === "Accepted";
  });

  const shippedOrder = order.filter((g) => {
    return g.status === "Shipped";
  });

  return (
    <div className="shop">
   

      <div className=" shopHead">
        <div className="container">
          <div className="row  pt-4">
            <div className="col-md-8 col-lg-8 col-sm-8  tranheadText">
              <div className="row">
                <h2 className="mr-4">Mano Super Market</h2>
                <CheckCircleIcon
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                  className=" mt-1"
                />
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-4 mx-auto my-auto tranRight">
              <button
                style={{
                  cursor: "pointer",
                  width: "8rem",
                  borderRadius: "1.5rem",
                  border: "none",
                  backgroundColor: "white",
                  color: "blue",
                  textAlign: "center",
                  height: "3rem",
                }}
                className="mb-2"
              >
                <div className="row ">
                  <div className="col-md-7 col-lg-7 col-sm-7 mx-auto my-auto">
                    <span
                      className="ml-3 "
                      style={{
                        color: "blue",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    >
                      Online
                    </span>
                  </div>

                  <div className="col-md-3 col-lg-3 col-sm-3 mr-4 mt-2">
                    <CircleIcon
                      style={{
                        color: "blue",
                        fontSize: "36px",
                        textAlign: "center",
                      }}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-12-lg">
              <div className="card" style={{ color: "black", width: "60rem" }}>
                <div class="card-body">
                  <div className="row mr-5 ml-1">
                    <div className="col-5">
                      <h3>Share more to earn more</h3>
                    </div>
                  </div>
                  <div className="row mr-5 ml-1">
                    <div className="col-10">
                      <h5>
                        Your customer can visit your online store and place the
                        order from this link.
                      </h5>
                    </div>
                  </div>

                  <br />

                  <div className="row mr-5 ml-3">
                    <div className="col-3">
                      <a
                        href="https://www.google.com"
                        style={{ color: "red", fontSize: "16px" }}
                      >
                        https://www.google.com
                      </a>
                    </div>
                    <div className="col-9 share">
                      <button
                        style={{
                          cursor: "pointer",
                          width: "9rem",
                          borderRadius: "1rem",
                          border: "none",
                          backgroundColor: "#25D366",
                          color: "blue",
                          textAlign: "center",
                          height: "3rem",
                          fontWeight: "bold",
                        }}
                        className="mb-2"
                      >
                        <div className="row ">
                          <div className="col-md-3 col-lg-3 col-sm-3  mt-2">
                            <WhatsAppIcon
                              style={{
                                color: "white",
                                fontSize: "28px",
                                textAlign: "center",
                              }}
                            />
                          </div>
                          <div className="col-md-7 col-lg-7 col-sm-7 mx-auto my-auto">
                            <span
                              className="ml-3 "
                              style={{
                                color: "white",
                                fontSize: "16px",
                                textAlign: "center",
                              }}
                            >
                              Share
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-8 ">
            <h3 className="ml-5 mt-5" style={{ fontWeight: "bold" }}>
              Overview
            </h3>
          </div>
          <div className="col-4">
            <div
              className="container transactionDetail mt-5"
              style={{ cursor: "pointer" }}
            >
              <div className="row ">
                <span
                  className="mr-3 ml-2"
                  style={{ fontSize: "22px", color: "grey" }}
                >
                  Last Week
                </span>

                <KeyboardArrowDownIcon className="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container px-4">
        <div className="row ">
          <div className="col shopHold pt-5 pb-5 mr-3 pl-4  ">
            <h4 style={{ color: "grey" }}>ORDERS</h4>
            <h3 style={{ color: "grey", fontWeight: "bold" }}>33</h3>
          </div>
          <div className="col shopReceived pt-5 pb-5 ml-2 pl-4">
            <h4 style={{ color: "grey" }}>TOTAL SALES </h4>
            <h3 style={{ color: "grey", fontWeight: "bold" }}>$ 2,918</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="container px-4">
        <div className="row ">
          <div className="col shopHold pt-5 pb-5 mr-3 pl-4  ">
            <h4 style={{ color: "grey" }}>STORE VIEWS</h4>
            <h3 style={{ color: "grey", fontWeight: "bold" }}>301</h3>
          </div>
          <div className="col shopReceived pt-5 pb-5 ml-2 pl-4">
            <h4 style={{ color: "grey" }}>PRODUCT VIEWS</h4>
            <h3 style={{ color: "grey", fontWeight: "bold" }}>19.121</h3>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-8 ">
            <h3 className="ml-5 mt-5" style={{ fontWeight: "bold" }}>
              Active Orders
            </h3>
          </div>
          <div className="col-4">
            <div
              className="container transactionDetail mt-5"
              style={{ cursor: "pointer" }}
            >
              <div className="row ">
                <span
                  className="mr-3 ml-2"
                  style={{ fontSize: "22px", color: "grey" }}
                >
                  View All
                </span>

                <ChevronRightIcon className="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br/>

 <div className="container-fluid" style={{ textAlign: "center" }}>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="all"
          class="btn active"
          onClick={() => filteredItem("Pending")}
        >
         Pending ({pendingOrder.length})
        </button>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="today"
          class="btn "
          onClick={() => filteredItem("Accepted")}
        >
           Accepted ({acceptedOrder.length})
        </button>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="yesterday"
          class="btn "
          onClick={() => filteredItem("Shipped")}
        >
          Shipped ({shippedOrder.length})
        </button>
      </div>

      {tran
        
        .map((o) => {
          return (
            <>
              <div className="row ">
                <div className="container mb-4">
                  <div className="card  p-3 bg-light">
                    <div className="row">
                      <div className="col-10 pl-5">
                        <h4 style={{ fontWeight: "800" }}>Order #{o.id}</h4>
                      </div>
                      <div className="col-2 pl-2">
                        <h5 style={{ color: "grey" }}>{o.time}</h5>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="row">
                          <div className="col-3 bg-light ">
                            <img className="img-fluid" src={o.image} />
                          </div>
                          <div className="col-3">
                            <h5 style={{ color: "grey" }}>{o.item} Item</h5>
                            <h3 style={{ color: "blue" }}>${o.price}</h3>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-2 col-md-10 col-sm-12 mt-4">
                        <div className="row">
                          <div className="col-lg-8 col-md-12 col-sm-12    status">
                            <span >{o.price_status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr
                      style={{
                        backgroundColor: "grey",
                        height: 1,
                      }}
                    />

                    <div className="row">
                      <div className="col-lg-10  ">
                        <CircleIcon className="mt-2" style={{color:"orange"}} />
                        <span className="ml-2" style={{ fontSize: "22px" }}>
                          {o.status}
                        </span>
                      </div>
                      <div className="col-lg-2 ">
                        <div
                          className="container   "
                          style={{ cursor: "pointer",  }}
                        >
                          <div className="row details">
                            <span
                              className="mr-5 ml-2"
                              style={{ fontSize: "22px"  }}
                            >
                              Details
                            </span>

                            <ArrowForwardIcon className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}



    </div>
  );
};

export default Shop;
