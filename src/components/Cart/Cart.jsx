import React from "react";
import "./Cart.css";

const Cart = (pros) => {
  const { carts } = pros;

  let total = 0;
  let total_shipping = 0;

  for (const elem of carts) {
    total = total + elem.price;
  }

  for (const elem of carts) {
    total_shipping = total_shipping + elem.shipping;
  }

  let tax = (total * 7) / 100;

  let grand_total = total + total_shipping + tax;

  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <p>Selected Items: {carts.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${total_shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grand_total}</h4>
    </div>
  );
};

export default Cart;
