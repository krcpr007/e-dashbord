import React, { useState } from "react";

function AddProduct() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [catogory, setCatogory] = useState("");
  const [company, setCompany] = useState("");
  const auth = localStorage.getItem("user");
  //   const userData = auth.JSON.stringify();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.warn(name,price, catogory,company);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, company, catogory, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-center">Add Your Product </h1>
        <div className="items-center border-2 flex p-20 w-1/2">
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
              {/* {userData._id} */}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
