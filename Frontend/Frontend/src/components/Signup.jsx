import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

function Signup(){
    return(
        <div className="h-screen bg-gray-200">
        <h1 className="text-center text-xl font-bold">Signup</h1>
        <div className="w-1/3 mx-auto p-6 text-center shadow-xl shadow-gray-500 block mt-6 bg-white">
          <form className="flex flex-col gap-2">
            <TextField id="outlined-basic" label="First Name" varient="outlined" required/>
            <TextField id="outlined-basic" label="Last Name" varient="outlined" required/>
            <TextField id="outlined-basic" label="Username" varient="outlined" required/>
            <TextField id="outlined-basic" label="Email" varient="outlined" type="email" required/>
            <TextField id="outlined-basic" label="Password" varient="outlined" type="password" required/>

            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
           


            <h2 className="my-2">Already have an account?</h2>
            <Link to="/login"  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</Link>
            </form>
            
          
        </div>
      </div>
    )
}

export default Signup;