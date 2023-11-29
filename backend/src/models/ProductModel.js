const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageUrl: String,
},{
    versionKey: false
})
const Product = mongoose.model("product",productSchema)
module.exports = Product;