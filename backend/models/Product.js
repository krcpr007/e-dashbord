const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  catogory: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
    // required:true
  },
  company: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model("products", ProductSchema);
Product.createIndexes();
module.exports = Product;
