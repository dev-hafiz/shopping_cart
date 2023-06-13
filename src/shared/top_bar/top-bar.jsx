import "./top-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="minibar">
      <div className="child">
        <p className="deal">Super Deal! free membership weekend</p>
      </div>
      <div className="child">
        <FontAwesomeIcon icon={faLocation} />
        <p className="text">Contact</p>
      </div>
      <div className="child">
        <FontAwesomeIcon icon={faQuestion} />
        <p className="text">Need help</p>
      </div>
      <div className="child">
        <FontAwesomeIcon icon={faUser} />
        <p className="text">Sign In / Register</p>
      </div>
    </div>
  );
};

export default TopBar;
