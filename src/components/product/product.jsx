import "./product.css";
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
            <div className="buttons">
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
