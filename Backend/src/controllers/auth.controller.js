const User = require("../schema/user.schema");

// login post controller
const login_post = async (req, res)=> {
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
}

// signup post controller
const signup_post = async (req, res) => {
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
}

module.exports = {
    login_post,
    signup_post
};