import "./mid-bar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
const MidBar = () => {
  return (
    <div className="midbar">
      <div className="cart_logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="search_area">
        <div className="search_input">
          <input type="text" placeholder="Search Product" className="search" />
          <div className="area">
            <FontAwesomeIcon className="faIcon" size="xs" icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="cell_phone">
        <FontAwesomeIcon icon={faPhone} />
        <div className="call_number">
          <p>Call us now</p>
          <p>+1 01 444 55 99</p>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
