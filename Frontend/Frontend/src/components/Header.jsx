import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
    const cart = useSelector((state) => state.cartReducer.items) || [];
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/cart");
    };

    return (
        <div className="bg-orange-800 h-24 mb-2 flex items-center justify-between p-2">
            <div className="text-center">
                <div>
                <img
                    src="https://us.123rf.com/450wm/zhanna26/zhanna261709/zhanna26170900035/85712562-black-silhouette-of-cat-vector-illustration.jpg?ver=6"
                    className="h-14 rounded-full"
                />

                </div>
                <div>
                <p className="text-white font-semibold text-md">PurrChase</p>

                </div>
               
            </div>
            
           
            <div className="flex items-center">
           
                <IconButton onClick={handleNavigate} className="!text-yellow-100">
                    <ShoppingBagIcon fontSize="large" />
                    <small>{cart.length}</small>
                </IconButton>
                <Link to={"/login"}
                className="text-white text-xl font-semibold mx-2">Login</Link>
            </div>
        </div>
    );
}

export default Header;
