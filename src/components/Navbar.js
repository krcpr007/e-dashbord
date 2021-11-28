import React from "react";
import { Link } from "react-router-dom";
const Navbar= ()=> {
 
     return (
         <div>
             <ul className="nav-ul">
                 <li><Link to="/" >Product</Link></li>
                 <li><Link to="/" >Add Product</Link></li>
                 <li><Link to="/" >Home</Link></li>
                 <li><Link to="/" >Home</Link></li>
                 <li><Link to="/" >Home</Link></li>
                 <li><Link to="/" >Home</Link></li>
             </ul>
         </div>
     )
}
export default Navbar; 