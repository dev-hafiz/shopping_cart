import "./product.css";
const products = ({ product }) => {
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
          <p className="rating-container">{star} star</p>
          <div className="quantity">
            <p className="quantity_text">Quantity:</p>
            <div className="buttons">
              {/* <i onclick="decrement(${id})" className="bi bi-dash-lg"></i> */}
              <div className="quantity_count">0</div>
              {/* <i onclick="increment(${id})" className="bi bi-plus-lg"></i> */}
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default products;
