import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TourSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md bg-white/80 backdrop-bluroverflow-hidden animate-pulse flex flex-col">
      <div className="h-48 w-full bg-orange-300 rounded-t-xl relative overflow-hidden" />
      <div className="p-4 flex flex-col gap-3 flex-grow">
        <div className="h-5 bg-orange-300 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-orange-200 rounded w-full" />
          <div className="h-4 bg-orange-200 rounded w-5/6" />
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="h-6 w-20 bg-orange-300 rounded" />
          <div className="h-8 w-24 bg-orange-300 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function TourList({ tours = [], loading = false }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Tours en Buenos Aires
      </h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <TourSkeleton key={i} />)
          : tours.map((tour) => (
              <div
                key={tour.id}
                className="
                  bg-white/80 backdrop-blur rounded-xl shadow-md overflow-hidden
                  hover:scale-105 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300
                  flex flex-col h-full
                "
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Tour+BA";
                    }}
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">
                    {tour.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                    {tour.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-orange-600">
                      ${tour.price.toLocaleString("es-AR")}
                    </span>

                    <Link
                      to={`/tours/${tour.id}`}
                      className="
                        bg-orange-600 text-white px-4 py-2 rounded-lg
                        hover:bg-orange-700 transition
                      "
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </motion.div>
    </section>
  );
}
