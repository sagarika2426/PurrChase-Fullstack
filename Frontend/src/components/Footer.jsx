import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';


const Footer = function() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto p-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p className="text-sm">Purrchase: Your go-to destination for cat toys, treats, and accessories. Pamper your furry friends today!</p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Informations</h4>
                        <ul className="text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>


                            <li><Link to="/about" className="hover:text-white">About</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaPinterest /></li>
                        </ul>
                    </div>        
                </div>
            </div>
            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm">&copy; 2024 PurrChase. All rights reserved.</p>
                <p className="text-lg font-bold mt-4">Made with 💗 by Sagarika Sahoo</p>

            </div>
        </footer>
    );
}

export default Footer;
