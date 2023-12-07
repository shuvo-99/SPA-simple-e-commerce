import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import {
  deleteShoppingCart,
  removeFromDb,
} from "../../local_storage/localStorage";

const OrderReview = () => {
  const carts = useLoaderData();

  const [cart, setCart] = useState(carts);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop_container">
      <div className="review_container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart_container">
        <Cart carts={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
