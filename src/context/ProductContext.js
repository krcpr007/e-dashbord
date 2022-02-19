import { createContext, useState } from "react";
import { toast } from "react-toastify";
const ProductContext = createContext();
// require('dotenv').config()
export function ProductProvider({ children }) {
  const auth = localStorage.getItem("user");
  const userData = JSON.parse(auth);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // Here fetching all products in database
  const allProducts = () => {
    fetch(`${process.env.REACT_APP_PORT}/all-products`)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        // console.log(json);
      })
      .catch((err) => console.log(err));
  };
  // Searching for product
  const SearchQuery = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/search/${search}`) //http://localhost:5000/search
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        console.log(json);
        if (json.length === 0) {
          toast.success("No Item found");
        } else {
          toast.success(json.length + " Item found");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      });
  };
  // clear text in input where searching product
  const handleOnClear = (e) => {
    e.preventDefault();
    setSearch("");
    allProducts();
  };
  //  findig user registerd product
  const yourProduct = async () => {
    const userId = userData._id;
    let result = await fetch("http://localhost:5000/yours-products", {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      setData(result);
      console.warn(result);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        data,
        setSearch,
        handleOnClear,
        yourProduct,
        allProducts,
        SearchQuery,
        search,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
//  ProductProvider;
export default ProductContext;
