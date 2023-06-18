import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/cart";
import ReviewItem from "./reviewItem";

const ReviewOrder = () => {
  const { savedCart } = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  return (
    <div className="product-parent">
      <div>
        {savedCart.map((product) => (
          <ReviewItem key={product.key} product={product} />
        ))}
      </div>
      <div className="cart_area">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default ReviewOrder;
