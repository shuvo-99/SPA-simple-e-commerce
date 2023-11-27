import React from "react";
import "./Header.css";
import logo from "../../../resources/images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Header;
