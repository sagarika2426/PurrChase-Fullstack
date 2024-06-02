const User = require("../schema/user.schema");
const Cart = require("../schema/cartItem.schema")

const addToCart = async(req, res) => {
    const {productId} = req.body;
    const userId = req.user.id;
    try{
        const user = await User.findById(userId);
        if(!user){
            return res.send("User not found");
        }

        user.cart.push(productId);
        await user.save();
        res.send("Product Added to cart")
    }catch(error){
        res.send(error.message)
    }
}

const getCartItems = async(req, res) => {
    try{
        const cartItems = await Cart.find({userId: req.user._id});
        res.send(cartItems);
    }catch(error){
        res.send(error.message)
    }
}


module.exports = {
    addToCart,
    getCartItems
};