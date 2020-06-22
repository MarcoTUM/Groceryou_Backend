"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const AuthController = require('../controllers/auth');


router.post('/login', AuthController.login); //see above
router.post('/register', AuthController.register); //see above
router.get('/me', middlewares.checkAuthentication, AuthController.me);
router.get('/logout', middlewares.checkAuthentication, AuthController.logout)

module.exports = router;
