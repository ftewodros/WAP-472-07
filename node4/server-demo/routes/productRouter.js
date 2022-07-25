const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/products', productController.save);
router.get('/products', productController.getAll);


module.exports = router;