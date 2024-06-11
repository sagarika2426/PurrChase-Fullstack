const User = require("../schema/user.schema");
const Product = require("../schema/product.schema");



const addToFav = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log("product",productId);

    const userId = req.params.userId;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.send("User not Found");
    }
    if (user.favorites.includes(productId)) {
      return res.send("Product already in favorites");
    }
    user.favorites.push(productId);
    await user.save();
    res.send("Product added to favorites");
  } catch (error) {
    res.send(error.message);
  }
};


const removeFromFav = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log("product",productId);

    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.send("User not found");
    }
    const index = user.favorites.indexOf(productId);
    if (index === -1) {
      return res.status(400).send("Product not in favorites");
    }
    user.favorites.splice(index, 1);
    await user.save();
    res.send("Product removed from favorites successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getFavProducts = async(req, res) => {
    try{
        const userId = req.params.userId;
        const user = await User.findById(userId).populate("favorites", "name img price");
        if(!user){
            return res.send("User not found")
        }
        const favProducts = user.favorites;
        res.send(favProducts)
    }catch(error){
        res.send(error.message)
    }
}
module.exports = { addToFav, removeFromFav, getFavProducts };
