import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ star }) => {
  const MAX_RATING = 5;

  return (
    <div>
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <FontAwesomeIcon
          style={{ color: "#EC9D4D" }}
          key={index}
          icon={index < star ? solidStar : regularStar}
        />
      ))}
    </div>
  );
};

export default Rating;
