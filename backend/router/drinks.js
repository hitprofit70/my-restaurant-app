const express = require('express');
const router = express.Router();
const {findAllDrinks, findSingleDrink} = require('../controllers/drinks')

router.get('/', findAllDrinks);

router.get('/:id', findSingleDrink)

module.exports = router;