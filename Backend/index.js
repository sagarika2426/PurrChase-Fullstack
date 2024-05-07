const express = require("express");
const mongoose = require("mongoose")
const User = require("./schema/user.schema")

const app = express();
app.use(express.json())
const PORT = 3000;


//singnup
app.post("/signup", async (req, res) => {
    const {first_name, last_name, username, email, password} = req.body;
    try{
        const existingUser = await User.findOne({$or: [{email}, {username}]});
        if(existingUser){
            return res.send({error: "User with this email or username already exists"});
        }
        const newUser = new User({first_name, last_name, username, email, password});
        await newUser.save();
        res.send({ message: "User created successfully"})
    }
    catch(error){
        res.send(error.message)
    }
});


//Login
app.post("/login", async (req, res)=> {
    const {email, password} = req.body;
    let exits = false;
    let found_user = null;
    try{
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            return res.send({
                user_varified:exits,
                user_details: found_user,
                error: "Invalid email or passwrord"
            })
        }
        exits = true;
        found_user = user;
        res.send({
            user_varified:exits,
            user_details: found_user,
            message: "Login Successfully"
        })

    }catch(error){
        res.send(error.message)
    }
})



app.listen(PORT, async() => {
    await mongoose.connect("mongodb://localhost:27017/PurrChase")
    console.log(`Server is running on port ${PORT}`);
});