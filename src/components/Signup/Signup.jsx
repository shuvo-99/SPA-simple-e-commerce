// import React from 'react';
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form id="signup-form" action="#" method="POST">
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            id="useremail"
            name="useremail"
            placeholder=" Enter your Email"
            required
          />
        </div>
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Name"
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
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Re-type your Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        {`Already have an Account?`}
        <span>
          <Link to="/login" style={{ textDecoration: "None" }}>
            {" "}
            Login here
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Signup;
