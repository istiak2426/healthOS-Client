import React from "react";
import { useState } from "react";
import { order } from "../../utils/orderData";

import MenuIcon from "@mui/icons-material/Menu";
import "./orders.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";

const Orders = () => {
  const [orders, setOrders] = useState(order);
  const [value, setValue] = useState("");
  const [activeBtn, setActiveBtn] = useState();
  const orderCount = order.length;

  const todayOrder = order.filter((g) => {
    return g.time === "today";
  });

  const yesterdayOrder = order.filter((h) => {
    return h.time === "yesterday";
  });

  const filteredItem = (catitem) => {
    const filterArr = order.filter((element) => {
      return element.time === catitem;
    });
    setOrders(filterArr);
  };

  return (
    <div className="orders">


      <div className="container-fuild head">
        <div className="row ">
          <div className="col-10 headText">
            <h2>All Orders ({orderCount})</h2>
          </div>
          <div className="col-2 right">
            <MenuIcon fontSize="large" cursor="pointer" />
          </div>
        </div>
        <div className="row orderForm">
          <input
            type="text"
            name="search"
            class="form-control search-input"
            placeholder="Search by order id, phone number or customer name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autofocus="autofocus"
            autocomplete="off"
          />
        </div>
      </div>

      <div className="container-fluid" style={{ textAlign: "center" }}>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="all"
          class="btn active"
          onClick={() => setOrders(order)}
        >
          All time ({orderCount})
        </button>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="today"
          class="btn "
          onClick={() => filteredItem("today")}
        >
          Today ({todayOrder.length})
        </button>
        <button
          style={{ margin: "16px", cursor: "pointer", borderRadius: "2rem" }}
          type="yesterday"
          class="btn "
          onClick={() => filteredItem("yesterday")}
        >
          Yesterday ({yesterdayOrder.length})
        </button>
      </div>

      {orders
        .filter(
          (v) =>
            v.name.toLowerCase().includes(value.toLowerCase()) ||
            v.id === parseInt(value) ||
            v.phone === value
        )
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

export default Orders;
