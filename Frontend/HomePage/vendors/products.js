const productList = document.getElementById("productList");
const addBtn = document.getElementById("addProductBtn");

let products = JSON.parse(localStorage.getItem("products")) || [];

// render existing products
renderProducts();

addBtn.addEventListener("click", () => {
  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();

  if (!name || !price) {
    alert("Please fill all fields");
    return;
  }

  products.push({ name, price });
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  renderProducts();
});

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button data-index="${index}">Delete</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
    });
    productList.appendChild(card);
  });
}
