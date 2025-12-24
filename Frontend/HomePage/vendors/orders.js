let orders = JSON.parse(localStorage.getItem("orders")) || [
  { id: 1, customer: "Rahul", product: "Fresh Apples", status: "Pending" },
  { id: 2, customer: "Anita", product: "Bakery Cake", status: "Pending" }
];

localStorage.setItem("orders", JSON.stringify(orders));

const container = document.getElementById("ordersContainer");
renderOrders();

function renderOrders() {
  container.innerHTML = "";
  orders.forEach((order, i) => {
    const card = document.createElement("div");
    card.className = "order-card";
    card.innerHTML = `
      <h4>Order #${order.id}</h4>
      <p><strong>Customer:</strong> ${order.customer}</p>
      <p><strong>Product:</strong> ${order.product}</p>
      <p class="status ${order.status === "Pending" ? "pending" : "accepted"}">
        Status: ${order.status}
      </p>
      ${order.status === "Pending" ? "<button>Accept Order</button>" : ""}
    `;

    const btn = card.querySelector("button");
    if (btn) {
      btn.addEventListener("click", () => {
        orders[i].status = "Accepted";
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders();
      });
    }

    container.appendChild(card);
  });
}
