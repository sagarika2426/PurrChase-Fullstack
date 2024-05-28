import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Signup(){

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://purrchase-fullstack.onrender.com/signup", { 
        first_name: firstName, 
        last_name: lastName, 
        username: username, 
        email: email, 
        password: password });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };  


    return(
        <div className="h-screen px-4">
        <h1 className="text-center text-xl font-bold">Signup</h1>
        <div className="w-full mx-auto p-6 text-center shadow-xl shadow-gray-400 block mt-6 bg-white lg:w-1/3 rounded-md border border-gray-300">
          <form className="flex flex-col gap-2"
          onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="First Name" varient="outlined" required
            onChange={(e) => setFirstName(e.target.value)} size="small"/>

            <TextField id="outlined-basic" label="Last Name" varient="outlined" required
            onChange={(e) => setLastName(e.target.value)} size="small"/>

            <TextField id="outlined-basic" label="Username" varient="outlined" required
            onChange={(e) => setUsername(e.target.value)} size="small"/>

            <TextField id="outlined-basic" label="Email" varient="outlined" type="email" required
            onChange={(e) => setEmail(e.target.value)} size="small"/>

            <TextField id="outlined-basic" label="Password" varient="outlined" type="password" required
            onChange={(e) => setPassword(e.target.value)} size="small"/>

            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </form>


            <h2 className="my-2">Already have an account?</h2>
            <Link to="/login"  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</Link>
           
            
          
        </div>
      </div>
    )
}

export default Signup;