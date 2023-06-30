const express = require('express');
const router = express.Router();
const {findAllDrinks, findSingleProduct} = require('../controllers/drinks')

router.get('/', findAllDrinks);

router.get('/:id', findSingleProduct);

module.exports = router;