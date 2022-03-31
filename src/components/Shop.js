import React from "react";
import { order } from "../utils/orderData";
import { useState } from "react";
import Layout from "../components/Layout";

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
    <Layout title="Shop Dasboard" description="" classNameName="container">
      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto ">
        <h1>Mano Super Market</h1>

        <div>
          <div class="card" style={{ width: "38rem" }}>
            <div class="card-body">
              <h5 class="card-title">Share more to earn more</h5>
              <p class="card-text">
                Your customer can visit your online store and place the order
                from this link.
              </p>
              <p>
                <a href="https://www.google.com/">www.facebook.com</a>
              </p>
              <a href="#" class="btn btn-primary">
                Share
              </a>
            </div>
          </div>
        </div>
        <br />

        <div className="container">
          <div class="row">
            <div class="card">
              <div class="card-body">
                <p>Orders</p>
                <p>78</p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <p>Total Sales</p>
                <p>208</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <p>Store View</p>
                <p>3,599</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <p>Product View</p>
                <p>19,121</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto">
        <div style={{ margin: "10px" }}>
          <button
            style={{ margin: "16px" }}
            type="button"
            class="btn btn-info"
            onClick={() => filteredItem("Pending")}
          >
            Pending ({pendingOrder.length})
          </button>

          <button
            style={{ margin: "16px" }}
            type="button"
            class="btn btn-info"
            onClick={() => filteredItem("Accepted")}
          >
            Accepted ({acceptedOrder.length})
          </button>

          <button
            style={{ margin: "16px" }}
            type="button"
            class="btn btn-info"
            onClick={() => filteredItem("Shipped")}
          >
            Shipped ({shippedOrder.length})
          </button>
        </div>
      </div>

      {tran.map((u) => {
        return (
          <div className="container-fluid mt-5" key={u.id}>
            <div className="row text-center">
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      {" "}
                      <img src={u.image} className="rounded" width="155" />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h3 className="mb-0 mt-0 textLeft">Order#{u.id} </h3>
                      <span className="number1">{u.time}</span>

                      <div className="d-flex flex-column">
                        <h5 className="mb-0 mt-0 textLeft">${u.price} </h5>
                        <h6
                          className="mb-0 mt-0 textLeft"
                          style={{ fontWeight: "bold" }}
                        >
                          Status: {u.status}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Shop;
