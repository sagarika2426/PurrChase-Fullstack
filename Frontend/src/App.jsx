import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Products from "./components/Products";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import Home from "./components/Home";
// import Favorites from "./components/Favorites";
// import Checkout from "./components/Checkout";
// import AddressForm from "./components/AddressForm";
import ParentComponent from "./components/ParentComponent";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
     
      <Route path="/products/:_id" element={<ProductView />} />
      <Route path="/products/category/:category" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/favorites" element={<Favorites/>}></Route> */}
      <Route path="/checkout" element={<ParentComponent/>}></Route>


    </Routes>



  </>
  
  )
}

export default App
