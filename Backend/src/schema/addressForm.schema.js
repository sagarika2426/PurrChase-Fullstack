const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address : {type: String, required: true},
    city: {type: String, required: true},
    state : {type: String, required: true},
    pincode: {type: String, required: true}
})

const Address = mongoose.model("address", addressSchema)
module.exports = Address;