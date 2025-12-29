const API_URL = "http://localhost:5000/api";

/* ---------------- PRODUCTS ---------------- */

// supports search & filters later
export const fetchProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}/products?${query}`);
  return res.json();
};

/* ---------------- AUTH ---------------- */

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

/* ---------------- ORDERS (OPTIONAL – CAN USE LATER) ---------------- */

// safe to keep, even if backend not ready yet
export const placeOrder = async (token, items) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items }),
  });
  return res.json();
};
