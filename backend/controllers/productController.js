import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";


// @desc  Fetch All Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
     const products = await Product.find();
     res.json(products);
});



// @desc  Fetch single Products
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id);
   if (product) {
     res.json(product);
   } else {
     res.status(404);
     throw new Error("Product not found");
   }
});

// @desc  Fetch All Products
// @route GET /api/products
// @access Private/Admin
const getProductList = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export { getProductById, getProducts, getProductList}
