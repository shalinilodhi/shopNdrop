console.log("🔥 INDEX FILE LOADED 🔥");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ROOT WORKING");
});

app.get("/api/products", (req, res) => {
  res.send("PRODUCTS WORKING");
});

app.listen(5000, () => {
  console.log("🚀 SERVER STARTED");
});
