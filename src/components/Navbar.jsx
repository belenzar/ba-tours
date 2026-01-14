import logo from "../assets/logo.svg";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md transition-all duration-200
     ${
       location.pathname === path
         ? "bg-orange-700 text-white"
         : "text-white hover:bg-orange-700/80"
     }`;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="header sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm"
    >
      <div className="flex flex-col items-center justify-between max-w-6xl px-6 py-3 mx-auto md:flex-row">

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/">
            <img src={logo} alt="BA Tours Logo" className="w-20" />
          </Link>
        </motion.div>

        <nav className="mt-3 md:mt-0">
          <ul className="flex items-center gap-6 px-6 py-3 bg-orange-600 rounded-full shadow-md">
            <li>
              <Link to="/" className={linkClasses("/")}>Home</Link>
            </li>
            <li>
              <Link to="/tours" className={linkClasses("/tours")}>Tours</Link>
            </li>
          </ul>
        </nav>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-3 md:mt-0"
        >
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-800" />

            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
