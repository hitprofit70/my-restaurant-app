const express = require('express');
const router = express.Router();
const {findAllBurger,findSingleBurger} = require('../controllers/menuburger');

router.get('/', findAllBurger);

router.get('/:id', findSingleBurger);

module.exports = router;