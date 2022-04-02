import React from "react";

import { API } from "../../utils/config";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const Card = ({ product, handleAddToCart }) => {
  const titleStyle = {
    display: "block",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
    maxHeight: "2em",
    lineHeight: "1em",
  };
  const imgStyle = {
    height: 250,
    objectFit: "cover",
    objectPosition: "0px 0px",
  };
  return (
    <div className="container mb-4">
      <div className="card  p-3 bg-light">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-4 bg-light ">
                  <img
                    className="img-fluid"
                    src={`${API}/product/photo/${product._id}`}
                    alt={product.name}
                    style={imgStyle}
                  />
                </div>
                <div className="col-6 mt-4">
                  <h4 style={{ color: "black", fontWeight: "bold" }}>
                    {product.name}
                  </h4>
                  <br />
                  <h6 style={{ color: "grey", fontSize: "20px" }}>
                    {product.unit} Unit
                  </h6>
                  <br />
                  <h6
                    style={{
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    ${product.price}
                  </h6>
                  <br />
                  <p>
                    {product.quantity ? (
                      <span
                        style={{
                          color: "#25D366",
                          fontWeight: "bold",
                          fontSize: "22px",
                        }}
                      >
                        In Stock
                      </span>
                    ) : (
                      <span style={{ color: "red", fontSize: "22px" }}>
                        Out of Stock
                      </span>
                    )}
                  </p>
                </div>
                <div className="col-2 mt-4">
                  <MoreVertOutlinedIcon
                    className="ml-5"
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  />

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <button
                    style={{
                      cursor: "pointer",
                      width: "4rem",
                      borderRadius: "2rem",
                      border: "none",
                      backgroundColor: "blue",
                      color: "blue",
                      textAlign: "center",
                      height: "2rem",
                    }}
                    className="mb-2"
                  >
                    <div className="row ">
                      <div className="col-md-3 col-lg-3 col-sm-3 ">
                        <span
                          style={{
                            color: "blue",
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        ></span>
                      </div>

                      <div className="col-md-6 col-lg-6 col-sm-6  mt-1 ">
                        <CircleIcon
                          style={{
                            color: "white",
                            fontSize: "22px",
                          }}
                          className="mr-5"
                        />
                      </div>
                    </div>
                  </button>
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
            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="row ml-5">
                <div className="col-3 "></div>
                <div
                  className="col-8 ml-5 cardShare"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      width: "17rem",
                      borderRadius: "1rem",
                      border: "none",

                      color: "blue",
                      textAlign: "center",
                      height: "3rem",
                      fontWeight: "bold",
                    }}
                    className="mb-2"
                  >
                    <div className="row ">
                      <div className="col-md-3 col-lg-3 col-sm-3  mt-2">
                        <ShareOutlinedIcon
                          style={{
                            color: "grey",
                            fontSize: "28px",
                            textAlign: "center",
                          }}
                          className="ml-5"
                        />
                      </div>
                      <div className="col-md-7 col-lg-7 col-sm-7 mx-auto my-auto">
                        <span
                          className="ml-3mr-4 "
                          style={{
                            color: "black",
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          Share Products
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
