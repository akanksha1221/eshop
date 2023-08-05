import express from "express";
const router = express.Router();
import { getProductById, getProducts, getProductList } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).get(protect, admin, getProductList);

router.route("/:id").get(getProductById);

export default router;
