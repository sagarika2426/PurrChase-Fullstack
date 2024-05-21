import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Products from "./components/Products";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {
  return (
    <>
    <Routes>
    <Route 
          path ="/"
          element = {<Home/>}
        ></Route>
        <Route 
          path ="/signup"
          element = {<Signup/>}
        ></Route>
         <Route 
          path ="/login"
          element = {<Login/>}
        ></Route>
         <Route 
          path ="/products"
          element = {<Products/>}
        ></Route>
         <Route 
          path ="/products/:_id"
          element = {<ProductView/>}
        ></Route>
          <Route path="/cart" element={<Cart/>} />
    </Routes>



  </>
  
  )
}

export default App
