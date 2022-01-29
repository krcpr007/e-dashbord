import { createContext, useState ,useEffect } from "react";
import { toast } from "react-toastify";
const ProductContext= createContext(); 

export function ProductProvider ({ children }){
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(""); 
// Here fetching all products in database 
  const allProducts =()=>{ 
    fetch(`${process.env.REACT_APP_PORT}/all-products`)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    allProducts();
  }, []);
  // Searching for product
  const SearchQuery = async (e)=>{
    e.preventDefault();
   fetch(`${process.env.REACT_APP_PORT}/search/${search}`)
   .then((resp)=>resp.json())
   .then((json)=>{
     setData(json); 
     console.log(json); 
    //  toast.success("Item found");
   }).catch(err=>{
     console.log(err); 
     toast.error("Something wrong")
   })
  }
  // clear text in input where searching product 
  const handleOnClear =(e)=>{
   e.preventDefault();
   setSearch(""); 
   allProducts();
 }











    // Delete a product 
    // const handleDeleteProduct = async ()=>{
    //     console.log(id);
    //          await fetch(`${process.env.REACT_APP_PORT}/delete-product/${id}`, {
    //           method:"Delete", 
    //           headers:{
    //             'Content-Type':'application/json'
    //           }, 
              
    //         })
    //      toast.success("Deleted");
    //   }
return (
<ProductContext.Provider value={{ data,setSearch, handleOnClear ,SearchQuery, search}}>
 {children}
 </ProductContext.Provider>
)}
//  ProductProvider; 
export  default ProductContext ;