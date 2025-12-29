import { Link } from "react-router-dom";
import "../../styles/customer.css";

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard">
      <aside className="customer-sidebar">
        <h2>Customer Panel</h2>

        <Link to="/customer/products">Products</Link>
        <Link to="/customer/cart">My Cart</Link>
        <Link to="/customer/orders">My Orders</Link>
      </aside>

      <main className="customer-content">
        <h1>Welcome 👋</h1>
        <p>Select an option from the left menu</p>
      </main>
    </div>
  );
};

export default CustomerDashboard;
