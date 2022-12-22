import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import React from "react";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="nav-logo-link" to="/">
          <div>
            <img
              className="beyond-threads-logo"
              src={require("../../assets/image2.png")}
              alt="logo"
            ></img>
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
