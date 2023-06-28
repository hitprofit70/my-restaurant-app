const express = require('express');
const router = express.Router();
const {findAllProducts, findSingleProduct, addProduct} = require('../controllers/products');

router.get('/', findAllProducts);

router.get('/:id', findSingleProduct);

module.exports = router;