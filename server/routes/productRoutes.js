const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/**
 * GET /api/products
 * SEARCH + FILTER (FIXED)
 */
router.get("/", async (req, res) => {
  try {
    const query = {};

    // 🔍 SEARCH
    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: "i" };
    }

    // 📦 CATEGORY
    if (req.query.category) {
      query.category = req.query.category;
    }

    // 💰 PRICE FILTER
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};

      if (req.query.minPrice) {
        query.price.$gte = parseInt(req.query.minPrice);
      }

      if (req.query.maxPrice) {
        query.price.$lte = parseInt(req.query.maxPrice);
      }
    }

    console.log("FINAL QUERY OBJECT 👉", query);

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
