import React from "react";
import { useState } from "react";
import { order } from "../utils/orderData";
import Layout from "../components/Layout";

const Orders = () => {
  const [orders, setOrders] = useState(order);
  const [value, setValue] = useState("");

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
    <Layout title="Your orders" description="" classNameNameName="container">
      <div className="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <h1>All Orders ({orderCount})</h1>
        <br />
        <div className="input-group form-container">
          <input
            type="text"
            name="search"
            className="form-control search-input"
            placeholder="Search by order id, phone number or customer name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autofocus="autofocus"
            autocomplete="off"
          />
        </div>
        <div style={{ margin: "10px" }}>
          <button
            style={{ margin: "16px", cursor: "pointer" }}
            type="button"
            class="btn btn-info"
            onClick={() => setOrders(order)}
          >
            All time ({orderCount})
          </button>
          <button
            style={{ margin: "16px" }}
            type="button"
            class="btn btn-info"
            onClick={() => filteredItem("today")}
          >
            Today ({todayOrder.length})
          </button>
          <button
            style={{ margin: "16px" }}
            type="button"
            class="btn btn-info"
            onClick={() => filteredItem("yesterday")}
          >
            Yesterday ({yesterdayOrder.length})
          </button>
        </div>
      </div>
      <br />

      {orders
        .filter(
          (v) =>
            v.name.toLowerCase().includes(value.toLowerCase()) ||
            v.id === parseInt(value) ||
            v.phone === value
        )
        .map((o) => {
          return (
            <div
              className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow"
              key={o.id}
            >
              <div className="card p-4">
                <div className="row">
                  {/* <!-- cart images div --> */}
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img src={o.image} className="img-fluid" alt="cart img" />
                  </div>
                  {/* <!-- cart product details --> */}
                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      {/* <!-- product name  --> */}
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">Order#{o.id}</h1>
                        <br />
                        <p className="mb-4">{o.item} items </p>
                        <p className="mb-4">Name: {o.name} </p>
                        <p className="mb-4">Phone: {o.phone} </p>
                        <p className="mb-4">Time: {o.time} </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8 d-flex justify-content-between remove_wish">
                        <p>Status: {o.status}</p>
                        <p>Payment: {o.price_status}</p>
                      </div>
                      <div className="col-4 d-flex justify-content-end price_money">
                        <h3>
                          $<span id="itemval">{o.price} </span>
                        </h3>
                        <br />
                      </div>
                      <button
                        className="col-4 d-flex justify-content-center btn btn-info"
                        type="button"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </Layout>
  );
};

export default Orders;
