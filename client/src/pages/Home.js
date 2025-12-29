import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Fresh Groceries Delivered Fast</h1>
          <p>
            Shop fresh fruits, vegetables & daily essentials
            directly from trusted local vendors.
          </p>

          <Link to="/products" className="hero-btn">
            Browse Products
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="groceries"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>🥬 Fresh Products</h3>
          <p>Handpicked from local vendors</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick doorstep delivery</p>
        </div>

        <div className="feature-card">
          <h3>💳 Easy Checkout</h3>
          <p>Simple & secure payments</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
