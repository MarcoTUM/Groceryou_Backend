"use strict";

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

// List all shops with details
router.get('/', shopController.list);
// router.post('/', middlewares.checkAuthentication, shopController.create())

// create a new shop
router.post('/', shopController.create);

// get shop data by ObjectId
router.get('/:id', shopController.read);
// router.put('/:id', middlewares.checkAuthentication, shopController.update);

// update shop with ObjectId
router.put('/:id', shopController.update);
// router.delete('/:id', middlwares.checkAuthentication, shopController.remove);

// delete shop with ObjectId
router.delete('/:id',  shopController.remove);

module.exports = router;