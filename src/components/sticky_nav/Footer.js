import React from "react";
import CottageSharpIcon from "@mui/icons-material/CottageSharp";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Link, withRouter } from "react-router-dom";

import { signOut, isAuthenticated, userInfo } from "../../utils/auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "blue" };
  } else {
    return { color: "grey" };
  }
};

const Footer = ({ history }) => (
  <div className="footer">
    <div className="container ">
      <div className="row text-center">
        <Link style={isActive(history, "/")} to="/">
          <div
            className="col-md-2 col-lg-2 col-sm-2"
            style={{ cursor: "pointer" }}
          >
            <CottageSharpIcon style={{ fontSize: "32px" }} />
            <h6 style={{ color: "grey" }}>Home</h6>
          </div>
        </Link>

        {!isAuthenticated() && (
          <>
            <Link style={isActive(history, "/login")} to="/login">
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <LoginOutlinedIcon style={{ fontSize: "32px" }} />
                <h6 style={{ color: "grey" }}>Login</h6>
              </div>
            </Link>

            <Link style={isActive(history, "/register")} to="/register">
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <HowToRegOutlinedIcon style={{ fontSize: "32px" }} />
                <h6 style={{ color: "grey" }}>Register</h6>
              </div>
            </Link>
          </>
        )}

        {isAuthenticated() && (
          <>

    <Link style={isActive(history, `/orders`)} to={`/orders`}>
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <AccountBalanceWalletOutlinedIcon
                  style={{ fontSize: "32px" }}
                  className='ml-2'
                />
                <h6 style={{ color: "grey" }}>Orders</h6>
              </div>
            </Link>

<Link style={isActive(history, "/")} to="/">
<div className="col-md-2 col-lg-2 col-sm-2 ">
          <WidgetsOutlinedIcon style={{ fontSize: "32px" }} className='ml-3'/>
          <h6 style={{ color: "grey" }}>Products</h6>
        </div>
</Link>

          

        <Link style={isActive(history, `/customers`)} to={`/customers`}>
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <StorageOutlinedIcon style={{ fontSize: "32px" }} className='ml-3' />
                <h6 style={{ color: "grey" }}>Manage</h6>
              </div>
            </Link>



            <Link
              style={isActive(history, `/${userInfo().role}/dashboard`)}
              to={`/${userInfo().role}/dashboard`}
            >
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <PermIdentitySharpIcon style={{ fontSize: "32px" }} />
                <h6 style={{ color: "grey" }}>Accout</h6>
              </div>
            </Link>





            <Link style={isActive(history, `/transaction`)} to={`/transaction`}>
              <div className="col-md-2 col-lg-2 col-sm-2  ">
                <CurrencyExchangeOutlinedIcon style={{ fontSize: "32px" }} className='ml-3' />
                <h6 style={{ color: "grey" }}>Transaction</h6>
              </div>
            </Link>

            <Link style={isActive(history, `/shop`)} to={`/shop`}>
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <Shop2OutlinedIcon style={{ fontSize: "32px" }} />
                <h6 style={{ color: "grey" }}>Shop</h6>
              </div>
            </Link>

            <span
              style={{ cursor: "pointer", color: "grey" }}
              onClick={() => {
                signOut(() => {
                  history.push("/login");
                });
              }}
            >
              {" "}
              <div className="col-md-2 col-lg-2 col-sm-2 ">
                <LogoutOutlinedIcon style={{ fontSize: "32px" }} />
                <h6 style={{ color: "grey" }}>Logout</h6>
              </div>
            </span>
          </>
        )}

      
      </div>
    </div>
  </div>
);

export default withRouter(Footer);
