import React from "react";
import "./Product.css";

const Product = (pros) => {
  const { img, name, category, seller, ratings } = pros.product;
  return (
    <div className="product">
      <div className="product_info">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>{category}</h4>
        <p>Manufracturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button className="btn_add">Add to Cart</button>
    </div>
  );
};

export default Product;
