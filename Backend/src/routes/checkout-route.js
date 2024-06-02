
const express = require('express');
const CheckoutRouter = express.Router();
const { checkout_address_post} = require('../controllers/address.controller');

CheckoutRouter.post('/', checkout_address_post);

module.exports = CheckoutRouter;