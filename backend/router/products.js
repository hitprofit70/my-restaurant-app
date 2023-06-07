const express = require('express');
const router = express.Router();
const {findAllProducts} = require('../controllers/products');

router.get('/', findAllProducts);

module.exports = router;