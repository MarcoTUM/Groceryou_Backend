"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require ('../middlewares');
const userController = require('../controllers/userController');

router.get('/', userController.list);
router.post('/', middlewares.checkAuthentication, userController.create);
router.get('/:id', userController.read);
router.put('/:id', middlewares.checkAuthentication, userController.update);
router.delete('/:id', middlewares.checkAuthentication, userController.remove);

module.exports = router;
