'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/indexController')

/* GET users listing. */
router.get('/', controller.getAllData);

module.exports = router;
