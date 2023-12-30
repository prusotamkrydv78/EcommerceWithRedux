const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});
 const getProduct = asyncHandler(async (req, res) => {
   const product = await productModel.findById(req.params.id);
   if (product) {
     res.json(product);
   } else {
     res
       .status(404)
       .json({ message: "product not found for which you are looking" });
   }
 });

 module.exports = {getProduct,getProducts}