import "./top-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        {"/"}
        <NavLink className="link" to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
