import "./cart.css";
// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  console.log("cart", cart);

  let subTotal = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    subTotal = subTotal + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const grandTotal = subTotal + shipping + tax;

  return (
    <div className="cart">
      <div className="cart_element">
        <div className="summary">
          <h3>Summary</h3>
          <div className="item_counter">{quantity}</div>
        </div>
        <div className="table">
          <table>
            <tr className="table_tr">
              <td className="cart_payment__title">Subtotal</td>
              <td className="payment">
                $<p id="sub_total">{subTotal.toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <td className="cart_payment__title">
                Estimated Shipping & Handing
              </td>
              <td className="payment">
                $<p id="shipping_cost">{shipping.toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <td className="cart_payment__title">Estimated Tax</td>
              <td className="payment">
                $<p id="tax_rate">{tax}</p>
              </td>
            </tr>
            <tr>
              <div className="cart_payment__title space">
                <td>Grand Total</td>
                <td className="payment">
                  $<p id="grand_total">{grandTotal.toFixed(2)}</p>
                </td>
              </div>
            </tr>
          </table>
        </div>
        <div className="order_button">
          <button className="button" type="submit" name="button">
            Review Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
