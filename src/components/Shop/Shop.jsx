import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../local_storage/localStorage";
import Header from "../Header/Header";

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
    // THIS IS AN ALTERNATIVE APPROACH OF HANDLING 1ST ITEM IN CART.JSX
    // let newCart = [];
    // // const newCart = [...cart, product];
    // // if product doesn't exist in the cart, then set quantity = 1
    // // if exist update quantity by 1
    // const exists = cart.find(pd => pd.id === product.id);
    // if(!exists){
    //     product.quantity = 1;
    //     newCart= [...cart, product]
    // }
    // else{
    //     exists.quantity = exists.quantity + 1;
    //     const remaining = cart.filter(pd => pd.id !== product.id);
    //     newCart = [...remaining, exists];
    // }
    let new_cart = [...carts, item];
    addToCart(new_cart);
    addToDb(item.id);
  };

  const handleClearCart = () => {
    addToCart([]);
    deleteShoppingCart();
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
        <Cart carts={carts} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
