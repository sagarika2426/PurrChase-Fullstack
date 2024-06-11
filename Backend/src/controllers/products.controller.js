const Product = require("../schema/product.schema");
const User = require("../schema/user.schema");

const products_get = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
};

const product_get_by_id = async (req, res) => {
  try {
    const productId = req.params._id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.send("Product not found");
    }
    res.send(product);
  } catch (error) {
    res.send(error.message);
  }
};

const product_post = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  products_get,
  product_get_by_id,
  product_post
};
