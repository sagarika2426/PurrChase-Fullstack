const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const SignupRoute = require("./src/routes/signup-route");
const LoginRoute = require("./src/routes/login-route");
const ProductRoute = require("./src/routes/products-route");

const app = express();
app.use(express.json())
app.use(cors())
const PORT = 3000;


//singnup
app.use("/signup", SignupRoute)

//Login
app.use("/login", LoginRoute)

//All products
app.use("/products", ProductRoute)





app.listen(PORT, async() => {
    await mongoose.connect("mongodb+srv://sagarikasahoo16:rSATLBFShY4ulnvN@sagarikacluster.fdrdjdy.mongodb.net/PurrChase?retryWrites=true&w=majority&appName=SagarikaCluster")
    console.log(`Server is running on port ${PORT}`);
});