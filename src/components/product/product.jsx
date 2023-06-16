// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.css";
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "../rating/rating";

// eslint-disable-next-line react/prop-types
const Product = ({ product, addToCart }) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, seller, price, stock, star } = product;
  return (
    <div className="prduct_card__warpper">
      <div className="product_card">
        <img width="300" src={img} alt="Product Image" />
        <div className="product_des">
          <h3 className="product_title">{name}</h3>
          <p className="product_seller">Seller : {seller}</p>
          <p className="product_price">$ {price}</p>
          <p className="stock">only {stock} left in stock - order soon</p>
          <Rating star={star} />
          <div className="quantity">
            {/* <p className="quantity_text">Quantity:</p> */}
            <div className="buttons">
              {/* Will Implement  */}
              {/* <FontAwesomeIcon className=" bi-dash-lg" icon={faMinus} />
              <div className="quantity_count">0</div>
              <FontAwesomeIcon
                onClick={() => addToCart(product)}
                className=" bi-plus-lg"
                icon={faPlus}
              /> */}

              <button
                onClick={() => addToCart(product)}
                type="submit"
                name="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Product;
