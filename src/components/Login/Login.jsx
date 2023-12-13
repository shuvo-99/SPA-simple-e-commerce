// import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const location = useLocation(); // for checking current path location

  const from = location.state?.from?.pathname || "/"; // redirect to the page from where it came to login page

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        formRef.current.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} ref={formRef}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            id="useremail"
            name="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <p onClick={() => setShow(!show)}>
            {show ? <span>Hide Password </span> : <span>Show Password</span>}
          </p>
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
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Login;
