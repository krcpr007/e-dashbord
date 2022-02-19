// import storage from "./cloudinary/index.js";
// const multer  = require('multer');
// const upload = multer({ storage })
// const { response } = require("express");
// const { replaceOne } = require("./models/User");
const express = require("express");
const app = express();
require("./db/config");
const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/ShopingCart");
const Wishlist = require("./models/Wishlist");
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});
//Api for register
app.post("/signup", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});
//Api for login
app.post("/login", async (req, resp) => {
  try {
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No user found" });
      }
    } else {
      resp.send({ result: "No user found" });
    }
  } catch (error) {
    console.log(error);
    resp.send({ result: "No user found" });
  }
});
// api for add product
app.post("/add-product", async (req, resp) => {
  try {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
    resp.send("Error");
  }
  // console.log(result, req.files);
});
// all products available on database
app.get("/all-products", async (req, resp) => {
  try {
    let product = await Product.find({});
    if (product) {
      resp.send(product);
    } else {
      resp.send({ result: "Doesn't Have data" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Searching api for products
app.get("/search/:key", async (req, resp) => {
  try {
    let product = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { price: { $regex: req.params.key } },
        { catogory: { $regex: req.params.key } },
        { company: { $regex: req.params.key } },
      ],
    });
    if (product) {
      resp.send(product);
    }
  } catch (error) {
    console.log(error);
  }
});

// your own products
app.post("/yours-products", async (req, resp) => {
  try {
    let product = await Product.find(req.body);
    if (product) {
      resp.send(product);
    } else {
      resp.send({ result: "Doesn't Have data" });
    }
  } catch (error) {
    console.log(error);
  }
});
// delete a product via thier owner
app.delete("/delete-product/:id", async (req, resp) => {
  try {
    let product = await Product.findById({ _id: req.params.id });
    if (!product) return resp.send(404).send("Not Found");
    product = await Product.findByIdAndDelete(req.params.id);
    resp.json({ msg: "Deleted", product: product });
  } catch (error) {
    console.log(error);
    resp.send("Something Went Wrong");
  }
});
//  Getting a single product
app.get("/products/:id", async (req, resp) => {
  try {
    let product = await Product.findById({ _id: req.params.id });
    resp.send(product);
  } catch (error) {
    console.log(error);
    resp.send({ result: "not found" });
  }
  // if(product){
  // }else if(!product){
  //   resp.status(404);
  //   resp.send({result:"Not found"});
  // }
});

app.put("/update-product/:id", async (req, resp) => {
  try {
    let product = await Product.updateOne(
      {
        _id: req.params.id,
      },
      { $set: req.body }
    );
    resp.send({ updated: true, product: product });
  } catch (error) {
    console.log(error);
  }
});
app.post("/wishlists", async (req, resp) => {
  let wishlist = new Wishlist(req.body);
  let result = await wishlist.save();
  result = result.toObject();
  if (result) {
    resp.send(result);
  }
});
app.get("/get-wishlist", async (req, resp) => {
  try {
    let wishlist = await Wishlist.find(req.body);
    if (wishlist) {
      resp.send(wishlist);
    } else {
      resp.send({ error: "No Data found" });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/add-to-cart/:id", async (req, resp) => {
  let product = new Cart(req.body);
  let result = await product.save();
  result = result.toObject();
  if (result) {
    resp.send(result);
  }
});
app.post("/get-cart", async (req, resp) => {
  let cartItem = await Cart.find(req.body);
  if (cartItem) {
    resp.send(cartItem);
  } else {
    resp.send({ error: "No Data found" });
  }
});
app.listen(5000);
