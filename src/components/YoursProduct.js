import React, { useEffect , useContext } from "react";
import Product from "./Product";
import ProductContext from "../context/ProductContext";
function YoursProduct() {
  const { data , yourProduct} = useContext(ProductContext);
    useEffect(() => {
        yourProduct();
    }, []);
    return (
        <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.length!==0?data.map((product) => {
            return (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                catogory={product.catogory}
                company={product.company}
                yoursProduct={true}
                fetchproduct={yourProduct}
                id={product._id}
              />
            );
          }):(<h1 className="text-indigo-700 text-2xl">Don't have your products</h1>)}
          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
    )
}

export default YoursProduct;
