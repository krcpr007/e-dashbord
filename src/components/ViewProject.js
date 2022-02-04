import React, { useEffect, useState  } from "react";
import { useHistory, useParams } from 'react-router-dom'
function ViewProject() {
  const imgURL ="https://images.unsplash.com/photo-1617785899222-fe06b15b6dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  const [data, setdata] = useState({});
  const { id } = useParams();
  // const id = '61d69cbca5818810a03d6f74';
  useEffect(async()=>{
     
    await fetch(`http://localhost:5000/products/${id}`)
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data); 
      setdata(data); 
    })

  },[]);
  return (
    <>
    <div className="p-5">
      <h1 className=""> </h1>
        <div className="md:flex">
          <img src={imgURL} alt="product_img" className="w-2/4 rounded-lg" />
          <div className="p-5">
            <h1 className="text-5xl font-medium">{data.name} </h1>
            <span className="font-medium text-lg">{data.price} </span>
            <span className="font-medium text-lg">{data.company} </span>
            <button className="btn btn-outline">add to cart</button>
            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
    </div>
    </>
  );
}

export default ViewProject;
