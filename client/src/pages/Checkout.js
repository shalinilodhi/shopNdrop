import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {cartItems.map(item => (
        <div key={item._id} className="checkout-item">
          <span>{item.name}</span>
          <span>₹{item.price} × {item.qty}</span>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button className="checkout-btn">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
