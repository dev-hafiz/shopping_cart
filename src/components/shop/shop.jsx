import { useLoaderData } from "react-router-dom";
import "./shop.css";
import Product from "../product/product";
import Cart from "../cart/cart";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../uitilities/fakedb";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id] + 1;
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  //Update cart with new and previous state
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
