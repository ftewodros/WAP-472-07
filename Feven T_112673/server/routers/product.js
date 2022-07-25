const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);

router.get("/:productId", productController.getProductById);

router.post('/order', productController.placeOrder)

module.exports = router;