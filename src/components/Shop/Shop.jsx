import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../local_storage/localStorage";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [carts, addToCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // step-1: get the stored products from local storage
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step-2: get the id
    for (const id in storedCart) {
      // step-3: get the product by using the id from json file
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // step-4: get quantity of the product
        const quantity = storedCart[id];
        // step-5: set new quantity in the json file
        addedProduct.quantity = quantity;
        // sep-6: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      console.log(savedCart);
    }
    // step-7: add to the cart
    addToCart(savedCart);
  }, [products]);

  const addItem = (item) => {
    let new_cart = [...carts, item];
    addToCart(new_cart);
    addToDb(item.id);
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
      <div className="cart_container">
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
