const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name:  {type: String, required: true},
    username:  {type: String, required: true},
    email:  {type: String, required: true},
    password:  {type: String, required: true},
    cart: [{type: mongoose.Schema.Types.ObjectId, 
        ref: "Product"}],
    shipping_address: [{type: mongoose.Schema.Types.ObjectId, ref: "Address"}]

});

const User = mongoose.model("signup-user", UserSchema);

module.exports = User;