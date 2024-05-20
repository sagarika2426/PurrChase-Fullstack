const express = require("express");
const {products_get, product_get_by_id} = require("../controllers/products.controller");

const ProductRoute = express.Router();

ProductRoute.get("/", products_get);
ProductRoute.get("/:_id", product_get_by_id);

module.exports = ProductRoute;