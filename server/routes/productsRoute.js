const express = require("express");
const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");
const router = express.Router();

//  GET ROUTE FOR ALL PRODUCTS...........

router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await productModel.find({});
    res.json(products);
  })
);

// GET ROUTE FOR SINGLE PRODUCT...............

router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.json(product);
    }else{
      res.status(404).json({message:"product not found for which you are looking"})
    }
  })
);

module.exports = router;
