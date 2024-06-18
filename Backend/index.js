const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const SignupRoute = require("./src/routes/signup-route");
const LoginRoute = require("./src/routes/login-route");
const ProductRoute = require("./src/routes/products-route");
const CheckoutRouter = require("./src/routes/checkout-route");
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(express.json())
app.use(cors())
const PORT = 8000


const mongooseLink = process.env.MONGOOSE_LINK
console.log(mongooseLink)

//singnup
app.use("/signup", SignupRoute)

//Login
app.use("/login", LoginRoute)

//All products
app.use("/products", ProductRoute)

app.use("/save_address", CheckoutRouter);






app.listen(PORT, async() => {
    await mongoose.connect(mongooseLink, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`Server is running on port ${PORT}`);
});