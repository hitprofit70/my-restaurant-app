const express = require('express');
const router = express.Router();
const {findAllFoods, findSingleFood} = require('../controllers/foods');

router.get('/',findAllFoods);

router.get('/:id', findSingleFood);

module.exports = router;