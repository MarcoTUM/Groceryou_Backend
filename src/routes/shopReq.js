"use strict";

const express = require('express');
const router = express.Router();

// const middlewares = require ('../middlewares');
const shopReqController = require('../controllers/shopReq');

router.get('/', shopReqController.list);// List all shopping requests
// router.post('/', middlewares.checkAuthentication, shopReqController.create())
router.post('/', shopReqController.create);
router.get('/:id', shopReqController.read);
// router.put('/:id', middlewares.checkAuthentication, shopReqController.update);
router.put('/:id', shopReqController.update);
// router.delete('/:id', middlwares.checkAuthentication, shopReqController.remove);
router.delete('/:id',  shopReqController.remove);

module.exports = router;
