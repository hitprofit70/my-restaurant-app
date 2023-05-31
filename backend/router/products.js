const express = require('express');
const router = express.Router();
const {findAllProducts, findSingleProduct, addNewProducts, updateProduct, deleteProduct} = require('../controllers/products');

router.get('/', findAllProducts);

router.get('/:id', findSingleProduct);

router.post('/', addNewProducts);

router.put('/', updateProduct);

router.delete('/', deleteProduct);

module.exports = router;