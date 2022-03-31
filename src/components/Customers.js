import React from "react";
import { useState } from "react";
import { data } from "../utils/customerData";
import Layout from "../components/Layout";



const Customers = () => {
  const [user, setUser] = useState(data);
  const [value, setValue] = useState("");

  return (
    <Layout title="Your customers" description="" classNameName="container">
      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <h1>Your Customers</h1>
        <br />
        <div class="input-group form-container">
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
            <div className="container-fluid mt-5" key={u.id}>
              <div className="row text-center">
                <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
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
                        <h4 className="mb-0 mt-0 textLeft">{u.name} </h4>

                        <div className="d-flex flex-column">
                          <span className="number1">{u.orders} orders</span>{" "}
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

export default Customers;
