import React, { useContext ,useEffect } from "react";
import Product from "./Product";
import {FcSearch} from 'react-icons/fc'
import {VscClearAll} from 'react-icons/vsc'
import ProductContext from "../context/ProductContext";
function Products() {
  const { data,search,setSearch ,handleOnClear ,SearchQuery , allProducts} = useContext(ProductContext);
  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-center font-semibold text-gray-500 text-lg md:text-4xl">Products are available right now</h1>
      <form className="flex ">
      <input type="text" id="email-adress-icon" onChange={e=>setSearch(e.target.value)} value={search} className="block p-2 pl-10  text-gray-100 bg-slate-800 rounded-l-lg border active:border-slate-900 focus:border-slate-900 sm:text-sm border-slate-900 placeholder:text-blue-400" placeholder="Search Product"></input>
       <button type="submit" className="text-sm bg-slate-900 rounded-r-lg px-2 py-1" onClick={SearchQuery}>
       <FcSearch className="h-6 w-6"/>
       </button>
       {
        search===""?(null):( <button onClick={handleOnClear} className="text-sm bg-slate-900 rounded-lg mx-1 px-3 py-1">
          <VscClearAll/>
        </button>)
       }
       
      </form>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between m-6">
		<span className="text-sm font-semibold text-gray-500">{data.length} Products</span>
		<button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
			<div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
				<span className="font-medium">
					Popular
				</span>
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
				</svg>
			</div>
			<select className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-slate-900 text-gray-500 shadow-lg rounded group-focus:flex">
				<option className="w-full px-4 py-2 text-left hover:bg-gray-200" >Popular</option>
				<option className="w-full px-4 py-2 text-left hover:bg-gray-200" >Featured</option>
				<option className="w-full px-4 py-2 text-left hover:bg-gray-200" >Newest</option>
				<option className="w-full px-4 py-2 text-left hover:bg-gray-200" >Lowest Price</option>
				<option className="w-full px-4 py-2 text-left hover:bg-gray-200" >Highest Price</option>
			</select>
		</button>
	</div>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => {
            return (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                company={product.company}
                catogory={product.catogory}
                id={product._id}
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
