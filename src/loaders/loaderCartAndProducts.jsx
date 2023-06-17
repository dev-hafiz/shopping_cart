import { getStoredCart } from "../uitilities/fakedb";

export const loaderCartAndProducts = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // Load the shopping cart from localStorage
  const storedCart = getStoredCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quanity = storedCart[id];
      addedProduct.quanity = quanity;
      savedCart.push(addedProduct);
    }
  }

  return { products, savedCart };
};
