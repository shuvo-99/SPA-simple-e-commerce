import { getShoppingCart } from "../local_storage/localStorage";

const loadData = async () => {
  const loadedData = await fetch("products.json");
  const products = await loadedData.json();

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
  }
  return savedCart;
};

export default loadData;
