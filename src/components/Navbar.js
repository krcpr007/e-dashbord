import React from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa'
import {BiBookmarkHeart} from 'react-icons/bi'
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const auth = localStorage.getItem("user");
  const profileData= JSON.parse(auth);
  console.log(profileData);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const pathMatchRoute= (route)=>{
    if(route===location.pathname){
      return true;
    }
  }
  // const btn = document.querySelector("button.mobile-menu-button");
  // const menu = document.querySelector(".mobile-menu");
  const menu = document.getElementById("#btn");
  const handleMobileView =()=>{
    
    menu.classList.toggle("hidden")
  }

  return (
    <nav className="bg-slate-900 shadow-xl">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<Link to="/" className="flex items-center py-4 px-2">
								<img src="https://res.cloudinary.com/teepublic/image/private/s--DqPWTsIX--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-243/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-354/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1547549360/production/designs/3987359_0.jpg" alt="Logo" className="h-8 float-left mx-3 mt-0 rounded-full"/>
								<span className="font-semibold text-blue-600 text-lg">Egle-Dashbord</span>
							</Link>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
            {auth?(
              <>
				<Link to="/" className={`py-4 px-2 border-blue-500 ${pathMatchRoute('/')?'border-b-4 text-blue-600':null}`}>Home</Link>
				<Link to="/products" className={`block text-sm px-2 py-4 border-blue-500  transition duration-300 ${pathMatchRoute('/products')?'border-b-4 text-blue-600':null} `}>Products</Link>
				<Link to="/addProduct" className={`block text-sm px-2 py-4 border-blue-500 transition duration-300 ${pathMatchRoute('/addProduct')?'border-b-4 text-blue-600':null} `}>Add Product</Link>
				<Link to="/your-product" className={`block text-sm px-2 py-4 border-blue-500 transition duration-300 ${pathMatchRoute('/your-product')?'border-b-4 text-blue-600':null} `}>Your Products</Link>
				{/* <Link to="/updateProduct" className={`block text-sm px-2 py-4 border-blue-500 transition duration-300 ${pathMatchRoute('/updateProduct')?'border-b-4 text-blue-600':null} `}>Update Products</Link> */}
              </>

            ):null}
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
						{auth?(
              <>
              <Link to='/wishList'>
               <BiBookmarkHeart className="text-gray-500 hover:text-gray-50"/>
              </Link>
              <Link to="/shopingCart">
               <FaCartPlus className="text-gray-500 hover:text-gray-50 "/>
              </Link>
              <Link to="/login" onClick={handleLogOut} className=" font-medium text-gray-400 rounded hover:bg-slate-500 hover:text-white transition duration-300 btn btn-sm btn-outline btn-primary py-2 px-2">Log Out</Link>
              <Link to="/profile">
              <img src="ankit.jpg" alt="profile" className="w-10 rounded-full" />
              </Link>
              </>
            ):(
              <>
              <Link to="/login" className=" font-medium text-blue-600 rounded hover:text-white transition duration-300 btn btn-sm btn-outline outline-blue-600 hover:bg-blue-600 hover:outline-blue-600  py-2 px-2">Log In</Link>
						  <Link to="/signup" className=" font-medium text-blue-600 rounded hover:text-white transition duration-300 btn btn-sm btn-outline outline-blue-600 hover:bg-blue-600 hover:outline-blue-600  py-2 px-2">Sign Up</Link>
              </>
            )}
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" id="btn" onClick={handleMobileView}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className="hidden mobile-menu">
				<ul className="">
          {auth?(
          <>
          <li className="">
          <Link to="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link>
          </li>
          <li>
          <Link to="/products" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Products</Link>
          </li>
          <li>
          <Link to="/addProduct" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Add Product</Link>
          </li>
          <li>
          <Link to="/your-product" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Your Products</Link>
          </li>
          <li>
          <Link to="/profile" className="text-sm px-2 py-4 hover:bg-green-500 transition duration-300 flex" >
              <img src="ankit.jpg" alt="profile" className="w-10 rounded-full" /> <span className="m-1">Profile</span>
          </Link>
          </li>
          </>
          ):(
            <>
            <li className="">
          <Link to="/login" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Log In</Link>
          </li>
          <li>
          <Link to="/signup" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Sign Up</Link>
          </li>
            </>
          )}
				</ul>
			</div>
		</nav>
  );
};
export default Navbar;
