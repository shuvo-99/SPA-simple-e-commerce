import React from "react";
import "./Cart.css";

const Cart = (pros) => {
  const { carts } = pros;

  let total = 0;
  let total_shipping = 0;
  let quantity = 0;

  for (const elem of carts) {
    // initially quantity is zero, so after adding 1st time it doesn't show.
    // To avoid we use this
    // ALTERNATIVE APPROACH IS WRIITEN IN SHOP.JSX (LINE 45-58)
    if (elem.quantity === 0) {
      elem.quantity = 1;
    }
    total = total + elem.price * elem.quantity;
    total_shipping = total_shipping + elem.shipping;
    quantity = quantity + elem.quantity;
  }

  let tax = (total * 7) / 100;

  let grand_total = total + total_shipping + tax;

  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${total_shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grand_total}</h4>
    </div>
  );
};

export default Cart;
