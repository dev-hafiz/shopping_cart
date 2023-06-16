import { useLoaderData } from "react-router-dom";
import "./shop.css";
import Product from "../product/product";
import Cart from "../cart/cart";
import { useState } from "react";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  //Update cart with new and previous state
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
