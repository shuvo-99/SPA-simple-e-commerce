import React from "react";
import "./Cart.css";

const Cart = (pros) => {
  return (
    <div className="cart">
      <h5>Order</h5>
      <h5>{pros.cart.length}</h5>
    </div>
  );
};

export default Cart;
