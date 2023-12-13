import { useContext } from "react";
import "./Header.css";
import logo from "../../../resources/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handlelogout = () => {
    logout()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header">
      <div>
        <Link to="/" style={{ marginLeft: "0px" }}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order_review">Order Review</Link>
        <Link to="/manage_inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span style={{ color: "white" }}>
            {" "}
            Welcome, {user.email}{" "}
            <button onClick={handlelogout}>Sign Out</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
