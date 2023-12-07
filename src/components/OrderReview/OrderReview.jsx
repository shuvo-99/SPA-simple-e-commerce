import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const carts = useLoaderData();
  console.log(carts);
  return (
    <div className="shop_container">
      <div className="review_container">
        {carts.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart_container">
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
