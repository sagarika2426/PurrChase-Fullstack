const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    price: { type: Number, required: true },
    category: { type: String, required: true },
    ratings: { type: String, required: true },
    description: [{ type: String, required: true }]
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;