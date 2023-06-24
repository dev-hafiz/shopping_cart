import { NavLink } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../../src/assets/googleIcon.png";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" required />
          <button className="submit-btn" type="submit">
            Login
          </button>
          <p className="toggle-text">
            <small>
              {" "}
              Don't have an account?{" "}
              <NavLink style={{ color: "#F3A847" }} to="/register">
                Register
              </NavLink>
            </small>
          </p>
        </div>
      </form>
      <div className="line-bar">
        <p className="or-line">or</p>
      </div>
      <div className="provider-container">
        <button className="google-btn">
          <img src={googleIcon} alt="google-button" />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
