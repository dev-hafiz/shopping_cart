import "./nav-bar.css";
const NavBar = () => {
  return (
    <div className="routes_area">
      <div className="left_area">
        <a href="/">
          <p className="route">Home</p>
        </a>
        <a href="/shop">
          <p className="route">Shop</p>
        </a>
        <a href="/orderreview">
          <p className="route">Order Review</p>
        </a>
      </div>
      <div className="right_area">
        <p className="deal_text">Electronics Device</p>
      </div>
    </div>
  );
};

export default NavBar;
