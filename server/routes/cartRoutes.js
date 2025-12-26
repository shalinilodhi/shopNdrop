const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// ADD / UPDATE CART
router.post("/", auth, async (req, res) => {
  const { items } = req.body;
  const userId = req.user.userId;

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({ user: userId, items });
    return res.status(201).json(cart);
  }

  items.forEach((newItem) => {
    const existingItem = cart.items.find(
      (item) => item.product.toString() === newItem.product
    );

    if (existingItem) {
      existingItem.quantity += newItem.quantity;
    } else {
      cart.items.push(newItem);
    }
  });

  await cart.save();
  res.json(cart);
});

// GET CART
router.get("/", auth, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.userId }).populate(
    "items.product"
  );
  res.json(cart);
});

module.exports = router;
