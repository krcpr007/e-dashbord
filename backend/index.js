const express = require("express");
const app = express();
require("./db/config");
const User = require("./models/User");
const Product = require("./models/Product");
const cors = require("cors");
const { response } = require("express");

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

  resp.send("App is Working");

});
//Api for register
app.post("/signup", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(req.body);
  console.log(result);
});
//Api for login
app.post("/login", async (req, resp) => {
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
});
// api for add product
app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});


// app.get('/your-products' ,async (req, res) => {
//   try {
//       const product = await Product.find({ users: req.user._id });
//       res.json(product)
//   } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//   }
// })
app.get('/all-products',async(req,resp)=>{
   let product = await Product.find({});
   if(product){
     resp.send(product)
   }else{
     resp.send({result:"Doesn't Have data"})
   }
})

app.post('/yours-products',async(req,resp)=>{

  let product = await Product.find(req.body);
  if(product){
    resp.send(product)
  }else{
    resp.send({result:"Doesn't Have data"})
  }
})

app.get("/update-product",async(req,resp)=>{

})
app.listen(5000);