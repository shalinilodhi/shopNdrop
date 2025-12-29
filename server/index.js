// LOAD ENV FIRST
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROOT TEST
app.get("/", (req, res) => {
  res.send("Backend OK");
});

// ROUTES
console.log("Mounting AUTH routes");
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
