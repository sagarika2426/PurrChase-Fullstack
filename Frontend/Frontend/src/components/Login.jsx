import { Link } from "react-router-dom"
import {TextField} from "@mui/material"
import { useState } from "react"
import axios from "axios";
// import MyButton from "./MyButton"

function Login(){

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/login", { email, password });
      console.log(result.data); // Handle success response
      if (result.data.user_varified) {
        window.alert("Login successful");
      } else {
        window.alert(result.data.error);
      }
    } catch (err) {
      console.log(err.response.data); // Handle error response
      window.alert("Login failed. Please try again.");
    }
  };

    return(
        <div className="bg-gray-200  h-screen px-4">
        <h1 className="text-center text-xl font-bold">Login</h1>
        <div className="w-full mx-auto p-6 text-center shadow-xl shadow-gray-500 block mt-6 bg-white lg:w-1/3">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

            <TextField required id="outlined-basic" label="Email" varient="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField required id="outlined-basic" label="Password" varient="outlined" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </form>

            {/* <MyButton bgcolor={"green"} fontcolor={"white"}>Login</MyButton> */}
            <h2 className="my-2">Dont have an account?</h2>
            <Link to="/signup"  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</Link>
      
            
          
        </div>
      </div>
    )
}

export default Login;