import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRagisterForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    // --- Email Validation Start ---

    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Give a valid email address");
      return;
    }
    setEmailError("");

    // --- Email Validation End ---

    // --- Password Validation Start ---
    if (password !== confirmPassword) {
      setPasswordError("Password didn't match");
      return;
    }
    if (!/(?=.*[a-z])/.test(confirmPassword)) {
      setPasswordError("At least 1 lowercase alphabetical character");
      return;
    }
    if (!/(?=.*[A-Z])/.test(confirmPassword)) {
      setPasswordError("At least 1 uppercase  alphabetical character");
      return;
    }
    if (!/(?=.*[0-9])/.test(confirmPassword)) {
      setPasswordError("At least 1 numeric  character");
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(confirmPassword)) {
      setPasswordError("At least 1 special character(!@#$%^&*) character");
      return;
    }
    if (!/(?=.{8,})/.test(confirmPassword)) {
      setPasswordError("The string must be eight characters or longer");
      return;
    }
    setPasswordError("");
    // --- Password Validation End ---
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Register</h3>
      <form onSubmit={handleRagisterForm}>
        <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" required />
          <small className="error-text">{emailError}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" name="confirm" required />
          <small className="error-text">{passwordError}</small>
          <button className="submit-btn" type="submit">
            Register
          </button>
          <p className="toggle-text">
            <small>
              {" "}
              Already have an account?{" "}
              <NavLink style={{ color: "#F3A847" }} to="/login">
                Login
              </NavLink>
            </small>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
