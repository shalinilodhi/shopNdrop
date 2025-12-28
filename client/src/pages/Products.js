import { useEffect, useState } from "react";
import api from "../api/api";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="products">
      {products.map(p => (
        <div className="card" key={p._id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
