import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import React from "react";
import { UserContext } from "../../context/user.context";
import "./Navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
