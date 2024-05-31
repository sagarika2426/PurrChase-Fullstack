import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../cart/cartSlice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  const handleNavigatetoPayment = () => {
    navigate("/checkout");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const itemTotal = product.productPrice * (product.quantity || 1);
      return total + itemTotal;
    }, 0);
  };
  const totalPriceWithDeliveryFee = calculateTotalPrice() + 49;

  return (
    <div>
      <h1 className="text-center text-xl font-bold lg:text-3xl my-2">
        Your Cart
      </h1>

      <IconButton onClick={handleNavigate} className="!text-orange-900">
        <ArrowBackIcon />
      </IconButton>

      {/* <div className="text-end font-bold text-lg lg:text-xl text-green-700 px-2 my-6 border border-white bg-gray-100 p-2 lg:m-2 lg:p-4">
        Total Price: ₹{calculateTotalPrice()}
      </div> */}
      {cart.length === 0 ? (
        <div className="mb-10 m-auto lg:w-1/3">
          <p className="text-center font-bold text-lg text-red-700">
            Looks like your Cart is empty 🛒{" "}
          </p>
          <p className="text-center text-md text-gray-500">
            {"Let's"} go and add something{" "}
          </p>
          <div className="m-auto text-center mt-6">
            <Link
              to={"/products"}
              className="px-6 py-2 rounded-lg bg-red-700 text-white font-bold hover:shadow-lg hover:bg-red-800"
            >
              View Products
            </Link>
            <img
              src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg"
              className="w-full mt-6"
              alt="Empty Cart"
            ></img>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col lg:flex-row lg:px-8">
  <div className="lg:w-2/4 justify-between m-auto border border-gray-200 rounded-lg lg:p-10">
    {/* Product List */}
    {cart.map((product, index) => (
      <div
        key={index}
        className="flex shadow-lg shadow-gray-200 bg-white gap-2 m-2 border border-gray-100 rounded-md p-2 justify-between"
      >
        {/* Product Image */}
        <img
          src={product.productImg}
          className="h-32 lg:h-36"
          alt={product.productName}
        />
        {/* Product Details */}
        <div>
          <p className="text-sm mb-8">{product.productName}</p>
          <p className="text-lg font-semibold text-red-600">
            ₹{product.productPrice}
          </p>
        </div>
        {/* Quantity Controls */}
        <div className="flex flex-col justify-between items-end">
          <IconButton
            onClick={() => dispatch(removeFromCart(product.productId))}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
          <div className="flex items-center border border-gray-400 rounded-md w-25">
            <IconButton
              onClick={() => dispatch(decreaseQuantity(product.productId))}
              className="text-red-600 border"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <span className="font-semibold mx-2">{product.quantity}</span>
            <IconButton
              onClick={() => dispatch(increaseQuantity(product.productId))}
              className="text-green-600"
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="lg:w-1/3 lg:m-auto">
    {/* Apply Coupon */}
    <div className="border border-gray-200 rounded-md p-4 mt-4">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-semibold">Apply Coupon</h2>
        <img
          src="https://static-00.iconduck.com/assets.00/discount-icon-2048x2048-19ulckbx.png"
          alt="Coupon Icon"
          className="h-6 ml-2"
        />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
          Apply
        </button>
      </div>
    </div>

    {/* Price Details */}
    <div className="border border-gray-200 rounded-md p-4 mt-4">
      <h2 className="text-lg font-semibold mb-4">Price Details (1 Item)</h2>
      <div className="flex justify-between mb-2">
        <span>Total MRP</span>
        <span>{calculateTotalPrice()}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount On MRP</span>
        <span>₹86</span>
      </div>
      <div className="flex justify-between font-bold lg:text-lg border border-gray-100 bg-green-100 lg:p-1">
        <span>Total Amount</span>
        <span>{totalPriceWithDeliveryFee}</span>
        
      </div>
      <p className="text-sm text-gray-500">(Incl. of all taxes)</p>
    </div>
    <div className=" p-2 border border-gray-300 bg-red-100">
            <p className="text-center font-semibold text-lg">
              {" "}
              Total Price: ₹{totalPriceWithDeliveryFee}
            </p>
            <button className="m-auto w-full p-2 bg-blue-800 text-white text-lg rounded-md my-2" onClick={handleNavigatetoPayment}>
              Checkout
            </button>
          </div>
    
  </div>
  
</div>

        
      )}
    </div>
  );
}

export default Cart;
