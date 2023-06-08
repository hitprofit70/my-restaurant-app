const express = require('express');
const { findAllMenu } = require('../controllers/menu');
const router = express.Router();

router.get('/', findAllMenu);

module.exports = router;