const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
    product:[]
    
});
const Wishlist = mongoose.model("wishlists", WishlistSchema);
Wishlist.createIndexes();
module.exports = Wishlist;