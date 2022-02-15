import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AddProduct() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const userData = JSON.parse(auth);
  //const [userId, setUserId] = useState(userData._id);
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
      let result = await fetch(`http://localhost:5000/add-product`, {
        method: "POST",
        body: JSON.stringify({ name, price, catogory, company, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      if (result) {
        toast.success("Product added succesfully");
        navigate("/products");
      } 
    }else {
      toast.error("Enter product details");
    }
  };
  return (
    <>
      <div className="hero min-h-screen ">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl text-slate-400 font-medium">Add your product to sell</h1>
          <p className="mb-5 font-medium text-slate-500">
            Add your product to sell all over country through E-dashboard. We provide you a online website where you can buy or sell your products.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <form className="bg-slate-900 rounded-lg shadow-slate-800 p-3 text-primary">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered border-primary"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Images</span>
                </label>
                <input
                  type="file"
                  
                  className="input input-bordered border-primary w-4/5 lg:w-full"
                  
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product Price"
                    className="input input-bordered border-primary"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Compnay Name"
                  className="input input-bordered border-primary"
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered border-primary"
                  onChange={(e) => setCatogory(e.target.value)}
                  required
                  
                />
              </div>
              <div className="form-control mt-5">
                <button type="subtmit" className="btn btn-primary" onClick={handleOnSubmit}>
                  Sell product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddProduct;
