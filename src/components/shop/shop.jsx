import "./shop.css";

const Shop = () => {
  return (
    <div className="shop-parent">
      <div id="shop" className="shop">
      
      </div>
      <div className="cart">
        <div className="cart_element">
          <div className="summary">
            <h3>Summary</h3>
            <div className="item_counter">0</div>
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
            <a href="placeOrder.html">
              <button className="button" type="submit" name="button">
                <i className="bi bi-cart2"></i> Review Your Order
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
