import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../cart/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const itemTotal = product.productPrice * (product.quantity || 1);
      return total + itemTotal;
    }, 0);
  };

  return (
    <div>
      <IconButton onClick={handleNavigate} className="!text-orange-900">
        <ArrowBackIcon />
      </IconButton>
      <h1 className="text-center text-xl font-bold lg:text-3xl">Your Cart</h1>
      
      <div className="text-end font-bold text-lg lg:text-xl text-green-700 px-2 my-6 border border-white bg-gray-100 p-2 lg:m-2 lg:p-4">
        Total Price: ₹{calculateTotalPrice()}
      </div>
      {cart.length === 0 ? (
        <div className="mb-10 m-auto lg:w-1/3">
                  <p className="text-center font-bold text-lg text-red-700">Looks like your Cart is empty 🛒 </p>
                  <p className="text-center text-md text-gray-500">{"Let's"} go and add something </p>
                  <div className="m-auto text-center mt-6">
                  <Link to={"/products"} className="px-6 py-2 rounded-lg bg-red-700 text-white font-bold hover:shadow-lg hover:bg-red-800">
                  View Products
                  </Link>
                  <img src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg" className="w-full mt-6"></img>

                  </div>


          </div>


      ) : (
        <div className="w-full lg:w-3/5 ">
          {cart.map((product,index) => (
            <div key={index} className="flex shadow-lg shadow-gray-300 bg-white gap-2 m-2 border border-gray-200 rounded-md p-2">
              <img src={product.productImg} className="h-32 lg:h-44" alt={product.productName} />
              <div>
                <p className="text-sm mb-8">{product.productName}</p>
                <p className="text-lg font-semibold text-red-600">₹{product.productPrice}</p>
              </div>
              <div className="ml-auto">
                <IconButton onClick={() => dispatch(removeFromCart(product.productId))}>
                  <DeleteIcon fontSize="large" />
                </IconButton>
                <div className="flex items-center ml-auto"> 
                <IconButton onClick={() => dispatch(decreaseQuantity(product.productId ))}>-</IconButton>
                <span className="font-semibold">{product.quantity}</span>
                <IconButton onClick={() => dispatch(increaseQuantity(product.productId ))}>+</IconButton>
              </div>
              </div>
              
            </div>
          ))}
          <div className=" p-2">
        <button
        className="m-auto w-full p-2 bg-blue-800 text-white text-lg rounded-md mt-10">Checkout</button>
      </div>
        </div>
        
      )}
      
    </div>
  );
}

export default Cart;
