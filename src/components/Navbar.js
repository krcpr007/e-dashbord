import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa'
import {BiBookmarkHeart} from 'react-icons/bi'
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const profileData= JSON.parse(auth)
  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav>
      <img src="https://res.cloudinary.com/teepublic/image/private/s--DqPWTsIX--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-243/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-354/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1547549360/production/designs/3987359_0.jpg" alt="logo" 
      className="w-10 float-left mx-3 mt-0 rounded-full"/>
      {auth ? (
        <ul className="nav-ul shadow-lg flex">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/your-product">Your Products</Link>
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
          <li>
            <Link onClick={handleLogOut} to="/login">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
          <ul className="nav-ul  text-right">
          <li>
            <Link to={`/${profileData.name}/wishList`}><BiBookmarkHeart/></Link>
          </li>
          <li>
            <Link to={`/${profileData.name}/cart`}> <FaCartPlus/> </Link>
          </li>
          </ul>
        </ul>
      ) : (
        <ul className="nav-ul shadow text-right">
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-2">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
