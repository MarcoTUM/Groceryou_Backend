"use strict";

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

// List all shops with details
router.get('/', shopController.list);

// create a new shop
router.post('/', shopController.create);

// get shop data by ObjectId
router.get('/:id', shopController.read);

// update shop with ObjectId
router.put('/:id', shopController.update);

// delete shop with ObjectId
router.delete('/:id',  shopController.remove);

module.exports = router;