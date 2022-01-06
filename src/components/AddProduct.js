import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const userData = JSON.parse(auth);
  //   const [userId, setUserId] = useState(userData._id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [catogory, setCatogory] = useState("");
  const [company, setCompany] = useState("");
  //   setUserId(userData._id);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.warn(name, price, catogory, company, userId);
    if (price !== "" || company !== "" || catogory !== "") {
      const userId = userData._id;
      let result = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        body: JSON.stringify({ name, price, catogory, company, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      if (result) {
        navigate("/product");
      } else {
        alert("enter details first");
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-center">Add Your Product </h1>
        <div className="items-center border-2 flex p-20  md:w-full">
          <form>
            <label htmlFor="productName" className="label">
              Enter your product Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Product name"
              name="productName"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="productPrice" className="label">
              Enter your product Price
            </label>
            <input
              type="text"
              className="input"
              placeholder="Product price"
              name="productPrice"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="companyName" className="label">
              Enter your company name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Product name"
              name="compnayName"
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="productCat" className="label">
              Enter your product Catogory
            </label>
            <input
              type="text"
              className="input"
              placeholder="Product catogory"
              name="productCat"
              value={catogory}
              onChange={(e) => setCatogory(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary flex"
              onClick={handleOnSubmit}
            >
              Add Product
              {userData._id}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
