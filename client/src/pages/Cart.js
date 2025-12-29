import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>
        <button className="checkout-btn">Checkout</button>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
