import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav>
      <ul className="nav-ul shadow">
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/addProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/updateProduct">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        {auth ? (
          <li>
            <Link onClick={handleLogOut} to="/login">
              Logout
            </Link>
          </li>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
