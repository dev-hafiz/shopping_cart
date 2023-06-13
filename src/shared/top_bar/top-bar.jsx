import "./top-bar.css";
const TopBar = () => {
  return (
    <div className="minibar">
      <div className="child">
        <p className="deal">Super Deal! free membership weekend</p>
      </div>
      <div className="child">
        {/* <i className="bi bi-geo-alt"></i> */}
        <p className="text">Contact</p>
      </div>
      <div className="child">
        {/* <i className="bi bi-question-lg"></i> */}
        <p className="text">Need help</p>
      </div>
      <div className="child">
        {/* <i className="bi bi-person"></i> */}
        <p className="text">Sign In / Register</p>
      </div>
    </div>
  );
};

export default TopBar;
