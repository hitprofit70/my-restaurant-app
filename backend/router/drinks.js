const express = require('express');
const router = express.Router();
const {findAllDrinks} = require('../controllers/drinks')

router.get('/', findAllDrinks);

module.exports = router;