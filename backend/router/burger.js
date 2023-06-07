const express = require('express');
const router = express.Router();
const {findAllBurger, findSingleBurger} = require('../controllers/burger');

router.get('/', findAllBurger);

router.get('/:id', findSingleBurger);

module.exports = router;