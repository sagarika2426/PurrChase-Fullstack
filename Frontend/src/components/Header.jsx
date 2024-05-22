import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
    const cart = useSelector((state) => state.cartReducer.items) || [];
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/cart");
    };
    const handleNavigateLogin = () => {
        navigate("/login");
    };

    return (
        <div className="bg-orange-800 h-24 flex items-center justify-between p-2 lg:h-32">
            {/* Logo */}
            <Link to={"/"}>
            <div className="text-center">
                <div>
                <img
                    src="https://us.123rf.com/450wm/zhanna26/zhanna261709/zhanna26170900035/85712562-black-silhouette-of-cat-vector-illustration.jpg?ver=6"
                    className="h-14 rounded-full lg:h-20"
                />

                </div>
                <div>
                <p className="text-white font-semibold text-md">PurrChase</p>

                </div>
               
            </div>
            </Link>
            
            
           
            <div className="flex items-center">
           
                <IconButton onClick={handleNavigate} className="!text-white">
                    <ShoppingBagIcon fontSize="large" />
                    <small>{cart.length}</small>
                </IconButton>
                <IconButton onClick={handleNavigateLogin} className="!text-white">
                    <AccountCircleIcon fontSize="large"/>
                </IconButton>
            
            </div>
        </div>
    );
}

export default Header;
