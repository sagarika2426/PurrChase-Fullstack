import IconButton from '@mui/material/IconButton';
import axios from 'axios';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AddtoFav = ({productId}) => {
    const handleAddtToFav = async () => {
        try{
            const userDetails = JSON.parse(localStorage.getItem("userDetails"));
            if (!userDetails || !userDetails._id) {
                alert('User ID not found in local storage. Please log in again.');
                return;
              }

              const userId = userDetails._id;

              await axios.post(`https://purrchase-fullstack.onrender.com/products/addToFav/${userId}/${productId}`);
              alert("Product added to Wishlist")
        }catch(error) {
            console.log(error)
        }
    }

    return (
        <IconButton onClick={handleAddtToFav}>
          <FavoriteBorderIcon />
        </IconButton>
      );
};

export default AddtoFav;