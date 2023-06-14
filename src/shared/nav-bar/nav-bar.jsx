import { NavLink } from "react-router-dom";
import "./nav-bar.css";
const NavBar = () => {
  return (
    <div className="routes_area">
      <div className="left_area">
        <NavLink to="/">
          <p className="route">Home</p>
        </NavLink>
        <NavLink to="/shop">
          <p className="route">Shop</p>
        </NavLink>
        <NavLink to="/orderreview">
          <p className="route">Order Review</p>
        </NavLink>
      </div>
      <div className="right_area">
        <p className="deal_text">Electronics Device</p>
      </div>
    </div>
  );
};

export default NavBar;
