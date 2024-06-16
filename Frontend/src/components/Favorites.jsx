import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const userId = userDetails._id;
        const response = await axios.get(
          `https://purrchase-fullstack.onrender.com/products/favorites/${userId}`
        );
        setFavoriteProducts(response.data);
        console.log(setFavoriteProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  const removeFromFavorites = async (productId) => {
    try {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      const userId = userDetails._id;
      await axios.delete(
        `https://purrchase-fullstack.onrender.com/products/removeFromFav/${userId}/${productId}`
      );
      setFavoriteProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error removing product from favorites:", error);
    }
  };
  return (
    <div className="justify-between m-auto border border-gray-200 rounded-lg lg:p-10">
      <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold mb-4 text-center my-2">
        My Wishlist
      </h2>
      {favoriteProducts.length === 0 ? (
        <div className="flex flex-col m-auto lg:w-1/2 text-center justify-center">
          <p className="font-semibold my-2 text-red-700 lg:text-lg">
            Your Wishlist is Empty!
          </p>

          <img
            src="https://elegantjewelersli.com/assets/images/empty-wishlist.png"
            className="my-4"
          />
          <Link to={"/products"}>
            <p className="bg-red-700 py-2 px-2 w-1/2 rounded-md m-auto text-white font-semibold mb-4">
              Explore Products
            </p>
          </Link>
        </div>
      ) : (
        <div className="lg:w-2/3 grid grid-cols-1 gap-2 my-6 m-auto">
          {favoriteProducts.map((product, index) => (
            <div
              key={index}
              className="flex shadow-lg bg-white border border-gray-100 rounded-md p-2"
            >
              <img
                src={product.img[0]}
                className="h-28 lg:h-40 w-auto"
                alt={product.name}
              />
              <div className="flex flex-col justify-between ml-4 w-full">
                <div>
                  <p className="lg:text-lg lg:font-semibold mb-2">
                    {product.name}
                  </p>{" "}
                  <p className="text-lg font-semibold text-red-600">
                    ₹{product.price}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-green-600 w-28 py-1 my-2 rounded-md text-white font-semibold text-sm mr-2">
                    Add to Cart
                  </button>
                  <div className="flex items-center">
                    <IconButton
                      onClick={() => removeFromFavorites(product._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
