import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import SortIcon from "@mui/icons-material/Sort";
function Products() {
  const [products, setProducts] = useState([]);

  // for search
  const [searchQuery, setSearchQuery] = useState("");

  // for showing filtered data
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    let existingItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (!Array.isArray(existingItems)) {
      existingItems = [];
    }
    localStorage.setItem("cart", JSON.stringify([...existingItems, product]));
    window.alert("Product added to the cart");
  };

  // handle search input change
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    filterProducts(value);
  };

  const filterProducts = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Products</h1> */}
      <div className="gap-2 grid grid-cols-4 mx-2 my-4">
        <div className="col-span-4 lg:col-span-1">
        <TextField fullWidth
          id="outlined-basic"
          label="Search Product"
          variant="outlined"
          size="medium"
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        </div>
     
        {/* <div className="col-span-3">
          <IconButton style={{ fontSize: 22 }}>
            <SortIcon fontSize="small" />
            {"Sort"}
          </IconButton>
        </div> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-center px-2 lg:gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-xl shadow-md shadow-slate-400 bg-white flex flex-col h-[380px]"
          >
            <Link key={product._id} to={`/products/${product._id}`}>
              <div>
                <img
                  src={product.img[0]}
                  alt={product.name}
                  className="object-contain h-42 mx-auto lg:h-40"
                />
                <h2 className="text-md font-semibold">{product.name}</h2>
              </div>
            </Link>

            <div className="mt-auto">
              <IconButton style={{ color: "black", fontSize: 16 }}>
                <StarIcon fontSize="small" />
                {product?.ratings}
              </IconButton>
              <h3 className="text-red-600 text-xl my-1 font-medium tracking-wide">
                ₹{product.price}
              </h3>
              <button
                className="bg-green-700 py-2 text-white rounded-md px-4"
                onClick={() =>
                  handleAddToCart({
                    productName: product.name,
                    productImg: product.img[0],
                    productPrice: product.price,
                    productId: product._id,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
