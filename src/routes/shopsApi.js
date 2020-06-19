"use strict";

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.list);

module.exports = router;