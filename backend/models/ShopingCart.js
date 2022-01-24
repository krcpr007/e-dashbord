const mongoose = require('mongoose'); 
const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
    product:[]
})
const cart = mongoose.model('cart',CartSchema); 
cart.createIndexes(); 
module.exports = cart ; 