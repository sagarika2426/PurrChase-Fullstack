const express = require("express");
const { signup_post } = require("../controllers/auth.controller");

const SignupRoute = express.Router();

SignupRoute.post("/", signup_post);

module.exports = SignupRoute;