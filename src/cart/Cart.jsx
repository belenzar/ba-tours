import { useCart } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    total,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-10">El carrito está vacío</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-20 rounded" />

            <div>
              <h3 className="font-semibold">{item.title}</h3>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">${item.price * item.quantity}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total}</p>
        <Link
          to="/checkout"
          className="inline-block mt-4 mr-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Finalizar compra
        </Link>
        <button
          onClick={clearCart}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
