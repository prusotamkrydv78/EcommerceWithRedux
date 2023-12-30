const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controllers/productControllers");
const router = express.Router();

//  GET ROUTE FOR ALL PRODUCTS...........
router.route("/products").get(getProducts);

// GET ROUTE FOR SINGLE PRODUCT...............
router.route("/product/:id").get(getProduct);

module.exports = router;
