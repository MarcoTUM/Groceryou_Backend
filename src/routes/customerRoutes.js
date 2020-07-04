"use strict";

const express = require('express');
const router = express.Router();

// const middlewares = require ('../middlewares');
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);// List all shopping requests
// router.post('/', middlewares.checkAuthentication, shopReqController.create())
router.post('/', customerController.create);
router.get('/:id', customerController.read);
// router.put('/:id', middlewares.checkAuthentication, shopReqController.update);
router.put('/:id', customerController.update);
// router.delete('/:id', middlwares.checkAuthentication, shopReqController.remove);
router.delete('/:id', customerController.remove);

module.exports = router;