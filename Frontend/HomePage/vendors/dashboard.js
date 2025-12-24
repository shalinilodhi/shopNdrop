const products = JSON.parse(localStorage.getItem("products")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

document.getElementById("productCount").textContent = products.length;
document.getElementById("orderCount").textContent = orders.length;
