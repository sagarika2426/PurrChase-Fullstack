import { Link } from "react-router-dom"
import {TextField} from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios";
// import MyButton from "./MyButton"

function Login(){

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("")
  const[isLoggedin, setIsLoggedin] = useState(false)


  useEffect(()=> {
    const userVerified = localStorage.getItem("userVerified");
    // if(userVerified === "true"){
    //   window.location.href = "/"
    // }
    setIsLoggedin(userVerified === "true")
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://purrchase-fullstack.onrender.com/login", { email, password });
      console.log(result.data);
      const {user_varified, user_details} = result.data
      if (user_varified) {
        window.alert("Login successful");

        //store the authentication details in local storage
        localStorage.setItem("userVerified", user_varified);
        localStorage.setItem("userDetails", JSON.stringify(user_details));
        setIsLoggedin(true);

        //direct to home page
        window.location.href = "/products";
      } else {
        window.alert(result.data.error);
      }
    } catch (err) {
      console.log(err.response.data); 
      window.alert("Login failed. Please try again.");
    }
  };

  if (isLoggedin) {
    return (
      <div>
        <div className="w-full mx-auto p-6 text-center block mt-6 bg-white lg:w-1/3">
          <h1>You are logged in!</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4">Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 h-screen px-4">
      <h1 className="text-center text-xl font-bold">Login</h1>
      <div className="w-full mx-auto p-6 text-center shadow-xl shadow-gray-500 block mt-6 bg-white lg:w-1/3">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <TextField required id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField required id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Signup</Link>
      </div>
    </div>
  );
}

export default Login;