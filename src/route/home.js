const route = require('express').Router();
const { home: controller } = require('../core/controller');

route.get('/', controller.homePage);

module.exports = route;
