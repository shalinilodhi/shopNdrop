const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/**
 * GET /api/products
 * SEARCH + FILTER (SAFE & FINAL)
 */
router.get("/", async (req, res) => {
  try {
    const query = {};

    // 🔍 SEARCH by name
    if (req.query.search && req.query.search.trim() !== "") {
      query.name = {
        $regex: req.query.search.trim(),
        $options: "i",
      };
    }

    // 📦 CATEGORY filter
    if (req.query.category && req.query.category.trim() !== "") {
      query.category = req.query.category.trim();
    }

    // 💰 PRICE FILTER
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};

      if (req.query.minPrice) {
        query.price.$gte = Number(req.query.minPrice);
      }

      if (req.query.maxPrice) {
        query.price.$lte = Number(req.query.maxPrice);
      }
    }

    console.log("FINAL QUERY OBJECT 👉", query);

    // IMPORTANT: lean() avoids mongoose overhead / hanging
    const products = await Product.find(query).lean();

    return res.status(200).json(products);
  } catch (err) {
    console.error("PRODUCT ROUTE ERROR 👉", err);
    return res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

module.exports = router;
