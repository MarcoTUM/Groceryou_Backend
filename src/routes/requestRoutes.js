"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require ('../middlewares');
const customerRequestController = require('../controllers/requestController');

router.get('/', customerRequestController.list);
router.post('/', middlewares.checkAuthentication, customerRequestController.create);
router.get('/:id', customerRequestController.read);

router.get('/userId/:id', customerRequestController.listByUserId);

router.put('/:id', customerRequestController.update);
router.delete('/:id', customerRequestController.remove);
router.put('/:id', middlewares.checkAuthentication, customerRequestController.update);
router.delete('/:id', middlewares.checkAuthentication, customerRequestController.remove);

module.exports = router;
