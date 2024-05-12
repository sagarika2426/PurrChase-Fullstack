const express = require("express")

const { login_post } = require("../controllers/auth.controller");
const LoginRoute = express.Router()

LoginRoute.post("/", login_post)

module.exports = LoginRoute;