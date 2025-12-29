import { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../api/api";
import { CartContext } from "../context/CartContext";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { addToCart } = useContext(CartContext);

  // ✅ SINGLE loadProducts function
  const loadProducts = async () => {
    const data = await fetchProducts();
    
    // 🔍 FRONTEND FILTERING (backend later)
    const filtered = data.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchMin = minPrice ? p.price >= Number(minPrice) : true;
      const matchMax = maxPrice ? p.price <= Number(maxPrice) : true;
      return matchSearch && matchMin && matchMax;
    });

    setProducts(filtered);
  };

  // ✅ Load once on page load
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {/* SEARCH & FILTER BAR */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min ₹"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max ₹"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />

        <button onClick={loadProducts}>Apply</button>
      </div>

      {/* PRODUCTS LIST */}
      <div className="products">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map(p => (
            <div key={p._id} className="card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
