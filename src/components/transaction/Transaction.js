import React from "react";
import { order } from "../../utils/orderData";
import { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./transaction.css";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
    <div className="transaction">
 
      <div className="container-fuild tranHead">
      <div className="row  pt-4">
          <div className="col-md-2 col-lg-2 col-2 mx-auto my-auto  tranleft">
            <ArrowBackIcon fontSize="large" style={{cursor:'pointer'}} />
          </div>
          <div className="col-md-8 col-lg-6 col-8 mx-auto my-auto tranheadText">
            <h2>Payments</h2>
          </div>
          <div className="col-md-2 col-lg-2 col-2 mx-auto my-auto tranRight">
            <InfoOutlinedIcon fontSize="large" style={{cursor:'pointer'}} />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-8  ">
            <h5 className="ml-5 mt-5">Default Method</h5>
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
                  Both Options
                </span>

                <ChevronRightIcon className="mt-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8 ">
            <h5 className="ml-5 mt-5">Payment Profile</h5>
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
                  Bank Account
                </span>

                <ChevronRightIcon className="mt-2" />
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
          <div className="col-8 ">
            <h3 className="ml-5 mt-5" style={{ fontWeight: "bold" }}>
              Payment Overview
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
                  Lifetime
                </span>

                <KeyboardArrowDownIcon className="mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container px-4">
        <div className="row ">
          <div className="col hold pt-5 pb-5 mr-3 pl-4  ">
            <h4 style={{ color: "white" }}>AMOUNT ON HOLD</h4>
            <h3 style={{ color: "white", fontWeight: "bold" }}>
              ${sumWithInitial}
            </h3>
          </div>
          <div className="col received pt-5 pb-5 ml-2 pl-4">
            <h4 style={{ color: "white" }}>AMOUNT RECEIVED</h4>
            <h3 style={{ color: "white", fontWeight: "bold" }}>
              ${sumReceive}
            </h3>
          </div>
        </div>
      </div>
      <br />

      <div class="col-md-10 col-lg-9 col-11 mx-auto my-auto ">
        <h2 style={{ fontWeight: "bold" }}>Transactions</h2>
      </div>

      <div class="col-md-10 col-lg-9 col-11 mx-auto my-auto ">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-4 mx-auto my-auto">
            <button
              style={{ margin: "16px" }}
              type="button"
              class="btn active"
              onClick={() => filteredItem("hold")}
            >
              On Hold ({holdOrder.length})
            </button>
          </div>
          <div className="col-md-4 col-lg-4 col-4 mx-auto my-auto">
            <button
              type="button"
              class="btn "
              onClick={() => filteredItem("received")}
            >
              Payouts ({receivedOrder.length})
            </button>
          </div>
          <div className="col-md-4 col-lg-4 col-4 mx-auto my-auto">
            <button
              type="button"
              class="btn "
              onClick={() => filteredItem("refund")}
            >
              Refund ({refunddOrder.length})
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div class="col-md-10 col-lg-9 col-11 mx-auto my-auto ">
        {tran.map((u) => {
          return (
      
              <div className="container mb-4">
                <div className="card  p-3 bg-light">
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="row">
                        <div className="col-4 bg-light ">
                          <img className="img-fluid" src={u.image} />
                        </div>
                        <div className="col-6 mt-4">
                          <h4 style={{ color: "black", fontWeight:'bold' }}>Order #{u.id}</h4>
                          <br/>
                          <h6 style={{ color: "grey" }}>{u.time}</h6>
                        </div>
                        <div className="col-2 mt-4">
                          <h4 style={{ color: "blue", fontWeight:'bold' }}>${u.price}</h4>
                          <br/>
                          <div className="row">
                          <CircleIcon className="mr-2 " style={{color:'green'}} />
                          <div>
                          <h5 style={{ color: "grey", textAlign:'center' }}>{u.payment.toLocaleUpperCase()}</h5>
                          </div>
                      </div>
                          
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
        
          );
        })}
      </div>

     
    </div>
  );
};

export default Transaction;
