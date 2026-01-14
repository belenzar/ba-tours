import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <p className="text-center mt-10">No hay productos en el carrito</p>;
  }

  const handleConfirm = () => {
    clearCart();
    navigate("/checkout/success");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Resumen de tu compra</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 rounded" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>

            <p className="font-semibold">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-xl font-bold mb-4">Total: ${total}</p>

        <button
          onClick={handleConfirm}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Confirmar compra
        </button>
      </div>
    </div>
  );
}
