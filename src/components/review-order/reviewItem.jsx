import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../rating/rating";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, star, price } = product || {};

  return (
    <div className="card">
      <div className="img">
        <img width="220" src={img} alt="" />
      </div>
      <div className="des">
        <h3 className="product_title">{name}</h3>
        <Rating className="star" star={star} />
        <p className="product_price">$ {price}</p>
        {/*
        <p className="quantity_price">$ {(search.item * price).toFixed(2)}</p>
        <div className="quantity">
          <div className="buttons">
            <i onclick="decrement(${id})" className="bi bi-dash-lg"></i>
            <div id="${id}" className="quantity_count">
              ${search.item === undefined ? 0 : search.item}
            </div>
            <i onclick="increment(${id})" className="bi bi-plus-lg"></i>
          </div>
        </div> */}
      </div>
      <div className="cancle_button">
        <FontAwesomeIcon
          onClick={() => handleRemoveItem(id)}
          size="lg"
          icon={faCircleXmark}
        />
      </div>
    </div>
  );
};

export default ReviewItem;
