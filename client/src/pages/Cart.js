import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((c, i) => (
        <p key={i}>{c.name} - ₹{c.price}</p>
      ))}
    </div>
  );
}
