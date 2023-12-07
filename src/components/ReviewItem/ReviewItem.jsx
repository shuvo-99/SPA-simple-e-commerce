import React from "react";
import "./Reviewitem.css";

const ReviewItem = (pros) => {
  const { id, img, name, price, shipping } = pros.product;
  return (
    <div className="items">
      <img src={img} />
      <div className="items_detail">
        <p style={{ fontSize: "large" }}>Name: {name}</p>
        <p>Price: ${price}</p>
        <p>Shipping Price: ${shipping}</p>
      </div>
      <button
        onClick={() => pros.handleRemoveFromCart(id)}
        className="btn_del"
        style={{ color: "red" }}
      >
        <b>X</b>
      </button>
    </div>
  );
};

export default ReviewItem;
