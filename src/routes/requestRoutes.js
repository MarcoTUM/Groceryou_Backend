"use strict";

const express = require('express');
const router = express.Router();

// const middlewares = require ('../middlewares');
const customerRequestController = require('../controllers/requestController');

router.get('/', customerRequestController.list);// List all shopping requests
// router.post('/', middlewares.checkAuthentication, shopReqController.create())
router.post('/', customerRequestController.create);
router.get('/:id', customerRequestController.read);
// router.put('/:id', middlewares.checkAuthentication, shopReqController.update);
router.put('/:id', customerRequestController.update);
// router.delete('/:id', middlewares.checkAuthentication, shopReqController.remove);
router.delete('/:id', customerRequestController.remove);

module.exports = router;
