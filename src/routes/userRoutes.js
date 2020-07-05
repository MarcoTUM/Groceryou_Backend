"use strict";

const express = require('express');
const router = express.Router();

// const middlewares = require ('../middlewares');
const userController = require('../controllers/userController');

router.get('/', userController.list);// List all shopping requests
// router.post('/', middlewares.checkAuthentication, shopReqController.create())
router.post('/', userController.create);
router.get('/:id', userController.read);
// router.put('/:id', middlewares.checkAuthentication, shopReqController.update);
router.put('/:id', userController.update);
// router.delete('/:id', middlewares.checkAuthentication, shopReqController.remove);
router.delete('/:id', userController.remove);

module.exports = router;