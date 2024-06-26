import { Link, useNavigate } from "react-router-dom"
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

  const handleLogout = () => {
    localStorage.removeItem("userVerified");
    localStorage.removeItem("userDetails");
    setIsLoggedin(false);

  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };
  if (isLoggedin) {
    return (
      <div className="flex items-center justify-center h-screen m-auto">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full flex flex-col justify-center m-auto">
        <h1 className="text-2xl font-bold mb-4">You are logged in!</h1>
        <p className="text-gray-700 mb-6">Welcome back! Enjoy your time on our platform.</p>
        <div className="flex flex-col">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
          <button
            onClick={handleNavigate}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search Products
          </button>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="h-screen px-4">
      <h1 className="text-center text-xl font-bold">Login</h1>
      <div className="w-full mx-auto p-6 text-center shadow-xl shadow-gray-400 block mt-6 bg-white lg:w-1/3 rounded-md border border-gray-300">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <TextField required id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} size="small" />
          <TextField required id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} size="small"/>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
        < p className="m-3">{"Don't "}have an account?</p>
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Signup</Link>
      </div>
    </div>
  );
}

export default Login;