"use strict";

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

// List all shops with details
router.get('/', shopController.list);

// get shop data by ObjectId
router.get('/:id', shopController.read);

module.exports = router;