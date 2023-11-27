import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [carts, addToCart] = useState([]);

  const addItem = (item) => {
    let new_cart = [...carts, item];
    addToCart(new_cart);
  };

  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addItem={addItem}
          ></Product>
        ))}
      </div>
      <div>
        <h5>Order</h5>
        <h5>{carts.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
