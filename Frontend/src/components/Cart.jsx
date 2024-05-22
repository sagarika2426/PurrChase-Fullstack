import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
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
      <h1 className="text-center text-xl font-bold">Your Cart</h1>
      <IconButton onClick={handleNavigate} className="!text-orange-900">
        <ArrowBackIcon />
      </IconButton>
      <div className="text-end font-bold text-lg text-green-700 px-2 mb-6">
        Total Price: ₹{calculateTotalPrice()}
      </div>
      {cart.length === 0 ? (
        <p className="text-center font-bold text-xl text-red-900">Your Cart is empty 🛒</p>
      ) : (
        <div className="w-full lg:w-3/5 ">
          {cart.map((product,index) => (
            <div key={index} className="flex shadow-xl shadow-gray-300 bg-white gap-2 m-2 border border-gray-200 rounded-md p-2">
              <img src={product.productImg} className="h-32 lg:h-44" alt={product.productName} />
              <div>
                <p className="font-semibold">{product.productName}</p>
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
        </div>
      )}
      <div className=" p-2">
        <button
        className="m-auto w-full p-2 bg-blue-800 text-white text-lg rounded-md">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
