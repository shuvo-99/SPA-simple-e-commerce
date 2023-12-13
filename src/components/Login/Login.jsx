// import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="login-form" action="#" method="POST">
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            id="useremail"
            name="useremail"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        {`Don't have an Account?`}
        <span>
          <Link to="/signup" style={{ textDecoration: "None" }}>
            {" "}
            Sign Up here
          </Link>
        </span>
      </p>
      <p>
        {`Forgot Password?`}
        <span> Click Here</span>
      </p>
    </div>
  );
};

export default Login;
