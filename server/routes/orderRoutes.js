const express = require("express");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CHECKOUT
router.post("/checkout", auth, async (req, res) => {
  const userId = req.user.userId;

  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const order = await Order.create({
    user: userId,
    items: cart.items,
    totalAmount,
  });

  await Cart.deleteOne({ user: userId });

  res.status(201).json(order);
});

module.exports = router;
