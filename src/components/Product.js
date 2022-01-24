import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import {FiHeart} from 'react-icons/fi'
// import {FaHeart} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {GiPunchingBag} from 'react-icons/gi'; 
import {MdDeleteForever} from 'react-icons/md'; 
import {toast} from 'react-toastify'
function Product({name, price, company, catogory , yoursProduct, id}) {
  // const auth = localStorage.getItem("user");
  // const profileData= JSON.parse(auth)
  useEffect(()=>{
    
  })
  const imgURL ="https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"; 
  const handleDeleteProduct = async ()=>{
    console.log(id);
         await fetch(`http://localhost:5000/delete-product/${id}`, {
          method:"Delete", 
          headers:{
            'Content-Type':'application/json'
          }, 
          
        })
     toast.success("Deleted");
  }
  
    return (
      <div className="shadow rounded-lg bg-gray-600">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          {/* <Link to={`/wishList`}>
          <FiHeart className='bg-white rounded-xl absolute' color='red' size="35"/>
          </Link> */}
          {yoursProduct?null:(<Link to={`/wishList`}>
          <FiHeart className='bg-white rounded-xl absolute' color='red' size="35"/>
          </Link>)}
      <a href="/" className="group">
          <img
            src={imgURL}
            alt="product-img"
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
      </a>
        </div>
        <h3 className="m-4 text-2xl font-bold text-center text-white">{name} </h3>
        <div className="flex m-5">
        <GiPunchingBag className="mx-3 m-1" color="blue"/>
        <BsFillPeopleFill className="mx-3 m-1" color="black"/> 
        <FaStar className="mx-3 m-1" color="gold"/> 
        </div>
        <hr />
        <div className="flex">

        <p className="m-3 text-md font-medium inline-flex">{price}</p>
        {
          yoursProduct? 
        (<button onClick={handleDeleteProduct}  >
        <p className="text-blue-700 m-2 sm:ml-40 ml-16 inline-flex ">
        <MdDeleteForever title='Delete this Product' className="m-1 text-red-600 text-2xl hover:text-green-600 "  />
        </p>
        </button>):
       ( <Link to={`/shopingCart`}>
        <p className="text-blue-700 m-2 sm:ml-40 ml-16 inline-flex">
        <FaCartPlus className="m-1" size="25" color="#87CEEB"/>
        </p>
        </Link>)
        }
        </div>
    </div>
    )
}

export default Product
