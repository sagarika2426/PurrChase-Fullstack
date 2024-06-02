const User = require("../schema/user.schema");
const Address = require("../schema/addressForm.schema");

const checkout_address_post = async(req, res) => {
    const {userId, addressData} = req.body;
    try{
        const user = await User.findById(userId);
        console.log({user, userId, addressData})
        if(user){
            console.log("hello", Address)
            // create a new instance of the Address model/schema using the addressData received from the request body
            const newAddress = new Address(addressData);
            console.log({newAddress});


            // We use the save() method to save the newly created address document (newAddress) to the MongoDB database
            const savedAddress = await newAddress.save();
            console.log(savedAddress)


            // obtain the _id of the saved address document (savedAddress._id)
            // update the shipping_address field of the user document (user) with this _id.
            // By doing this, we establish a reference relationship between the user document and the address document.
            user.shipping_address = savedAddress._id;
            await user.save()
            console.log({user})
            res.status(200).json(savedAddress);

        }
        else{
            return res.status(404).json({ error: "User not found" });


        }

    }catch(error){
        res.send(error)
    }
}

module.exports = {
    checkout_address_post
}