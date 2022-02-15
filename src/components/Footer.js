import React from 'react'
import {FaTwitter} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {BsYoutube} from 'react-icons/bs';
import {Link} from "react-router-dom";
function Footer() {
  const date = new Date(); 
  const year = date.getFullYear();
    return (
      <footer className="p-10 footer bg-slate-800 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to='/' >
            <FaTwitter className='text-xl text-gray-400 hover:text-slate-900' />
          </Link> 
          <Link to='/' >
            <AiFillFacebook className='text-xl text-gray-400 hover:text-slate-900'/>
          </Link> 
          <Link to='/' >
            <BsYoutube className='text-xl text-gray-400 hover:text-slate-600 shadow-2xl'/>
          </Link> 
        </div>
      </div> 
      <div>
        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
    
    )
}

export default Footer
