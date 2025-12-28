const API = "http://localhost:5000/api";

export const loginUser = (data) =>
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const fetchProducts = () =>
  fetch(`${API}/products`).then((res) => res.json());

export const placeOrder = (token, items) =>
  fetch(`${API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ items }),
  });
