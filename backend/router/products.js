const express = require('express');
const router = express.Router();
const {findAllProducts, findSingleProduct} = require('../controllers/products');

router.get('/', findAllProducts);

router.get('/:id',findSingleProduct);

module.exports = router;