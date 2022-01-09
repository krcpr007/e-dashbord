import React, { useEffect, useState } from "react";
import Product from "./Product";
// import { useEffect } from 'react'

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => {
            return (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                catogory={product.catogory}
                company={product.company}
                catogory={product.catogory}
              />
            );
          })}
          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
}

export default Products;
