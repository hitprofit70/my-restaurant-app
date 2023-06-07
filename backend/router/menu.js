const express = require('express');
const router = express.Router();
const {findAllMenu, findSingleMenu} = require('../controllers/menu');

router.get('/', findAllMenu);

router.get('/:id', findSingleMenu);

module.exports = router;