import { useLoaderData } from "react-router-dom";
import "./shop.css";
import Product from "../product/product";
import Cart from "../cart/cart";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../uitilities/fakedb";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  //Load cart from LocalStorage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  //Update cart with new and previous state
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-parent">
      <div className="shop">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart_area">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
