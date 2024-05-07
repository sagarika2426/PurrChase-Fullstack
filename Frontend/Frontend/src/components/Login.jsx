import { Link } from "react-router-dom"
import {TextField} from "@mui/material"

function Login(){
    return(
        <div className="bg-gray-200  h-screen">
        <h1 className="text-center text-xl font-bold">Login</h1>
        <div className="w-1/3 mx-auto p-6 text-center shadow-xl shadow-gray-500 block mt-6 bg-white">
          <form className="flex flex-col gap-2">

            <TextField required id="outlined-basic" label="Email" varient="outlined"/>
            <TextField required id="outlined-basic" label="Password" varient="outlined" type="password"/>
        
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <h2 className="my-2">Dont have an account?</h2>
            <Link to="/signup"  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</Link>
      
            
          </form>
        </div>
      </div>
    )
}
export default Login