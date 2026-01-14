import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TourDetailSkeleton() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 animate-pulse">
      <div
        className="
          bg-white rounded-2xl shadow-lg overflow-hidden
          grid grid-cols-1 md:grid-cols-2
        "
      >
        <div className="h-64 md:h-full w-full bg-orange-300" />

        <div className="p-6 flex flex-col">
          <div className="h-8 w-3/4 bg-orange-300 rounded mb-4" />

          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-orange-200 rounded" />
            <div className="h-4 w-full bg-orange-200 rounded" />
            <div className="h-4 w-5/6 bg-orange-200 rounded" />
          </div>

          <div className="mt-auto">
            <div className="h-6 w-32 bg-orange-300 rounded mb-4" />

            <div className="flex gap-4">
              <div className="h-10 w-24 bg-orange-200 rounded-lg" />
              <div className="h-10 w-32 bg-orange-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TourDetail({ tours }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { id } = useParams();

  const handleAdd = () => {
    addToCart({
      id: tour.id,
      title: tour.name,
      price: tour.price,
      image: tour.img,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return <TourDetailSkeleton />;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
              <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }}
  whileHover={{ y: -5, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
      <div
        className="
          bg-white rounded-2xl shadow-lg overflow-hidden
          grid grid-cols-1 md:grid-cols-2
        "
      >

        <div className="h-64 md:h-full w-full">
          <img
            src={tour.img}
            alt={tour.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x600?text=Tour+BA";
            }}
          />
        </div>

        <div className="p-6 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {tour.description}
          </p>

          <div className="mt-auto">
            <p className="text-2xl font-bold text-orange-600 mb-4">
              ${tour.price.toLocaleString("es-AR")}
            </p>

            <div className="flex gap-4">
              <Link
                to="/tours"
                className="
                  px-4 py-2 rounded-lg border border-gray-300
                  hover:bg-gray-100 transition
                "
              >
                Volver
              </Link>

              <button
                onClick={handleAdd}
                disabled={added}
                className={`mt-auto py-2 rounded transition
    ${
      added
        ? "bg-green-600 text-white p-2"
        : "bg-orange-600 text-white hover:bg-orange-700 p-2"
    }
  `}
              >
                {added ? "Agregado ✓" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
        </motion.div>
    </section>
  );
}
