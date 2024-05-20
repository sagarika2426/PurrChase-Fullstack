const Product = require("../schema/product.schema");

const products_get = async(req, res) => {
    try{
        const products = await Product.find({});
        res.send(products);
    }catch(error){
        res.send(error.message)
    }

}

const product_get_by_id = async(req, res) => {
    try{
        const productId = req.params._id;
        const product = await Product.findById(productId);

        if(!product){
            return res.send("Product not found");
        }
        res.send(product);
    }catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    products_get,
    product_get_by_id
}