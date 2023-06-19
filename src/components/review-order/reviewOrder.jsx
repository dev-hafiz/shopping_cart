import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/cart";
import ReviewItem from "./reviewItem";

const ReviewOrder = () => {
  const { savedCart } = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
  };

  return (
    <div className="product-parent">
      <div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="cart_area">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default ReviewOrder;
