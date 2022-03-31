import React from "react";
import { order } from "../utils/orderData";
import { useState } from "react";
import Layout from "../components/Layout";

const Transaction = () => {
  const [tran, setTran] = useState(order);

  const filteredItem = (catitem) => {
    const filterArr = order.filter((element) => {
      return element.payment === catitem;
    });
    setTran(filterArr);
  };

  const holdOrder = order.filter((g) => {
    return g.payment === "hold";
  });

  const receivedOrder = order.filter((h) => {
    return h.payment === "received";
  });

  const refunddOrder = order.filter((i) => {
    return i.payment === "refund";
  });

  const amountHold = order.filter((o) => {
    return o.payment === "hold";
  });

  const newArr = [];

  amountHold.map((h) => {
    return newArr.push(parseInt(h.price));
  });

  const sumWithInitial = newArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  const amountReceived = order.filter((o) => {
    return o.payment === "received";
  });

  const newReceive = [];

  amountReceived.map((k) => {
    return newReceive.push(parseInt(k.price));
  });

  const sumReceive = newReceive.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return (
    <Layout title="Your transaction" description="" classNameName="container">
      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto ">
        <h1>Your Transactions</h1>

        <div className="container">
          <div class="row">
            <div>
              <div class="card">
                <div class="card-body">
                  <p>Amount on hold</p>
                  <p>${sumWithInitial}</p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-body">
                  <p>Amount Received</p>
                  <p>${sumReceive}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto">
        <div>
          <div style={{ margin: "10px" }}>
            <button
              style={{ margin: "16px" }}
              type="button"
              class="btn btn-info"
              onClick={() => filteredItem("hold")}
            >
              On Hold ({holdOrder.length})
            </button>
            <button
              style={{ margin: "16px" }}
              type="button"
              class="btn btn-info"
              onClick={() => filteredItem("received")}
            >
              Payouts ({receivedOrder.length})
            </button>
            <button
              style={{ margin: "16px" }}
              type="button"
              class="btn btn-info"
              onClick={() => filteredItem("refund")}
            >
              Refund ({refunddOrder.length})
            </button>
          </div>
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
                          Payment Status: {u.payment}{" "}
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

export default Transaction;
