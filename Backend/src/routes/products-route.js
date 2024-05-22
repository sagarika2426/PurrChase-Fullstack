const express = require("express");
const {products_get, product_get_by_id, product_post} = require("../controllers/products.controller");

const ProductRoute = express.Router();

ProductRoute.get("/", products_get);
ProductRoute.get("/:_id", product_get_by_id);
ProductRoute.post("/", product_post); 

module.exports = ProductRoute;