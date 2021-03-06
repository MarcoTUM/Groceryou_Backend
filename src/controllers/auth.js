"use strict";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../config');
const UserModel = require('../models/userModel');

const tokenExpTime = config.tokenExpTime;

const login = async (req,res) => {
    if(!Object.prototype.hasOwnProperty.call(req.body, 'password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password prop'
    });

    if(!Object.prototype.hasOwnProperty.call(req.body, 'username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username prop'
    });

    try{
        let user = await UserModel.findOne({username: req.body.username}).exec();

        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordValid) return res.status(401).send({token:null});

        const token = jwt.sign({id: user._id, username: user.username}, config.JwtSecret, {
            expiresIn: tokenExpTime
        });

        return res.status(200).json({token: token});
    } catch(err){
        return res.status(404).json({
            error: 'User Not Found',
            message: err.message
        });
    }
};

const register = async (req,res) => {
    if(!Object.prototype.hasOwnProperty.call(req.body, 'password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password prop'
    });

    if(!Object.prototype.hasOwnProperty.call(req.body, 'username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username prop'
    });

    const user = Object.assign(req.body, {password: bcrypt.hashSync(req.body.password, 8)});

    try{
        let retUser = await UserModel.create(user);

        const token = jwt.sign({id: retUser._id, username: retUser.username}, config.JwtSecret, {
            expiresIn: tokenExpTime
        });

        res.status(200).json({token: token});
    } catch(err){
        if(err.code == 11000){
            return res.status(400).json({
                error: 'User already exists',
                message: err.message
            });
        } else {
            return res.status(500).json({
                error: 'Internal server error',
                message: err.message
            });
        }
    }
};

const me = async (req,res) => {
    try{
        let user = await UserModel.findById(req.userId).select('username').exec();

        if(!user) return res.status(404).json({
            error: 'Not Found',
            message: 'User not found'
        });

        return res.status(200).json(user);
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
};

const logout = (req,res) => {
    res.status(200).send({token: null});
};

const amICourier = async (req,res) => {
    try{
        let user = await UserModel.findById(req.body.id).exec();
        return res.status(200).json({isCourier: user.isCourier});
    } catch(err) {
        return res.status(404).json({
            error: 'User Not Found',
            message: err.message
        });
    }
};

module.exports = {
    login,
    register,
    logout,
    me,
    amICourier,
};
