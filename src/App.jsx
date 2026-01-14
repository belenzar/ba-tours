import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TourList from "./components/TourList";
import TourDetail from "./components/TourDetail";
import Cart from "./cart/Cart";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      const snapshot = await getDocs(collection(db, "tours"));
      const toursData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTours(toursData);
      setLoading(false);
    };

    fetchTours();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tours"
          element={<TourList tours={tours} loading={loading} />}
        />
        <Route path="/tours/:id" element={<TourDetail tours={tours} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
      </Routes>
    </Router>
  );
}
