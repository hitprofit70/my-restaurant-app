const express = require('express');
const router = express.Router();
const {findAllFoods} = require('../controllers/foods');

router.get('/',findAllFoods);

module.exports = router;