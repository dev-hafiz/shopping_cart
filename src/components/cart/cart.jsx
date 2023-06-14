import "./cart.css";
// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div className="cart_element">
        <div className="summary">
          <h3>Summary</h3>
          <div className="item_counter">{cart.length}</div>
        </div>
        <div className="table">
          <table>
            <tr className="table_tr">
              <td className="cart_payment__title">Subtotal</td>
              <td className="payment">
                $<p id="sub_total">00.00</p>
              </td>
            </tr>
            <tr>
              <td className="cart_payment__title">
                Estimated Shipping & Handing
              </td>
              <td className="payment">
                $<p id="shipping_cost">00.00</p>
              </td>
            </tr>
            <tr>
              <td className="cart_payment__title">Estimated Tax</td>
              <td className="payment">
                $<p id="tax_rate">0.00%</p>
              </td>
            </tr>
            <tr>
              <div className="cart_payment__title space">
                <td>Grand Total</td>
                <td className="payment">
                  $<p id="grand_total">00.00</p>
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
