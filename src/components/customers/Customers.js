import React from "react";
import { useState } from "react";
import { data } from "../../utils/customerData";
import Layout from "../Layout";

import "./customer.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Customers = () => {
  const [user, setUser] = useState(data);
  const [value, setValue] = useState("");

  return (
    <div className="customers">
    

      <div className="container-fuild head">
        <div className="row ">
          <div className="col-2 left">
            <ArrowBackIcon fontSize="large" s/>
          </div>
          <div className="col-8 headText">
            <h2>My Customers</h2>
          </div>
        </div>
        <div className="row form">
          <input
            type="text"
            name="search"
            class="form-control search-input"
            placeholder="Search by customer name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autofocus="autofocus"
            autocomplete="off"
          />
        </div>
      </div>

      {user
        .filter((v) => v.name.toLowerCase().includes(value.toLowerCase()))
        .map((u) => {
          return (
            <>
              <div className="row  ">
                <div className="col-12 ">
                  <div className="card p-5 " >
                    <div className="d-flex align-items-center">
                      <div className="image">
                        {" "}
                        <img
                          src={u.image}
                          className="rounded"
                          width="155"
                        />{" "}
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft" style={{fontWeight:"bold"}}>{u.name.toLocaleUpperCase()} </h4>

                        <div className="d-flex flex-column">
                          <span className="number1">{u.orders} orders</span>{" "}
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

export default Customers;
