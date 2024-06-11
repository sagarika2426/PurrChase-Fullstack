const express = require("express");
const {products_get, product_get_by_id, product_post} = require("../controllers/products.controller");
const {addToFav, removeFromFav, getFavProducts} = require("../controllers/favotites.controller");

const ProductRoute = express.Router();

ProductRoute.get("/", products_get);
ProductRoute.get("/:_id", product_get_by_id);
ProductRoute.post("/", product_post);
ProductRoute.post("/addtoFav/:userId/:productId", addToFav); 
ProductRoute.delete('/removeFromFav/:userId/:productId', removeFromFav);
ProductRoute.get("/favorites/:userId", getFavProducts);




module.exports = ProductRoute;