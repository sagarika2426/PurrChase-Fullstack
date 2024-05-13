import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProductView() {
  const { _id } = useParams();
  console.log(_id);

  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const fetchProduct = async (_id) => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${_id}`);
      console.log(res.data);
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

  console.log(product);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.img.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.img.length - 1 ? 0 : prevIndex + 1));
  };

  const navigate = useNavigate();
  const handleNavigate =() => {
    navigate("/products")

  }

  return (
    <div>
        
      <IconButton onClick={handleNavigate}
      className="!text-orange-900"><ArrowBackIcon/></IconButton>
      <div className="border p-2">
        <div className="border grid grid-cols-7 items-center justify-items-center border-b-gray-400 mb-4">
          <div>
            <IconButton  onClick={handleLeftClick}>
              <ArrowLeftIcon />
            </IconButton>
          </div>
          <div className="col-span-5">
            <img src={product?.img?.[currentImageIndex]} className="h-80 object-contain" />
          </div>

          <div>
            <IconButton onClick={handleRightClick}>
              <ArrowRightIcon />
            </IconButton>{" "}
          </div>
        </div>
        <h1 className="font-bold text-lg">{product?.name}</h1>
        <p className="border border-orange-600 w-fit px-2 py-1 bg-slate-100 font-semibold rounded-md">
          {product?.category}
        </p>
        <div className="border border-y-gray-500 my-4 flex flex-wrap py-2">
          <h1 className=" text-2xl text-red-700 font-semibold">
            ₹{product?.price}
          </h1>
          <p className="mx-6">(*incl. of all taxes)</p>
        </div>
        <button className="bg-green-700 py-2 text-white rounded-md px-6">Add to Cart</button>

      </div>
    </div>
  );
}

export default ProductView;
