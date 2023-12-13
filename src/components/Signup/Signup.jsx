// import React from 'react';
import { Link } from "react-router-dom";
import "./Signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, name, password, confirm);
    setError(". ");
    validatePassword(password, confirm);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });

    // if (password != confirm) {
    //   setError("Passwords didn't match.");
    //   return;
    // } else if (/(?=.*?[A-Z])/.test(password)) {
    //   setError("At least one upper case English letter");
    //   return;
    // } else if (/(?=.*?[a-z])/.test(password)) {
    //   setError("At least one lower case English letter");
    //   return;
    // } else if (/(?=.*?[0-9])/.test(password)) {
    //   setError("At least one special character -> '#?!@$%^&*-' ");
    //   return;
    // } else if (password.length < 6) {
    //   setError("Minimum six in length");
    //   return;
    // }
  };

  function validatePassword(password, confirm) {
    if (password.length < 6) {
      setError("Password must be at least six characters long.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#!?@$%^&*-])/;
    if (!regex.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character ('#?!@$%^&*-')."
      );
      return;
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter your Email"
            required
          />
        </div>
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter your Password"
            required
          />
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <input
            type={show ? "text" : "password"}
            name="confirm"
            placeholder="Re-type your Password"
            required
          />
          <p onClick={() => setShow(!show)}>
            {show ? <span>Hide Password </span> : <span>Show Password</span>}
          </p>
        </div>
        <button type="submit">Sign Up</button>
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
      <p className="error-msg">{error}</p>
    </div>
  );
};

export default Signup;
