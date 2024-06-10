import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const HomeNew = function () {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://purrchase-fullstack.onrender.com/products"
      );
      const data = res.data;

      // Sort the products based on ratings in descending order
      const sortedProducts = data.sort((a, b) => b.ratings - a.ratings);

      // Select the top 5 highest rated products
      const featuredProducts = sortedProducts.slice(0, 6);

      // Update the state with the featured products
      setFeaturedProducts(featuredProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Top Section */}
      <section className="bg-orange-100 py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-6">
              Welcome to Our Pet Store!
            </h1>
            <p className="text-md md:text-xl">
              Find everything your cat needs from food to toys.
            </p>
            <Link
              to={"/products"}
              className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white rounded-full transition duration-300 hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 px-6 w-2/3">
            <img
              src="https://www.smartpetkw.com/wp-content/uploads/2022/02/SHOP_BY_CAT-STORE-1024x1024.png.webp"
              alt="Shop by Cat"
              className="mx-auto md:mx-0 rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category 1 */}
            <div className="flex flex-col items-center px-8">
              <Link to="/products/category/Food" className="block mb-4">
                <img
                  src="https://mypetz.co.in/wp-content/uploads/2023/04/3.jpg"
                  alt="Food"
                  className="w-56 lg:w-64 mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4"
                />
              </Link>
              <h3 className="font-semibold text-lg mb-2">Food</h3>
              <p className="text-md text-center text-red-700">
                Nutritious and delicious meals for your feline friend.
              </p>
            </div>
            {/* Category 2 */}
            <div className="flex flex-col items-center px-8">
              <Link
                to="/products/category/Liter%20Supplies"
                className="block mb-4"
              >
                <img
                  src="https://mypetz.co.in/wp-content/uploads/2023/04/8.jpg"
                  alt="Litter Supplies"
                  className="w-56 lg:w-64 mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4"
                />
              </Link>
              <h3 className="font-semibold text-lg mb-2">Hygine</h3>
              <p className="text-md text-center text-red-700">
                Essentials for keeping your {"cat's"} litter box clean and
                fresh.
              </p>
            </div>
            {/* Category 3 */}
            <div className="flex flex-col items-center px-8">
              <Link to="/products/category/Toys" className="block mb-4">
                <img
                  src="https://mypetz.co.in/wp-content/uploads/2023/04/11.jpg"
                  alt="Toys"
                  className="w-56 lg:w-64 mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4"
                />
              </Link>
              <h3 className="font-semibold text-lg mb-2">Toys and Play</h3>
              <p className="text-md text-center text-red-700">
                Keep your cat entertained and happy with our selection of toys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="lg:py-8 bg-gray-50">
        <div className="px-4 lg:px-6 m-auto">
          <h2 className="font-bold text-2xl mb-4 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
            {featuredProducts.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-xl shadow-md shadow-slate-400 bg-white flex flex-col h-auto lg:h-auto transform transition-transform hover:scale-105"
              >
                <img
                  src={product.img[0]}
                  alt={product.name}
                  className="w-auto"
                />
                <div className="pt-2 h-40">
                  <div>
                    <h3 className="lg:font-semibold lg:text-lg mb-2 text-sm">
                      {product.name}
                    </h3>
                    <h3 className="text-red-700 font-semibold">₹{product?.price}</h3>
                    <IconButton style={{ color: "black", fontSize: 16 }}>
                      <StarIcon fontSize="small" />
                      {product?.ratings}
                    </IconButton>
                  </div>
                </div>
                <div className="p-2 text-sm lg:text-md">
                  <Link
                    to={`/products/${product._id}`}
                    className="block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offering 1 */}
            <div className="rounded-lg shadow-lg bg-white">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2020_32/3402673/cat-food-kr-2x1-tease-200806.jpg"
                alt="Cat Food"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Nutritious Cat Food
                </h3>
                <p className="text-sm">
                  Choose from a variety of healthy cat food options tailored to
                  your {"pet's"} needs.
                </p>
              </div>
            </div>
            {/* Offering 2 */}
            <div className="rounded-lg shadow-lg bg-white">
              <img
                src="https://images.summitmedia-digital.com/sap/images/2019/12/02/spot-purina-shutter-1159415002-mainimage-1-1575278367.jpg"
                alt="Cat Supplies"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Cat Supplies</h3>
                <p className="text-sm">
                  Discover a wide range of cat products including toys, grooming
                  items, treats, and more.
                </p>
              </div>
            </div>
            {/* Offering 3 */}
            <div className="rounded-lg shadow-lg bg-white">
              <img
                src="https://www.marthastewart.com/thmb/olgJmSzOD4Jgfa07bLZV741U2FU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-playing-getty-845697720-3ca118e58ba0443995c897c4de64ae5e.jpg"
                alt="Playtime"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Fun Playtime</h3>
                <p className="text-sm">
                  Keep your cat entertained with our selection of fun and
                  interactive toys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNew;
