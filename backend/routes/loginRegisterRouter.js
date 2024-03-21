const { register } = require('../controller/register');

const Router = require('express').Router();


Router.post('/register', register)

module.exports = Router