import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductView() {
  const { _id } = useParams();
  // console.log(_id);

  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const fetchProduct = async (_id) => {
    try {
      const res = await axios.get(`https://purrchase-fullstack.onrender.com/products/${_id}`);
      // console.log(res.data);
      setProduct(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    // const id = "123"
    // console.log(id);
    // console.log(_id);

    fetchProduct(_id);
  }, [_id]);

  // console.log(product);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.img.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };

 

  const handleAddToCart = (product) => {
    const userVerified = localStorage.getItem("userVerified");
    if (userVerified !== "true") {
      // If user is not verified, show alert and redirect to login page
      window.alert("Please login first to add items to the cart.");
      window.location.href = "/login";
      return;
    }

    // If user is verified, dispatch addToCart action and add item to local storage
    dispatch(addToCart(product));
    let existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (!Array.isArray(existingItems)) {
      existingItems = [];
    }
    localStorage.setItem("cart", JSON.stringify([...existingItems, product]));
    window.alert("Product added to the cart");
  };

  return (
    <>
      <div>
        <IconButton onClick={handleNavigate} className="!text-orange-900">
          <ArrowBackIcon />
        </IconButton>
        <div className="border p-2 lg:flex lg:m-auto">
          {/* img div */}
          <div className="border grid grid-cols-7 items-center justify-items-center border-b-gray-400 mb-4 lg:w-[600px]">
            <div>
              <IconButton onClick={handleLeftClick}>
                <ArrowLeftIcon />
              </IconButton>
            </div>
            <div className="col-span-5">
              <img
                src={product?.img?.[currentImageIndex]}
                className="h-80 object-contain lg:h-96"
              />
            </div>

            <div>
              <IconButton onClick={handleRightClick}>
                <ArrowRightIcon />
              </IconButton>
            </div>

            <IconButton>
              <FavoriteBorderIcon/>
            </IconButton>
          </div>

          {/* info div */}
          <div className="lg:px-6">
            <h1 className="font-bold text-lg">{product?.name}</h1>
            <IconButton style={{ color: "black", fontSize: 18 }}>
              <StarIcon />
              {product?.ratings}
            </IconButton>
            <p className="border border-orange-600 w-fit px-2 py-1 bg-slate-100 font-semibold rounded-md">
              {product?.category}
            </p>
            <IconButton>
              
            </IconButton>
            <div className="border border-y-gray-500 my-4 flex flex-wrap py-2 lg:border-white px-1">
              <h1 className=" text-2xl text-red-700 font-semibold">
                ₹{product?.price}
              </h1>
              <p className="mx-6">(*incl. of all taxes)</p>
            </div>
            <IconButton style={{ fontSize: 20, gap: 6 }}>
              <LocalShippingOutlinedIcon fontSize="large" />
              {"Free Delivery"}
            </IconButton>
            <div>
              <h3></h3>
            </div>

            <button
              className="bg-green-700 py-2 text-white rounded-md px-6 lg:mt-36"
              onClick={() =>
                handleAddToCart({
                  productName: product.name,
                  productImg: product.img[currentImageIndex],
                  productPrice: product.price,
                  productId: product._id,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* // desctription */}
      <div></div>
    </>
  );
}

export default ProductView;
