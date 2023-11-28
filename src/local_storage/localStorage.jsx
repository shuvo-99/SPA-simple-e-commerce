const addToDb = (id) => {
  let shoppingCart = getShoppingCart();

  const quantity = shoppingCart[id];

  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const new_quantity = quantity + 1;
    shoppingCart[id] = new_quantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  const storedcart = localStorage.getItem("shopping-cart'");

  if (storedcart) {
    shoppingCart = JSON.parse(storedcart);
  }

  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
