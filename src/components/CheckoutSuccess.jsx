import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccess() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
      <h2 className="text-2xl font-bold mb-2">
        ¡Compra realizada con éxito!
      </h2>
      <p className="text-gray-600 mb-6">
        Gracias por tu compra
      </p>

      <Link
        to="/"
        className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
