import React from "react";
import "./Header.css";
import logo from "../../../resources/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" style={{ marginLeft: "0px" }}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order_review">Order Review</Link>
        <Link to="/manage_inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
