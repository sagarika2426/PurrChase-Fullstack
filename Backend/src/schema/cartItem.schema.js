import mongoose from "mongoose";

const cartItem = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true
    },
    quantity: {type: Number, default:1}
});

const Cart = mongoose.model("Cart", cartItem)

module.exports = Cart;